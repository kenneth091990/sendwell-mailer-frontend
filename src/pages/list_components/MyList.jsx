import React, { createRef, useRef, useState, useEffect, useReducer } from 'react'
import DataTable from '../../common/components/DataTable';
import InputWithCounter from '../../components/InputWithCounter';
import Modal from '../../components/Modal';
import TextAreaWithCounter from '../../components/TextAreaWithCounter';
import BurgerMenu from './../../images/nav/Mobile hamburger.png';
import Circle_Merge from "./../../images/nav/Circle_Merge.png"
import CircleIcon from './../../images/nav/Circle_Caution.png'
import Circle_Add from "./../../images/nav/Circle_Add.png"
import Circle_Caution from "./../../images/nav/Circle_Caution.png"
import Icon_DragAndDrop from "./../../images/nav/Icon_DragAndDrop.png"
import Icon_Download from "./../../images/nav/Icon_Download-removebg-preview.png"
import Icon_Edit from "./../../images/nav/Icon_Edit-removebg-preview.png"
import Icon_Trash from "./../../images/nav/Icon_Trash-removebg-preview.png"
import DataTableV2 from '../../common/components/DataTableV2';
import { useDispatch, useSelector } from 'react-redux';
import useToast from '../../hooks/useToast';

import Papa from 'papaparse';
import { Scrollbars } from 'react-custom-scrollbars-2';
import * as XLSX from 'xlsx';
import SliceString from '../../common/components/SliceString';
import { csvToJson, formatFileSize } from '../../core/constants';
import SelectDropdown from '../../components/SelectDropdown';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LIST_EVENTS, selectListState } from '../../modules/lists/listSlice';
import { createList, getLists, updateList } from '../../modules/lists/listThunk';
import EditForm from './MyListForms/EditForm';


