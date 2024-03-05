import React, { createRef, useRef, useState } from 'react'
import DataTable from '../../common/components/DataTable';
import InputWithCounter from '../../components/InputWithCounter';
import Modal from '../../components/Modal';
import TextAreaWithCounter from '../../components/TextAreaWithCounter';
import BurgerMenu from './../../images/nav/Mobile hamburger.png';
import Circle_Merge from "./../../images/nav/Circle_Merge.png"
import Circle_Add from "./../../images/nav/Circle_Add.png"
import Circle_Caution from "./../../images/nav/Circle_Caution.png"
import Circle_Edit from "./../../images/nav/Circle_Edit.png"
import Icon_DragAndDrop from "./../../images/nav/Icon_DragAndDrop.png"
import Icon_Download from "./../../images/nav/Icon_Download-removebg-preview.png"
import Icon_Edit from "./../../images/nav/Icon_Edit-removebg-preview.png"
import Icon_Trash from "./../../images/nav/Icon_Trash-removebg-preview.png"
import DataTableV2 from '../../common/components/DataTableV2';


const MyList = () => {
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(null);
    const formRef = useRef(null);
    const formListTitleRef = createRef(null);
    const formListDescRef = createRef(null);
    // Initialize the checked state for each item in the list
    const [checkedItems, setCheckedItems] = useState([]);

    // Handle checkbox change
    const handleCheckboxChange = (index) => {
        // Update the checked state based on the toggled checkbox
        const updatedCheckedItems = [...checkedItems];
        updatedCheckedItems[index] = !updatedCheckedItems[index];
        setCheckedItems(updatedCheckedItems);
    };

    const formView = (formName, action, id) => {
        switch (formName) {
            case 'mergeLists':
                setForm(cementedSupressionForm());
                break;
            case 'editList':
                setForm(editForm());
                break;
            case 'deleteList':
                setForm(deleteForm());
                break;
        }

        if (formRef.current) {
            formRef.current.reset();

        }
    }

    const checkList = () => {
        return checkedItems.filter(ee => ee === true).length > 1;
    }

    const cementedSupressionForm = () => {


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

    const deleteForm = () => {


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

    const editForm = () => {


        return (
            <form ref={formRef} className='flex-inline'>
                <div className='text-center'>
                    <img src={Circle_Edit} height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-5'>
                    <h2 className='text-blue'>EDIT LISTS?</h2>
                </div>
                <div className='mt-5 text-left'>
                    <InputWithCounter ref={formListTitleRef} limit="30" label='EDIT LIST TITLE' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
                </div>
                <div className='mt-5 text-left'>
                    <TextAreaWithCounter cols='50' rows='3' ref={formListDescRef} label="EDIT LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
                </div>

                <div className='mt-5 text-left'>
                    <div>
                        <label className='text-blue'>STATUS</label>
                    </div>
                    <div className="flex items-center">
                        <input id="disabled-radio-1" type="radio" value="" name="status" className="radio-button w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="disabled-radio-1" className="tracking-tight ms-2 text-sm font-medium text-success ">Active</label>
                    </div>
                    <div className="flex items-center">
                        <input checked id="disabled-radio-2" type="radio" value="" name="status" className=" radio-button w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="disabled-radio-2" className="tracking-tight ms-2 text-sm font-medium text-danger ">Inactive</label>
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <button className='btn bg-blue p-2 border rounded-md text-white py-2 px-6'>Save Changes</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn bg-transparent text-blue px-6' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    

    const mockData = [
        {
            "list": "list/0000000000_0808_verified_refi.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "count": "4,019",
            "status": "inactive",
        },
        {
            "list": "list/00000000-0713.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "count": "1,223,009",
            "status": "active",
        },
        {
            "list": "list/00000000-0713-e1.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "count": "4,019",
            "status": "inactive",
        },
        {
            "list": "list/00000_sc_all.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "count": "1,223,009",
            "status": "active",
        },
    ]

    return (
        <div className='pb-11'>
            <div className="flex flex-row gap-3">
                <div className='text-left max-sm:hidden'>
                    <button disabled={!checkList()} className={`btn ${!checkList() ? 'text-gray bg-gray border-none' : 'border text-blue-mailer bg-white'} px-3 py-2 rounded-md mb-3`} onClick={
                        () => {
                            if (checkList()) {
                                setShowModal(true);
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
                            setShowModal(true);
                            formView('uploadList', 'n', 0);
                        }

                    }>
                        Upload new list
                    </button>
                </div>
            </div>
            <DataTableV2
                hideHeaderOnMobile={true}
                keys={[{
                    "key": "list",
                    "col": "35%",

                }, {
                    "key": "description",
                    "col": "35%",

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
                data={mockData.map((mock, index) => {
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

                    data.list = (
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
                                {data?.list}
                            </label>
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
                })}
            />
            <Modal onClose={() => {
                setShowModal(false);
            }} showModal={showModal}>
                {form}
            </Modal>
        </div>
    )
}

export default MyList;