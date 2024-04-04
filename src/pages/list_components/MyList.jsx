import React, { createRef, useRef, useState, useEffect, useReducer } from 'react'
import InputWithCounter from '../../components/InputWithCounter';
import Modal from '../../components/Modal';
import TextAreaWithCounter from '../../components/TextAreaWithCounter';
import BurgerMenu from './../../images/nav/Mobile hamburger.png';
import Circle_Merge from "./../../images/nav/Circle_Merge.png"
import CircleIcon from './../../images/nav/Circle_Caution.png'
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
import SelectDropdown from '../../components/SelectDropdown';
import { toast } from 'react-toastify';
import { LIST_EVENTS, selectListState } from '../../modules/lists/listSlice';
import { downloadList, getLists } from '../../modules/lists/listThunk';
import EditForm from './MyListForms/EditForm';
import DeleteForm from './MyListForms/DeleteForm';
import { format } from 'date-fns';
import UploadForm from './MyListForms/UploadForm';
import MergeListForm from './MyListForms/MergeListForm';
import { csvToJson } from '../../core/constants';
import serialize from 'form-serialize';


const MyList = () => {
    const [showModal, setShowModal] = useState(false);
    const formRef = useRef(null);

    // * "upload" || "edit" || "imported_list" || "delete"
    const [formType, setFormType] = useState("");

    const [getToast, setToast] = useToast();
    const dispatch = useDispatch();
    const { status, event, message, data } = useSelector(selectListState);
    const [importFileData, setImportFileData] = useState({});
    const [parseJson, setParseJson] = useState([]);
    const [fileDetails, setFileDetails] = useState({
        name: "",
        extension: "",
        size: ""
    });
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
            field: 'first_name',
            label: "FIRST NAME",
            stringRelated: [
                'first name',
                'name',
                'firstname',
                'first_name'
            ]

        },
        {
            field: 'last_name',
            label: "LAST NAME",
            stringRelated: [
                'last name',
                'lastname',
                'last_name'
            ]

        },
        {
            field: 'email',
            label: "EMAIL ADDRESS",
            stringRelated: [
                'email address',
                'emailAddress',
                'email',
                'email_address'
            ]

        },
        {
            field: 'street_1',
            label: "STREET ADDRESS 1",
            stringRelated: [
                'street address 1',
                'street 1',
                'street_1',
                'streetAddress 1',
                'street_address_1'
            ]

        },
        {
            field: 'street_2',
            label: "STREET ADDRESS 2",
            stringRelated: [
                'street address 2',
                'streetAddress 2',
                'street_2',
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
            field: 'opt_in_date',
            label: "OPT IN DATE",
            stringRelated: [
                'opt_in_date',
                'optInDate',
                'Opt in date',
                'OPT IN DATE',
            ]
        },
        {
            field: 'vertical',
            label: "VERTICAL",
            stringRelated: [
                'vertical',
                'Vertical',
                'VERTICAL',
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

        if (event === LIST_EVENTS.delete) {
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

        if (event === LIST_EVENTS.merge) {
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
                setCheckedItems([])
                dispatch(getLists({
                    // searchInput: "",
                    // status: "",
                    pageSize: 100,
                    page: 1,
                    fetchPolicy: "network-only"
                }))
            }
        }

        if (event === LIST_EVENTS.download) {
            if (status === "loading") {
                setToast(toast.loading("Please wait downloading and generating CSV File", {
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
                handleDownloadCSV(data)
            }
        }

    }, [status, event])

    // * Download CSV 
    const handleDownloadCSV = ({ name, recipient_to_list: recipientToList }) => {
        var jsonData = (recipientToList ?? []).map(lst => lst?.recipient ?? null).filter(ii => ii);
        jsonData = jsonData.map(dat => {
            var newData = { ...dat };
            delete newData['__typename'];
            newData['email'] = `${newData?.email_local_part}@${newData?.domain?.domain_name}`
            delete newData['email_local_part'];
            delete newData['domain'];

            return {
                first_name: newData?.first_name,
                last_name: newData?.last_name,
                email: newData?.email,
                street_1: newData?.street_1,
                street_2: newData?.street_2,
                city: newData?.city,
                state: newData?.state,
                zip: newData?.zip,
                phone: newData?.phone,
                gender: newData?.gender,
                country: newData?.country,
                military_service: newData?.military_service,
                site_name: newData?.site_name,
                credit_rating: newData?.credit_rating,
                sub_vertical_name: newData?.sub_vertical_name,
                loan_purpose: newData?.loan_purpose,
                mortgage_loan_purpose: newData?.mortgage_loan_purpose,
                total_loan_amount: newData?.total_loan_amount,
                vehicle_make: newData?.vehicle_make,
                vehicle_model: newData?.vehicle_model,
                own_or_rent: newData?.own_or_rent,
                ip_address: newData?.ip_address,
                birthday: newData?.birthday,
                age: newData?.age,
                electric_company: newData?.electric_company,
                vehicle_year: newData?.vehicle_year,
            };
        })

        console.log({ name, jsonData })
        // Convert JSON to workbook
        const worksheet = XLSX.utils.json_to_sheet(jsonData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

        // Generate CSV file
        const csvOutput = XLSX.write(workbook, { bookType: 'csv', type: 'string' });

        // Generate a filename with current date-time
        const dateTime = format(Date.now(), "MM-dd-yyyy_HH-mm");
        const fileName = `export_${name}_${dateTime}.csv`;

        // Create a Blob with the CSV data and include the BOM for UTF-8
        const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });

        // Create a link to download the blob
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.setAttribute('download', fileName);
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        dispatch(getLists({
            // searchInput: "",
            // status: "",
            pageSize: 100,
            page: 1,
            fetchPolicy: "network-only"
        }))
    };

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
                                    {Object.keys(importFileData).length ? importFileData[0].map((object, i) =>
                                        <th key={i} className="border border-slate-300 border-line-gray text-sm font-medium">
                                            <SelectDropdown name={object} className={'p-2'}>
                                                <option value="">Don't Include</option>
                                                {Object.keys(importFields).map((k, ii) => {
                                                    return (<option key={k} value={importFields[k].field} selected={importFields[k].stringRelated.indexOf(importFileData[0][i].toLowerCase()) !== -1 ? true : false}>{importFields[k].label}</option>)
                                                }
                                                )}
                                            </SelectDropdown>
                                        </th>
                                    ) : ""}
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(importFileData).length ? importFileData.map((v, i) => {

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

                                    }) : ""
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
                            setFileDetails({
                                name: "",
                                extension: "",
                                size: ""
                            })
                            formView('uploadList', 'n', 0);
                        }}>Cancel</button>
                    </div>
                </div>

            </form>

        )
    }

    const getRelatedFieldCtr = (importFields) => {

        let ctr = 0;
        if (Object.keys(importFileData).length) {
            importFileData[0].map((object, i) => {
                Object.keys(importFields).map((k, ii) => {
                    if (importFields[k].stringRelated.indexOf(importFileData[0][i].toLowerCase()) !== -1) {
                        ctr += 1;
                    }
                })
            })
        }


        return ctr;
    }

    const finalizeImport = (e) => {
        // setShowModal(true);
        e.preventDefault();

        var headerList = serialize(formRef.current, { hash: true, empty: true });
        headerList = Object.keys(headerList).map(ii => headerList[ii]);
        var importingNewList = [...importFileData];
        importingNewList[0] = headerList;
        console.log({
            importFileData: csvToJson(importingNewList).map(ii => {
                delete ii[""];
                return ii;
            }),
            headerList
        })

        setParseJson(csvToJson(importingNewList).map(ii => {
            delete ii[""];
            return ii;
        }))
        formView('uploadList', 'n', 0);
    }

    const readTXTFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                resolve(event.target.result);
            };

            reader.onerror = (error) => {
                reject(error);
            };

            reader.readAsText(file);
        });
    };

    const handleFileUpload = async (file, extension) => {

        let parseResult = null;
        try {
            console.log(file?.name, extension)
            if (extension == 'xlsx') {
                const xlsToCsv = await convertToCsv(file);
                parseResult = await parseCSV(xlsToCsv);
                setTimeout(() => {
                    setFileDetails({
                        extension,
                        name: file?.name,
                        size: file?.size
                    })
                    setImportFileData(parseResult);
                }, 1000);

            } else if (extension == 'txt') {

                const fileContent = await readTXTFile(file);
                const regex = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
                var emails = fileContent.match(regex);
                console.log(emails);

                setTimeout(() => {
                    console.log("Nagset ng bagong file")
                    setFileDetails({
                        extension,
                        name: file?.name,
                        size: file?.size
                    })
                    setParseJson(emails.map(email => ({
                        email
                    })));
                }, 1000);

            } else {
                parseResult = await parseCSV(file);

                setTimeout(() => {
                    setFileDetails({
                        extension,
                        name: file?.name,
                        size: file?.size
                    })
                    setImportFileData(parseResult);
                }, 1000);
            }

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


    // Handle checkbox change
    const handleCheckboxChange = (id) => {
        setCheckedItems(prev => {
            if (prev.includes(id)) {
                // If already selected, remove it
                return prev.filter(item => item !== id);
            } else {
                // Otherwise, add it to the selection
                return [...prev, id];
            }
        });
    };

    const formView = (formName, action, id) => {
        setFormType(formName)

        setShowModal(true);

        if (formRef.current) {
            formRef.current.reset();
        }
    }

    const checkList = () => {
        return checkedItems.length > 1;
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
                                    <button onClick={() => dispatch(downloadList({ list_id: list?.list_id }))}>
                                        <img src={Icon_Download} height={20} width={20} className='mx-1'></img>
                                    </button>
                                    <button onClick={
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
                                    <button onClick={
                                        () => {
                                            // setShowModal(true);
                                            setEditList({
                                                list_id: list?.list_id,
                                                status: list?.status,
                                                name: list?.name,
                                                description: list?.description,
                                            })
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
                                        checked={checkedItems.includes(list?.list_id)}
                                        onChange={() => handleCheckboxChange(list?.list_id)}
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
                if (["uploadList", 'importListFileMapping'].includes(formType)) {
                    setFileDetails({
                        name: "",
                        extension: "",
                        size: ""
                    })
                    setParseJson([])
                    setImportFileData({})
                    if (formType === "uploadList") {
                        formRef.current.reset();
                        setShowModal(false);
                    } else {
                        setFormType("uploadList")
                    }
                } else {
                    setShowModal(false);
                }
            }} showModal={showModal}>
                {/* {form} */}
                {(() => {
                    switch (formType) {
                        case 'mergeLists':
                            return (
                                <MergeListForm checkedItems={checkedItems} showModal={showModal} />
                            )
                        case 'editList':
                            return (
                                <EditForm editList={editList} setEditList={setEditList} setShowModal={setShowModal} />
                            )
                        case 'deleteList':
                            return (
                                <DeleteForm editList={editList}
                                    setShowModal={setShowModal} />
                            )
                        case 'uploadList':
                            return (
                                <UploadForm formType={formType} showModal={showModal} formRef={formRef} importFileData={parseJson} fileDetails={fileDetails} setFileDetails={setFileDetails} setShowModal={setShowModal} handleFileUpload={handleFileUpload} />
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