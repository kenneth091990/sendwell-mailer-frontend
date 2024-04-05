import React, { createRef, useRef, useState, useEffect, useReducer } from 'react'
import DataTable from '../../common/components/DataTable';
import SelectDropdown from '../../components/SelectDropdown';
import CircleIcon from './../../images/nav/Circle_Caution.png'
import BurgerMenu from './../../images/nav/Mobile hamburger.png';
import Icon_Download from "./../../images/nav/Icon_Download-removebg-preview.png"
import Icon_Edit from "./../../images/nav/Icon_Edit-removebg-preview.png"
import Icon_Trash from "./../../images/nav/Icon_Trash-removebg-preview.png"
import DataTableV2 from '../../common/components/DataTableV2';
import Icon_DragAndDrop from "./../../images/nav/Icon_DragAndDrop.png"
import InputWithCounter from '../../components/InputWithCounter';
import Modal from '../../components/Modal';
import TextAreaWithCounter from '../../components/TextAreaWithCounter';
import { toast } from 'react-toastify';
import Papa from 'papaparse';
import { Scrollbars } from 'react-custom-scrollbars-2';
import * as XLSX from 'xlsx';
import SliceString from '../../common/components/SliceString';
import { csvToJson, formatFileSize, handleInput } from '../../core/constants';
import useToast from '../../hooks/useToast';
import { useDispatch, useSelector } from 'react-redux';
import { createFromRecipientList } from '../../modules/recipients/recipientThunks';
import SearchIcon from './../../images/nav/SearchIcon.png'
import InputTextfield from '../../components/InputTextfield';
import { SUPRESSION_EVENTS, selectSupression } from '../../modules/supression/supressionSlice';
import { getSupressionList, supressionDelete, supressionFileUpload } from '../../modules/supression/supressionThunk';
import DeleteForm from './MyListForms/DeleteForm';


