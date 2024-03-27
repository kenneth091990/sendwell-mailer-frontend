import { useEffect, useReducer, useRef } from "react";
import { csvToJson, formatFileSize } from "../../../core/constants";
import Icon_DragAndDrop from "./../../../images/nav/Icon_DragAndDrop.png"
import InputWithCounter from "../../../components/InputWithCounter";
import TextAreaWithCounter from "../../../components/TextAreaWithCounter";
import { createList } from "../../../modules/lists/listThunk";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { LIST_EVENTS, selectListState } from "../../../modules/lists/listSlice";


const UploadForm = ({
    fileDetails,
    setFileDetails,
    setShowModal,
    handleFileUpload,
    importFileData,
    formRef,
    showModal,
    formType
}) => {
    const dispatch = useDispatch();
    const { status, event } = useSelector(selectListState);
    const [body, setBody] = useReducer(
        (prev, next) => {
            var newEvent = { ...prev, ...next };

            return newEvent;
        },
        {
            name: "",
            description: "",
            fileType: "",
        }
    )

    useEffect(() => {
        if (event === LIST_EVENTS.create) {
            if (status === "success") {
                setBody({
                    name: "",
                    description: "",
                    fileType: "",
                })
            }
        }
    }, [status, event])


    useEffect(() => {
        if (!showModal && formType === "uploadList") {
            setBody({
                name: "",
                description: "",
            })
        }
    }, [showModal])


    const handleFile = (event) => {
        const uploadedFile = event.target.files[0];
        const allowedExtensions = ['csv', 'xls', 'xlsx', 'txt'];

        if (uploadedFile) {
            const extension = uploadedFile.name.split('.').pop().toLowerCase();
            setBody({
                fileType: extension
            })
            if (!allowedExtensions.includes(extension)) {
                toast.error(`Please upload a TXT, CSV or XLS/XLSX file.`);
            } else {

                const currentForm = formRef.current;
                const fileInput = currentForm.querySelector('#importList');
                const file = fileInput.files[0];

                handleFileUpload(file, extension);

            }
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setBody({
            [name]: value
        })
    }

    const uploadList = (e) => {
        e.preventDefault();

        if (!importFileData.length) {
            toast.warning("TXT or CSV/XLXS file is required");
            return;
        }

        if (!body?.name.trim()) {
            toast.warning("Title is required");
            return;
        }

        console.log({
            recipientList: importFileData,
            listTitle: body?.name,
            listDescription: body?.description,
        })
        var serializeJson = importFileData.map(csvJson => {
            var newObj = { ...csvJson };

            newObj['age'] = Number(newObj['age']);
            newObj['total_loan_amount'] = Number(newObj['total_loan_amount']);
            newObj['email_local_part'] = newObj['email'];

            delete newObj['email'];

            return newObj;
        })

        console.log(body)
        dispatch(createList({
            recipientList: serializeJson,
            listTitle: body?.name,
            listDescription: body?.description,
            fileType: body?.fileType,
        }))

    }

    return (
        <form ref={formRef} onSubmit={uploadList} className='flex-inline'>
            <div className='mt-5'>
                <h2 className='text-blue'>UPLOAD NEW TXT,CSV or XLXS LIST</h2>
            </div>
            <div className='mt-5 text-center mb-10 rounded-lg border border-stroke p-7'>
                <div>
                    <img src={Icon_DragAndDrop} height={70} width={70} className='mx-auto my-0' />
                    <div className=' tracking-tight text-gray'>Drag file here to upload </div>
                    <div className=' tracking-tight text-gray'>or </div>
                    <div className=' tracking-tight text-gray mt-3'>
                        <label htmlFor="importList" className='p-3 px-5 rounded-md bg-blue cursor-pointer'>  Select a file
                            <input name="" type="file" id="importList" hidden onChange={handleFile} accept=".csv, .txt, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
                        </label>
                    </div>
                </div>
            </div>
            {fileDetails?.name ? <div className='mt-5 text-left'>
                <div>
                    <label className='text-blue'>SELECTED FILE</label>
                </div>
                <div className="grid grid-cols-12  gap-4">
                    <div className='col-span-2 tracking-tight'>
                        {fileDetails?.extension.toLocaleUpperCase()}
                    </div>
                    <div className='col-span-6 tracking-tight'>
                        {fileDetails?.name}
                    </div>
                    <div className='col-span-4 tracking-tight'>
                        {formatFileSize(fileDetails?.size ?? 0)}
                    </div>
                </div>
            </div> : ""}
            <div className='mt-5 text-left'>
                <InputWithCounter limit="30"
                    name="name" value={body?.name} onChange={handleInput}
                    label="NEW LIST TITLE" className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
            </div>
            <div className='mt-5 text-left'>
                <TextAreaWithCounter cols='50' rows='3'
                    name="description" value={body?.description} onChange={handleInput}
                    label="NEW LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
            </div>
            <div className='mt-5'>
                <div>
                    <button type='submit' className='btn  bg-blue p-2 border rounded-md text-white py-2 px-5'>Upload</button>
                </div>
                <div className='mt-3'>
                    <button type='button' className='btn  bg-transparent  text-blue' onClick={(e) => {
                        e.preventDefault();
                        setFileDetails({
                            name: "",
                            extension: "",
                            size: ""
                        })
                        setBody({
                            name: "",
                            description: "",
                        })
                        setShowModal(false)
                    }}>Cancel</button>
                </div>
            </div>
        </form>
    )
}

export default UploadForm;