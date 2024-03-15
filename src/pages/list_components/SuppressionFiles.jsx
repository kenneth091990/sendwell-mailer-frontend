import React, { createRef, useRef, useState, useEffect } from 'react'
import DataTable from '../../common/components/DataTable';
import SelectDropdown from '../../components/SelectDropdown';
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
import { csvToJson, formatFileSize } from '../../core/constants';
import useToast from '../../hooks/useToast';
import { useDispatch } from 'react-redux';
import { createFromRecipientList } from '../../modules/recipients/recipientThunks';



const SuppresionFiles = () => {
    const [showModal, setShowModal] = useState(false);
    const [getToast, setToast] = useToast();
    const dispatch = useDispatch();
    const [form, setForm] = useState(null);
    const [importFileData, setImportFileData] = useState({});
    const [fileDetails, setFileDetails] = useState({
        name: "",
        extension: "",
        size: ""
    });
    const formRef = useRef(null);
    const formListTitleRef = createRef(null);
    const formListDescRef = createRef(null);

    const importFields = [
        {
            field: 'firstName',
            label: "FIRST NAME",
            stringRelated: [
                'first name',
                'name',
                'firstname',
                'first_name'
            ]

        },
        {
            field: 'lastName',
            label: "LAST NAME",
            stringRelated: [
                'last name',
                'lastname',
                'last_name'
            ]

        },
        {
            field: 'emailAddress',
            label: "EMAIL ADDRESS",
            stringRelated: [
                'email address',
                'email',
                'email_address'
            ]

        },
        {
            field: 'streetAddress 1',
            label: "STREET ADDRESS 1",
            stringRelated: [
                'street address 1',
                'street 1',
                'street_address_1'
            ]

        },
        {
            field: 'streetAddress 2',
            label: "STREET ADDRESS 2",
            stringRelated: [
                'street address 2',
                'street 2',
                'street_address_2'
            ]

        },
        {
            field: 'city',
            label: "CITY",
            stringRelated: [
                'city',
                'City',
            ]

        },
        {
            field: 'state',
            label: "STATE",
            stringRelated: [
                'state',
                'STATE',
            ]

        },
        {
            field: 'zip',
            label: "ZIP",
            stringRelated: [
                'zip',
                'ZIP'
            ]

        },
        {
            field: 'phone',
            label: "PHONE",
            stringRelated: [
                'phone',
                'Phone',
                'PHONE',
            ]

        },
        {
            field: 'gender',
            label: "GENDER",
            stringRelated: [
                'gender',
                'sex',
                'Gender',
                'GENDER',
            ]
        },
        {
            field: 'country',
            label: "COUNTRY",
            stringRelated: [
                'country',
                'Country',
                'COUNTRY',
            ]
        },
        {
            field: 'military_service',
            label: "MILITARY SERVICE",
            stringRelated: [
                'military_service',
                'militaryService',
                'Military service',
                'MILITARY SERVICE',
            ]
        },
        {
            field: 'site_name',
            label: "SITE NAME",
            stringRelated: [
                'site_name',
                'siteName',
                'Site name',
                'SITE NAME',
            ]
        },
        {
            field: 'credit_rating',
            label: "CREDIT RATING",
            stringRelated: [
                'credit_rating',
                'creditRating',
                'Credit rating',
                'CREDIT RATING',
            ]
        },
        {
            field: 'sub_vertical_name',
            label: "SUB VERTICAL NAME",
            stringRelated: [
                'sub_vertical_name',
                'subVerticalName',
                'Sub vertical name',
                'SUB VERTICAL NAME',
            ]
        },
        {
            field: 'loan_purpose',
            label: "LOAN PURPOSE",
            stringRelated: [
                'loan_purpose',
                'loanPurpose',
                'Loan purpose',
                'LOAN PURPOSE',
            ]
        },
        {
            field: 'mortgage_loan_purpose',
            label: "MORTGAGE LOAN PURPOSE",
            stringRelated: [
                'mortgage_loan_purpose',
                'mortgageLoanPurpose',
                'Mortgage loan purpose',
                'MORTGAGE LOAN PURPOSE',
            ]
        },
        {
            field: 'total_loan_amount',
            label: "TOTAL LOAN AMOUNT",
            stringRelated: [
                'total_loan_amount',
                'totalLoanAmount',
                'Total loan amount',
                'TOTAL LOAN AMOUNT',
            ]
        },
        {
            field: 'total_loan_amount',
            label: "TOTAL LOAN AMOUNT",
            stringRelated: [
                'total_loan_amount',
                'totalLoanAmount',
                'Total loan amount',
                'TOTAL LOAN AMOUNT',
            ]
        },
        {
            field: 'vehicle_make',
            label: "VEHICLE MAKE",
            stringRelated: [
                'vehicle_make',
                'vehicleMake',
                'Vehicle make',
                'VEHICLE MAKE',
            ]
        },
        {
            field: 'vehicle_model',
            label: "VEHICLE MODEL",
            stringRelated: [
                'vehicle_model',
                'vehicleModel',
                'Vehicle model',
                'VEHICLE MODEL',
            ]
        },
        {
            field: 'own_or_rent',
            label: "OWN OR RENT",
            stringRelated: [
                'own_or_rent',
                'ownOrRent',
                'Own or rent',
                'OWN OR RENT',
            ]
        },
        {
            field: 'ip_address',
            label: "IP ADDRESS",
            stringRelated: [
                'ip_address',
                'ipAddress',
                'Ip address',
                'IP ADDRESS',
            ]
        },
        {
            field: 'birthday',
            label: "BIRTHDAY",
            stringRelated: [
                'birthday',
                'Birthday',
                'BIRTHDAY',
            ]
        },
        {
            field: 'age',
            label: "AGE",
            stringRelated: [
                'age',
                'Age',
                'AGE',
            ]
        },
        {
            field: 'electric_company',
            label: "ELECTRIC COMPANY",
            stringRelated: [
                'electric_company',
                'electricCompany',
                'Electric company',
                'ELECTRIC COMPANY',
            ]
        },
        {
            field: 'vehicle_year',
            label: "VEHICLE YEAR",
            stringRelated: [
                'vehicle_year',
                'vehicleYear',
                'Vehicle year',
                'VEHICLE YEAR',
            ]
        },
    ]

    useEffect(() => {

        if (importFileData.length > 0) {
            setForm(importListFileMapping())
        }
    }, [importFileData]);



    const formView = (formName, action, id, data) => {
        switch (formName) {
            case 'uploadList':
                setForm(uploadForm());
                break;
        }

        if (formRef.current) {
            formRef.current.reset();

        }
    }

    const handleFile = (event) => {
        const uploadedFile = event.target.files[0];
        const allowedExtensions = ['csv', 'xls', 'xlsx'];

        if (uploadedFile) {
            const extension = uploadedFile.name.split('.').pop().toLowerCase();
            if (!allowedExtensions.includes(extension)) {
                toast.error(`Please upload a CSV or XLS/XLSX file.`);
            } else {

                const currentForm = formRef.current;
                const fileInput = currentForm.querySelector('#importList');
                const file = fileInput.files[0];

                handleFileUpload(file, extension);

            }
        }
    };

    const uploadForm = () => {

       setFileDetails({
            name: "",
            extension: "",
            size: ""
        });

        return (
            <form ref={formRef} className='flex-inline'>
                <div className='mt-5'>
                    <h2 className='text-blue'>UPLOAD NEW LIST</h2>
                </div>
                <div className='mt-5 text-center mb-10 rounded-lg border border-stroke p-7'>
                    <div>
                        <img src={Icon_DragAndDrop} height={70} width={70} className='mx-auto my-0' />
                        <div className=' tracking-tight text-gray'>Drag file here to upload </div>
                        <div className=' tracking-tight text-gray'>or </div>
                        <div className=' tracking-tight text-gray mt-3'>
                            <label htmlFor="importList" className='p-3 px-5 rounded-md bg-blue'>  Select a file
                                <input name="" type="file" id="importList" hidden onChange={handleFile} accept=".csv, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" />
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
                    <InputWithCounter ref={formListTitleRef} limit="30" label="NEW LIST TITLE" className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
                </div>
                <div className='mt-5 text-left'>
                    <TextAreaWithCounter cols='50' rows='3' ref={formListDescRef} label="NEW LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
                </div>
                <div className='mt-5'>
                    <div>
                        <button type='button' onClick={uploadList} className='btn  bg-blue p-2 border rounded-md text-white py-2 px-5'>Upload</button>
                    </div>
                    <div className='mt-3'>
                        <button type='button' className='btn  bg-transparent  text-blue' onClick={(e) => {
                            e.preventDefault();
                            setShowModal(false)
                        }}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    const importListFileMapping = () => {

        const relatedFieldCtr = getRelatedFieldCtr(importFields);

        return (
            <form ref={formRef} className='flex-inline w-[90%]'>
                <div className='mt-5'>
                    <h2 className='text-blue'>MATCH LABEL TO IMPORT</h2>
                </div>

                <div className='mt-5'>
                    <p> <span className='font-semibold'>{relatedFieldCtr} columns </span> were recognized in this file</p>
                </div>
                <div className='mt-5 import-table'>
                    <Scrollbars style={{ width: '100%' }}
                        renderTrackHorizontal={props => <div {...props} className="track-horizontal" />}
                        renderView={props => <div {...props} className="view" />}>
                        <table className=" w-[100%]" >
                            <thead>
                                <tr>
                                    {
                                        importFileData[0].map((object, i) =>
                                            <th key={i} className="border border-slate-300 border-line-gray text-sm font-medium">
                                                <SelectDropdown className={'p-2'}>
                                                    <option key="" ></option>
                                                    {Object.keys(importFields).map((k, ii) => {
                                                        console.log(importFields[k].stringRelated);
                                                        console.log(importFileData[0][i].toLowerCase());


                                                        return (<option key={k} value={importFields[k].field} selected={importFields[k].stringRelated.indexOf(importFileData[0][i].toLowerCase()) !== -1 ? true : false}>{importFields[k].label}</option>)
                                                    }
                                                    )}
                                                </SelectDropdown>
                                            </th>
                                        )
                                    }
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    importFileData.map((v, i) => {

                                        if (i > 0 && i < 6) {
                                            return (
                                                <tr key={i}>
                                                    {
                                                        v.map((vv, ii) => {
                                                            return (
                                                                <td key={ii} className="border border-slate-300 border-line-gray text-sm font-medium w-maxContent">
                                                                    <SliceString text={vv}></SliceString>
                                                                </td>
                                                            )
                                                        })
                                                    }
                                                </tr>
                                            )
                                        }

                                    })
                                }
                            </tbody>
                        </table>
                    </Scrollbars>
                </div>
                <div className='mt-5'>
                    <div>
                        <button type='button' className='btn  bg-blue p-2 border rounded-md text-white py-2 px-5' onClick={(e) => {
                            e.preventDefault();
                            finalizeImport(e);
                            // * Should show the supporession merge modal

                        }}>Finalize import</button>
                    </div>
                    <div className='mt-3'>
                        <button type='button' className='btn  bg-transparent  text-blue' onClick={(e) => {
                            e.preventDefault();
                            setShowModal(true);
                            formView('uploadList', 'n', 0);
                        }}>Cancel</button>
                    </div>
                </div>

            </form>

        )
    }

    const getRelatedFieldCtr = (importFields) => {

        let ctr = 0;
        importFileData[0].map((object, i) => {
            Object.keys(importFields).map((k, ii) => {
                if (importFields[k].stringRelated.indexOf(importFileData[0][i].toLowerCase()) !== -1) {
                    ctr += 1;
                }
            })
        }
        )


        return ctr;
    }

    const finalizeImport = (e) => {
        e.preventDefault();
        setShowModal(true);
        formView('uploadList', 'n', 0);
    }

    const handleFileUpload = async (file, extension) => {

        let parseResult = null;
        try {
            console.log(file?.name, extension)
            if (extension == 'xlsx') {
                const xlsToCsv = await convertToCsv(file);
                parseResult = await parseCSV(xlsToCsv);


            } else {
                parseResult = await parseCSV(file);

            }
            setTimeout(() => {
                setFileDetails({
                    extension,
                    name: file?.name,
                    size: file?.size
                })
                setImportFileData(parseResult);
            }, 1000);

        } catch (error) {
            console.error('Error parsing CSV:', error);
        }
    };

    const parseCSV = async (file) => {
        return new Promise((resolve, reject) => {
            Papa.parse(file, {
                header: false,
                complete: (results) => resolve(results.data),
                error: (error) => reject(error)
            });
        });
    };

    const convertToCsv = async (file) => {
        return new Promise((resolve, reject) => {

            const reader = new FileReader();

            reader.onload = (event) => {
                const binaryString = event.target.result;
                const workbook = XLSX.read(binaryString, { type: 'binary' });
                const worksheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[worksheetName];
                resolve(XLSX.utils.sheet_to_csv(worksheet));

            };

            reader.readAsBinaryString(file);
        });
    };


    const uploadList = () => {
        console.log(formListTitleRef.current.value, "formListTitleRef.current.value")
        console.log(formListDescRef.current.value, Object.keys(importFileData).length, "formListDescRef.current.value")


        if (!Object.keys(importFileData).length) {
            toast.warning("CSV/XLXS file is required");
            return;
        }

        if (!formListTitleRef.current.value.trim()) {
            toast.warning("Title is required");
            return;
        }

        console.log({
            recipientList: csvToJson(importFileData),
            listTitle: formListTitleRef.current.value,
            listDescription: formListDescRef.current.value,
        })
        var serializeJson = csvToJson(importFileData).map(csvJson => {
            var newObj = { ...csvJson };

            newObj['age'] = Number(newObj['age']);
            newObj['total_loan_amount'] = Number(newObj['total_loan_amount']);
            newObj['email_local_part'] = newObj['email'];

            delete newObj['email'];

            return newObj;
        })

        console.log(serializeJson)
        dispatch(createFromRecipientList({
            recipientList: serializeJson,
            listTitle: formListTitleRef.current.value,
            listDescription: formListDescRef.current.value,
        }))
    }


    const mockData = [
        {
            "list": "list/00000000-0713-e1.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "campaign": "Solar A1",
            "count": "4,019",
            "status": "inactive",
        },
        {
            "list": "list/0000000000_0808_verified_refi.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "campaign": "Global",
            "count": "1,223,009",
            "status": "active",
        },
        {
            "list": "list/00000000-0713-e1.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "campaign": "Roof Sytems",
            "count": "4,019",
            "status": "inactive",
        },
        {
            "list": "list/0000000000_0808_verified_refi.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "campaign": "Global",
            "count": "1,223,009",
            "status": "active",
        },
    ]

    return (
        <div className='pb-11'>
            <div className="grid grid-cols-12 gap-3">
                <div className='col-span-3 max-sm:col-span-12 text-left max-sm:hidden'>
                    <button className='flex flex-row gap-3 btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            setShowModal(true);
                            formView('uploadList', 'n', 0);
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
            <div className="w-full mt-5">
                <DataTableV2
                    hideHeaderOnMobile={true}
                    keys={[{
                        "key": "list",
                        "col": '20%',

                    }, {
                        "key": "description",
                        "col": '30%',

                    }, {
                        "key": "campaign",
                        "col": '20%',

                    }, {
                        "key": "count",
                        "col": '10%',

                    }, {
                        "key": "status",
                        "col": '10%',

                    }, {
                        "key": "actions",
                        "col": '10%',
                        "render": (
                            <div className="text-center flex flex-row gap-3 justify-center items-center">
                                <span className="font-semibold text-black/40 uppercase xsm:text-base">
                                    Actions
                                </span>
                            </div>
                        )
                    }]} data={mockData.map((mock, index) => {
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
                                    {data?.description}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    campaign
                                </span>
                                <span className='text-sm'>
                                    {data?.campaign}
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
                                <button className='' onClick={
                                    () => {
                                        setShowModal(true);
                                        formView('editList', 'n', 0);
                                    }

                                }>
                                    <img src={Icon_Edit} height={20} width={20} className='mx-1'></img>
                                </button>
                                <button className='' onClick={
                                    () => {
                                        setShowModal(true);
                                        formView('deleteList', 'n', 0);
                                    }

                                }>
                                    <img src={Icon_Trash} height={20} width={20} className='mx-1'></img>
                                </button>
                            </div>
                        )

                        data.status = (
                            <div className="h-full w-full flex items-center  text-xs justify-start">
                                {data?.status === "active" ? (
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
                    })} headerChildren={(
                        <div className='flex flex-row py-5'>
                            <SelectDropdown
                                label={"SORT BY CAMPAIGN"}
                                labelClassName="font-semibold text-black/40 text-sm uppercase"
                                containerClassName={"w-1/5 max-sm:w-full"}>
                                <option value="">All Campaigns</option>
                                <option value="">Test Campaigns</option>
                            </SelectDropdown>
                        </div>
                    )} />
            </div>
            <Modal onClose={() => {
                setShowModal(false);
            }} showModal={showModal}>
                {form}
            </Modal>
        </div>
    )
}

export default SuppresionFiles;