const SuppresionFiles = () => {
    const [showModal, setShowModal] = useState(false);
    const [uploadModal, setUploadModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);


    const closeUploadModal = () => {
        setFileDetails({
            name: "",
            extension: "",
            size: ""
        });
        setUploadForm({
            name: "",
            description: ""
        })
        setUploadModal(false)
    }

    const closeDeleteModal = () => {
        setFileDetails({
            name: "",
            extension: "",
            size: ""
        });
        setUploadForm({
            suppression_id: "",
            name: "",
            description: ""
        })
        setDeleteModal(false)
    }


    const [getToast, setToast] = useToast();

    // * Redux
    const { status, event, message, data } = useSelector(selectSupression);
    const dispatch = useDispatch();

    // * Redux Events
    useEffect(() => {
        if (status === "initial") {
            dispatch(getSupressionList({
                pageSize: 100,
                page: 1,
                cemented: false,
            }))
        }

        if (event === SUPRESSION_EVENTS.upload_files) {
            if (status === "loading") {
                setToast(toast.loading("Please wait uploading file and supression details", {
                    isLoading: true
                }))
            }
            if (status === "success") {
                toast.update(getToast, {
                    render: message,
                    isLoading: false,
                    autoClose: true,
                    type: "success"
                })
                closeUploadModal();
                dispatch(getSupressionList({
                    pageSize: 100,
                    page: 1,
                    cemented: false,
                    fetchPolicy: "network-only"
                }))
            }


            if (status === "error") {
                toast.update(getToast, {
                    render: message,
                    isLoading: false,
                    autoClose: true,
                    type: "error"
                })
                dispatch(getSupressionList({
                    pageSize: 100,
                    page: 1,
                    cemented: false,
                }))
            }
        }

        if (event === SUPRESSION_EVENTS.delete_files) {
            if (status === "loading") {
                setToast(toast.loading("Please wait loading.", {
                    isLoading: true
                }))
            }
            if (status === "success") {
                toast.update(getToast, {
                    render: message,
                    isLoading: false,
                    autoClose: true,
                    type: "success"
                })
                closeDeleteModal();
                dispatch(getSupressionList({
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }


            if (status === "error") {
                toast.update(getToast, {
                    render: message,
                    isLoading: false,
                    autoClose: true,
                    type: "error"
                })
                dispatch(getSupressionList({
                    pageSize: 100,
                    page: 1,
                }))
            }
        }
    }, [status, event])



    const formUploadRef = useRef();
    const [importFileData, setImportFileData] = useState({});
    const [fileDetails, setFileDetails] = useState({
        name: "",
        extension: "",
        size: "",
    });
    const [uploadForm, setUploadForm] = useReducer(
        (prev, next) => {
            var newEvent = { ...prev, ...next };

            return newEvent;
        },
        {
            suppression_id: "",
            name: "",
            description: ""
        }
    )

    const handleTXTFile = (event) => {
        const uploadedFile = event.target.files[0];
        const allowedExtensions = ['txt'];

        if (uploadedFile) {
            const extension = uploadedFile.name.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                toast.error(`Please upload a .txt file.`);
            } else {

                const currentForm = formUploadRef.current;
                const fileInput = currentForm.querySelector('#importList');
                const file = fileInput.files[0];

                setFileDetails({
                    extension,
                    name: file?.name,
                    size: file?.size
                });
                setImportFileData(file)
            }
        }
    };

    const uploadList = (e) => {
        e.preventDefault();
        console.log(uploadForm, "uploadFormuploadForm")
        if (!uploadForm?.name) {
            toast.warning("Name is required");
            return;
        }

        if (!importFileData) {
            toast.warning("File is required");
            return;
        }

        dispatch(supressionFileUpload({
            name: uploadForm?.name,
            description: uploadForm?.description,
            filepath: importFileData
        }));
    }

    return (
        <div className='pb-11'>
            <div className="grid grid-cols-12 gap-3">
                <div className='col-span-3 max-sm:col-span-12 text-left max-sm:hidden'>
                    <button className='flex flex-row gap-3 btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            setUploadModal(true);
                        }
                    }>
                        Upload new list
                    </button>
                </div>
                <div className='col-span-6 max-sm:col-span-12 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>
                        SUPPRESSION FILES
                    </h1>
                </div>
                <div className='col-span-3'>
                </div>
            </div>
            <div className="w-full">
                {(() => {
                    var isLoading = false;
                    var isError = false;
                    var myList = data?.supressions ?? [];

                    if (event === SUPRESSION_EVENTS.get_list) {
                        if (status === "loading") {
                            isLoading = true;
                        }

                        if (status === "error") {
                            isLoading = false;
                            isError = true;
                            myList = [];
                        }

                        if (status === "success") {
                            isLoading = false;
                            isError = false;
                            myList = data?.supressions;
                        }
                    } else {
                        isLoading = true;
                    }

                    return (
                        <DataTableV2
                            hideHeaderOnMobile={true}
                            keys={[{
                                "key": "name",
                                "render": "list",
                                "col": '35%',
                            }, {
                                "key": "description",
                                "col": '35%',
                            }, {
                                "key": "status",
                                "col": '10%',
                            }, {
                                "key": "actions",
                                "col": '20%',
                                "render": (
                                    <div className="text-center flex flex-row gap-3 justify-center items-center">
                                        <span className="font-semibold text-black/40 uppercase xsm:text-base">
                                            Actions
                                        </span>
                                    </div>
                                )
                            }]}
                            hideCellOnMobile={true}
                            isLoading={isLoading}
                            emptyDataComponent={(
                                <div className="flex flex-col items-center w-full py-10">
                                    <img src={CircleIcon} alt="CircleIcon" className='h-[4rem] w-[4rem] mb-4' />
                                    <p className='text-black/60'>
                                        {isError ? "No supression files yet." : "It looks like you haven't uploaded any supression file yet."}
                                    </p>
                                </div>
                            )}
                            data={myList.map((mock, index) => {
                                var data = { ...mock };


                                data.mobileCellView = (
                                    <div className='flex flex-col mb-4 justify-between'>
                                        <div className="flex flex-row justify-between">
                                            <span className="text-black/30 text-md uppercase font-semibold">
                                                List
                                            </span>
                                            <button className=''>
                                                <img src={BurgerMenu} height={20} width={20} className='mx-1'></img>
                                            </button>
                                        </div>
                                        <span className='text-sm'>
                                            {data?.list}
                                        </span>
                                        <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                            description
                                        </span>
                                        <span className='text-sm'>
                                            {data?.description ?? "No Description"}
                                        </span>

                                        <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                            count
                                        </span>
                                        <span className='text-sm'>
                                            {data?.count}
                                        </span>
                                        <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                            status
                                        </span>
                                        <span className='text-sm mt-3'>
                                            {data?.status === "active" ? (
                                                <span className='w-2/3 text-center border-none bg-success px-7 border rounded font-thin text-white py-2'>
                                                    Active
                                                </span>
                                            ) : (
                                                <span className='w-2/3 text-center border-none bg-danger px-7 border rounded font-thin text-white py-2'>
                                                    Inactive
                                                </span>
                                            )}
                                        </span>
                                    </div>
                                )

                                data.actions = (
                                    <div className="h-full flex flex-row gap-3 justify-center items-center">
                                        <button className=''>
                                            <img src={Icon_Download} height={20} width={20} className='mx-1'></img>
                                        </button>
                                        {/* <button className='' onClick={
                                            () => {
                                                setShowModal(true);
                                                formView('editList', 'n', 0);
                                            }

                                        }>
                                            <img src={Icon_Edit} height={20} width={20} className='mx-1'></img>
                                        </button> */}
                                        <button className='' onClick={() => {
                                            setUploadForm(data);
                                            setDeleteModal(true);
                                        }}>
                                            <img src={Icon_Trash} height={20} width={20} className='mx-1'></img>
                                        </button>
                                    </div>
                                )

                                data.description = data?.description ? data?.description : "No Description"

                                data.status = (
                                    <div className="h-full w-full flex items-center  text-xs justify-start">
                                        {data?.status ? (
                                            <span className='w-full text-center border-none bg-success px-5 border rounded font-thin text-white py-1'>
                                                Active
                                            </span>
                                        ) : (
                                            <span className='w-full text-center border-none bg-danger px-5 border rounded font-thin text-white py-1'>
                                                Inactive
                                            </span>
                                        )}
                                    </div>
                                )


                                return data;
                            })}
                            // headerChildren={(
                            //     <div className='flex flex-row py-5'>
                            //         <SelectDropdown
                            //             label={"SORT BY CAMPAIGN"}
                            //             labelClassName="font-semibold text-black/40 text-sm uppercase"
                            //             containerClassName={"w-1/5 max-sm:w-full"}>
                            //             <option value="">All Campaigns</option>
                            //             <option value="">Test Campaigns</option>
                            //         </SelectDropdown>
                            //     </div>
                            // )}
                            headerChildren={(
                                <div className='w-full max-sm:items-center max-sm:flex-col flex flex-row mb-3'>
                                    <InputTextfield className={"rounded-md border focus:border-primary focus-visible:border-primary border-black/10 bg-transparent px-2 py-2"} inputProps={{
                                        placeholder: "Search...",
                                        type: "text",
                                    }} iconComponent={(
                                        <div className='px-3 py-2'>
                                            <img src={SearchIcon} className="h-6 w-6" alt="SearchIcon" />
                                        </div>
                                    )} />
                                </div>
                            )}
                        />
                    )
                })()}
            </div>

            <Modal showModal={uploadModal} onClose={closeUploadModal}>
                <form ref={formUploadRef} onSubmit={uploadList} className='flex-inline'>
                    <div className='mt-5'>
                        <h2 className='text-blue'>UPLOAD TXT LIST</h2>
                    </div>
                    <div className='mt-5 text-center mb-10 rounded-lg border border-stroke p-7 cursor-pointer'>
                        <div>
                            <img src={Icon_DragAndDrop} height={70} width={70} className='mx-auto my-0' />
                            <div className=' tracking-tight text-gray'>Drag file here to upload </div>
                            <div className=' tracking-tight text-gray'>or </div>
                            <div className=' tracking-tight text-gray mt-3'>
                                <label htmlFor="importList" className='p-3 px-5 rounded-md bg-blue cursor-pointer'>  Select a file
                                    <input name="" type="file" id="importList" hidden onChange={handleTXTFile} accept=".txt" />
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
                        <InputWithCounter required={true} value={uploadForm?.name} name="name" onChange={(e) => handleInput(e, setUploadForm)} limit="30" label="NEW LIST TITLE" className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
                    </div>
                    <div className='mt-5 text-left'>
                        <TextAreaWithCounter cols='50' required={true} value={uploadForm?.description} name="description" onChange={(e) => handleInput(e, setUploadForm)} rows='3' label="NEW LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
                    </div>
                    <div className='mt-5'>
                        <div>
                            <button type='submit' className='btn  bg-blue p-2 border rounded-md text-white py-2 px-5'>Upload</button>
                        </div>
                        <div className='mt-3'>
                            <button type='button' className='btn  bg-transparent  text-blue' onClick={closeUploadModal}>Cancel</button>
                        </div>
                    </div>
                </form>
            </Modal>

            <Modal showModal={deleteModal} onClose={closeDeleteModal}>
                <DeleteForm dispatchFunction={() => dispatch(supressionDelete({ suppression_id: uploadForm?.suppression_id }))} setShowModal={closeDeleteModal} editList={uploadForm} />
            </Modal>
        </div>
    )
}

export default SuppresionFiles;