const MyList = () => {
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(null);
    const formRef = useRef(null);

    // * "upload" || "edit" || "imported_list" || "delete"
    const [formType, setFormType] = useState("");

    const [getToast, setToast] = useToast();
    const dispatch = useDispatch();
    const { status, event, message, data } = useSelector(selectListState);
    const [importFileData, setImportFileData] = useState({});
    const [fileDetails, setFileDetails] = useState({
        name: "",
        extension: "",
        size: ""
    });
    const formListTitleRef = useRef(null);
    const formListDescRef = useRef(null);
    // Initialize the checked state for each item in the list
    const [checkedItems, setCheckedItems] = useState([]);

    // * Edit Form
    const [editList, setEditList] = useReducer(
        (prev, next) => {
            var newEvent = { ...prev, ...next };
            return newEvent;
        },
        {
            status: true,
            name: "",
            description: "",
            list_id: null
        }
    )
    // * End of Edit Form

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
    ];

    useEffect(() => {
        if (importFileData.length > 0) {
            setFormType("importListFileMapping")
            setForm(ImportListFileMapping())
        }
    }, [importFileData]);

    useEffect(() => {
        if (status === "initial") {
            dispatch(getLists({
                // searchInput: "",
                // status: "",
                pageSize: 100,
                page: 1,
            }))
        }

        if (event === LIST_EVENTS.create) {
            if (status === "loading") {
                setToast(toast.loading("Please wait loading", {
                    isLoading: true,
                }))
            }

            if (status === "error") {
                toast.update(getToast, {
                    isLoading: false,
                    render: message,
                    autoClose: true,
                    type: "error"
                })
                dispatch(getLists({
                    // searchInput: "",
                    // status: "",
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }

            if (status === "success") {
                toast.update(getToast, {
                    isLoading: false,
                    render: message,
                    autoClose: true,
                    type: "success"
                })
                setShowModal(false);
                dispatch(getLists({
                    // searchInput: "",
                    // status: "",
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }
        }

        if (event === LIST_EVENTS.update) {
            if (status === "loading") {
                setToast(toast.loading("Please wait loading", {
                    isLoading: true,
                }))
            }

            if (status === "error") {
                toast.update(getToast, {
                    isLoading: false,
                    render: message,
                    autoClose: true,
                    type: "error"
                })
                dispatch(getLists({
                    // searchInput: "",
                    // status: "",
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }

            if (status === "success") {
                toast.update(getToast, {
                    isLoading: false,
                    render: message,
                    autoClose: true,
                    type: "success"
                })
                setShowModal(false);
                dispatch(getLists({
                    // searchInput: "",
                    // status: "",
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }
        }

    }, [status, event])


    const UploadForm = () => {

        return (
            <form ref={formRef} className='flex-inline'>
                <div className='mt-5'>
                    <h2 className='text-blue'>UPLOAD NEW LIST</h2>
                </div>
                <div className='mt-5 text-center mb-10 rounded-lg border border-stroke p-7' style={{ cursor: 'pointer' }}>
                    <div>
                        <img src={Icon_DragAndDrop} height={70} width={70} className='mx-auto my-0' />
                        <div className=' tracking-tight text-gray'>Drag file here to upload </div>
                        <div className=' tracking-tight text-gray'>or </div>
                        <div className=' tracking-tight text-gray mt-3'>
                            <label style={{ cursor: 'pointer' }} htmlFor="importList" className='p-3 px-5 rounded-md bg-blue'>  Select a file
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
                            setFileDetails({
                                name: "",
                                extension: "",
                                size: ""
                            })
                            setShowModal(false)
                        }}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    const ImportListFileMapping = () => {

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
                                                    {Object.keys(importFields).map((k, ii) => {

                                                        return (<option key={k} value={importFields[k].field} selected={importFields[k].stringRelated.indexOf(importFileData[0][i].toLowerCase()) !== -1 ? true : (i === ii ? true : false)}>{importFields[k].label}</option>)
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
                            // setShowModal(true);
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
        // setShowModal(true);
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
        dispatch(createList({
            recipientList: serializeJson,
            listTitle: formListTitleRef.current.value,
            listDescription: formListDescRef.current.value,
            // status: false,
        }))
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


    // Handle checkbox change
    const handleCheckboxChange = (index) => {
        // Update the checked state based on the toggled checkbox
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index];
        setCheckedItems(updatedCheckedItems);
    };

    const formView = (formName, action, id) => {
        setFormType(formName)

        setShowModal(true);

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    const checkList = () => {
        return checkedItems.filter(ee => ee === true).length > 1;
    }

    const CementedSupressionForm = () => {
        return (
            <form ref={formRef} className='flex-inline'>
                <div className='text-center'>
                    <img src={Circle_Merge} height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-3'>
                    <h2 className='text-blue'>MERGE LISTS?</h2>
                    <div className='mt-5'>
                        <p className='text-sm'>The selected lists will be merged into one new list.</p>
                        <p className='text-sm'>Please provide a new title and description for the merged list</p>
                    </div>
                </div>
                <div className='mt-5 text-left'>
                    <InputWithCounter ref={formListTitleRef} limit="30" label='MERGED LIST TITLE' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
                </div>
                <div className='mt-5 text-left'>
                    <TextAreaWithCounter cols='50' rows='3' ref={formListDescRef} label="MERGED LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
                </div>
                <div className='mt-5 '>
                    <div>
                        <button className='btn  bg-blue p-2 border rounded-md text-white py-2 px-4'>Create Merged List</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn  bg-transparent  text-blue' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    const DeleteForm = () => {
        return (
            <form ref={formRef} className='flex-inline'>
                <div className='text-center'>
                    <img src={Circle_Caution} height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-5'>
                    <h2 className='text-blue'>DELETE LISTS?</h2>
                    <div className='mt-5'>
                        <p className='text-sm'>Are you sure you want to delete list “Solar A1”? This cannot</p>
                        <p className='text-sm'>be undone and you will not be able to recover your list.</p>
                    </div>
                </div>
                <div className='mt-5 '>
                    <div>
                        <button className='btn bg-blue p-2 border rounded-md text-white py-2 px-10'>Delete</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn bg-transparent text-blue px-10' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }


    return (
        <div className='pb-11'>
            <div className="flex flex-row gap-3">
                <div className='text-left max-sm:hidden'>
                    <button disabled={!checkList()} className={`btn ${!checkList() ? 'text-gray bg-gray border-none' : 'border text-blue-mailer bg-white'} px-3 py-2 rounded-md mb-3`} onClick={
                        () => {
                            if (checkList()) {
                                formView('mergeLists', 'n', 0);
                            }
                        }

                    }>Merge lists</button>
                </div>
                <div className='flex-1 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>MANAGE MY LISTS</h1>
                </div>
                <div className='text-right max-sm:hidden'>
                    <button className='btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            formView('uploadList', 'n', 0);
                        }

                    }>
                        Upload new list
                    </button>
                </div>
            </div>

            {(() => {
                var isLoading = false;
                var isError = false;
                var myList = data?.lists ?? [];

                if (event === LIST_EVENTS.get_list) {
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
                        myList = data?.lists;
                    }
                } else {
                    isLoading = true;
                }


                return (
                    <DataTableV2
                        hideHeaderOnMobile={true}
                        keys={[{
                            "key": "name",
                            "col": "30%",
                            "render": "list"

                        }, {
                            "key": "description",
                            "col": "40%",

                        }, {
                            "key": "count",
                            "col": "10%",

                        }, {
                            "key": "status",
                            "col": "10%",

                        }, {
                            "key": "actions",
                            "col": "10%",
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
                                    {isError ? "No lists uploaded yet." : "It looks like you haven't uploaded any list record yet."}
                                </p>
                            </div>
                        )}
                        data={myList.map((list, index) => {
                            var listData = { ...list };
                            listData.mobileCellView = (
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
                                        {listData?.name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                        description
                                    </span>
                                    <span className='text-sm'>
                                        {listData?.description}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                        count
                                    </span>
                                    <span className='text-sm'>
                                        {listData?.count}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                        status
                                    </span>
                                    <span className='text-sm mt-3'>
                                        {listData?.status === "active" ? (
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

                            listData.actions = (
                                <div className="h-full flex flex-row gap-3 justify-center items-center">
                                    <button className=''>
                                        <img src={Icon_Download} height={20} width={20} className='mx-1'></img>
                                    </button>
                                    <button className='' onClick={
                                        () => {
                                            // setShowModal(true);
                                            setEditList({
                                                list_id: list?.list_id,
                                                status: list?.status,
                                                name: list?.name,
                                                description: list?.description,
                                            })
                                            formView('editList', 'n', 0);
                                        }

                                    }>
                                        <img src={Icon_Edit} height={20} width={20} className='mx-1'></img>
                                    </button>
                                    <button className='' onClick={
                                        () => {
                                            // setShowModal(true);
                                            formView('deleteList', 'n', 0);
                                        }

                                    }>
                                        <img src={Icon_Trash} height={20} width={20} className='mx-1'></img>
                                    </button>
                                </div>
                            )

                            listData.count = listData?.recipient_to_list?.length ?? 0;
                            // listData.count = listData?.recipient_to_list?.length ?? 0;

                            listData.name = (
                                <div className="h-full flex flex-row col-span-4 items-center">
                                    <input
                                        type="checkbox"
                                        id={`checkbox_${index}`}
                                        name={`checkbox_${index}`}
                                        checked={checkedItems[index]}
                                        onChange={() => handleCheckboxChange(index)}
                                        className='mx-2 mr-4 accent-pink-500 checkbox  cursor-pointer'
                                    />
                                    <label htmlFor={`checkbox_${index}`} className='cursor-pointer text-xs'>
                                        {listData?.name}
                                    </label>
                                </div>
                            )


                            listData.status = (
                                <div className="h-full w-full flex items-center  text-xs justify-start">
                                    {listData?.status ? (
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


                            return listData;
                        })}
                    />
                )
            })()}

            <Modal onClose={() => {
                if (formType === "uploadList") {
                    setFileDetails({
                        name: "",
                        extension: "",
                        size: ""
                    })
                }
                setShowModal(false);

            }} showModal={showModal}>
                {/* {form} */}
                {(() => {
                    switch (formType) {
                        case 'mergeLists':
                            return (
                                <CementedSupressionForm />
                            )
                        case 'editList':
                            return (
                                <EditForm editList={editList} setEditList={setEditList} setShowModal={setShowModal} />
                            )
                        case 'deleteList':
                            return (
                                <DeleteForm />
                            )
                        case 'uploadList':
                            return (
                                <UploadForm />
                            )
                            break;
                        case 'importListFileMapping':
                            return (
                                <ImportListFileMapping />
                            )
                            break;
                    }
                })()}
            </Modal>
        </div>
    )
}

export default MyList;