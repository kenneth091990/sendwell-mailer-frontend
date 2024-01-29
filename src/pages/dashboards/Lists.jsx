import React from 'react'
import { useState, useRef, createRef } from 'react';

import DataTable from '../../common/components/DataTable';
import CardFour from '../../components/CardFour';
import CardOne from '../../components/CardOne';
import CardThree from '../../components/CardThree';
import CardTwo from '../../components/CardTwo';
import ChartOne from '../../components/ChartOne';
import ChartThree from '../../components/ChartThree';
import ChartTwo from '../../components/ChartTwo';
import ChatCard from '../../components/ChatCard';
import MapOne from '../../components/MapOne';
import TableOne from '../../components/TableOne';
import Modal from '../../components/Modal';
import TextAreaWithCounter from '../../components/TextAreaWithCounter';
import InputWithCounter from '../../components/InputWithCounter';




const Lists = () => {
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(null);
    const formRef = useRef(null);
    const formListTitleRef = createRef(null);
    const formListDescRef = createRef(null);

    const formView = (formName, action, id) => {


        switch (formName) {
            case 'mergeLists':
                setForm(cementedSupressionForm());;
                break;
            case 'editList':
                setForm(editForm());;
                break;
            case 'deleteList':
                setForm(deleteForm());;
                break;
            case 'uploadList':
                setForm(uploadForm());;
                break;


        }

        if (formRef.current) {
            formRef.current.reset();

        }
    }

    const cementedSupressionForm = () => {


        return (
            <form ref={formRef} className='flex-inline'>
                <div className='text-center'>
                    <img src='src/images/nav/Circle_Merge.png' height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-3'>
                    <h2 className='text-blue'>MERGE LISTS?</h2>
                    <div className='mt-5'>
                        <p className='text-sm'>The selected lists will be merged into one new list.</p>
                        <p className='text-sm'>Please provide a new title and description for the merged list</p>
                    </div>
                </div>
                <div className='mt-5 text-left'>
                    <InputWithCounter ref={formListTitleRef} limit="30" label='MERGE LIST TITLE' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
                </div>
                <div className='mt-5 text-left'>
                    <TextAreaWithCounter cols='50' rows='3' ref={formListDescRef} label="MERGE LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
                </div>
                <div className='mt-5 '>
                    <div>
                        <button className='btn  bg-blue p-2 border rounded-md text-white py-2'>Create Merge Lists</button>
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
                    <img src='src/images/nav/Circle_Caution.png' height={70} width={70} className='mx-auto my-0' />
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
                        <button className='btn  bg-blue p-2 border rounded-md text-white py-2'>Delete</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn  bg-transparent  text-blue' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    const editForm = () => {


        return (
            <form ref={formRef} className='flex-inline'>
                <div className='text-center'>
                    <img src='src/images/nav/Circle_Edit.png' height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-5'>
                    <h2 className='text-blue'>EDIT LISTS?</h2>
                </div>
                <div className='mt-5 text-left'>
                    <InputWithCounter ref={formListTitleRef} limit="30" label='MERGE LIST TITLE' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
                </div>
                <div className='mt-5 text-left'>
                    <TextAreaWithCounter cols='50' rows='3' ref={formListDescRef} label="MERGE LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
                </div>

                <div className='mt-5 text-left'>
                    <div>
                        <label className='text-blue'>STATUS</label>
                    </div>
                    <div class="flex items-center">
                        <input id="disabled-radio-1" type="radio" value="" name="status" class="radio-button w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="disabled-radio-1" className="tracking-tight ms-2 text-sm font-medium text-success ">Active</label>
                    </div>
                    <div class="flex items-center">
                        <input checked id="disabled-radio-2" type="radio" value="" name="status" class=" radio-button w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="disabled-radio-2" className="tracking-tight ms-2 text-sm font-medium text-danger ">Inactive</label>
                    </div>
                </div>
                <div className='mt-5'>
                    <div>
                        <button className='btn  bg-blue p-2 border rounded-md text-white py-2'>Save Changes</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn  bg-transparent  text-blue' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    const uploadForm = () => {


        return (
            <form ref={formRef} className='flex-inline'>
                <div className='mt-5'>
                    <h2 className='text-blue'>UPLOAD NEW LIST</h2>
                </div>
                <div className='mt-5 text-center mb-10 rounded-lg border border-stroke p-7'>
                    <div>
                         <img src='src/images/nav/Icon_DragAndDrop.png' height={70} width={70} className='mx-auto my-0' />
                         <div className=' tracking-tight text-gray'>Drag file here to upload </div>
                         <div className=' tracking-tight text-gray'>or </div>
                         <div className=' tracking-tight text-gray mt-3'>
                            <label htmlFor="formId" className='p-3 px-5 rounded-md bg-blue'>  Select a file
                                <input name="" type="file" id="formId" hidden />
                            </label>
                        </div>
                     </div>
                </div>
                <div className='mt-5 text-left'>
                    <div>
                        <label className='text-blue'>SELECTED FILE</label>
                    </div>
                    <div class="grid grid-cols-12  gap-4">
                        <div className='col-span-2 tracking-tight'>
                            XLSX
                        </div>
                        <div className='col-span-6 tracking-tight'>
                            testuploadlistfile.xlsx
                        </div>
                        <div className='col-span-4 tracking-tight'>
                            73kb
                        </div>
                    </div>
                </div>
                <div className='mt-5 text-left'>
                    <InputWithCounter ref={formListTitleRef} limit="30" label="NEW LIST TITLE" className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></InputWithCounter>
                </div>
                <div className='mt-5 text-left'>
                    <TextAreaWithCounter cols='50' rows='3' ref={formListDescRef} label="NEW LIST DESCRIPTION" limit='150' className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></TextAreaWithCounter>
                </div>
                <div className='mt-5'>
                    <div>
                        <button className='btn  bg-blue p-2 border rounded-md text-white py-2 px-5'>Upload</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn  bg-transparent  text-blue' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    const mockData = [
        {
            "list": "list/00000000-0713-e1.txt",
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
        <>
            <div className="grid grid-cols-12 ">

            </div>
            <div className="flex flex-row gap-3">
                <div className='text-left max-sm:hidden'>
                    <button className='btn  bg-gray px-3 py-2 border-none rounded-md text-gray mb-3' onClick={
                        () => {
                            setShowModal(true);
                            formView('mergeLists', 'n', 0);
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
                        Upload new lists
                    </button>
                </div>
            </div>
            <DataTable
                hideHeaderOnMobile={true}
                keys={[{
                    "key": "list",
                    "col": 4,

                }, {
                    "key": "description",
                    "col": 4,

                }, {
                    "key": "count",
                    "col": 1,

                }, {
                    "key": "status",
                    "col": 2,

                }, {
                    "key": "actions",
                    "col": 1,
                    "render": (
                        <div className="py-2 px-2 text-center col-span-1 flex flex-row gap-3 justify-center items-center">
                            <span className=" font-normal text-black/30 uppercase xsm:text-base">
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
                                    <img src='src/images/nav/Mobile hamburger.png' height={20} width={20} className='mx-1'></img>
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
                    data.actions = {
                        childRender: (
                            <div className="py-2 px-2 text-center col-span-1 flex flex-row gap-3 justify-center items-center">
                                <button className=''>
                                    <img src='src/images/nav/Icon_Download-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                </button>
                                <button className='' onClick={
                                    () => {
                                        setShowModal(true);
                                        formView('editList', 'n', 0);
                                    }

                                }>
                                    <img src='src/images/nav/Icon_Edit-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                </button>
                                <button className='' onClick={
                                    () => {
                                        setShowModal(true);
                                        formView('deleteList', 'n', 0);
                                    }

                                }>
                                    <img src='src/images/nav/Icon_Trash-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                </button>
                            </div>
                        )
                    }

                    data.list = {
                        childRender: (
                            <div className="px-1 py-2 flex flex-row col-span-4 items-center">
                                <input
                                    type="checkbox"
                                    id={`checkbox_${index}`}
                                    className='mx-2 mr-4 accent-pink-500 checkbox  cursor-pointer'
                                />
                                <label htmlFor={`checkbox_${index}`} className='cursor-pointer text-xs'>
                                    {data?.list}
                                </label>
                            </div>
                        )
                    }

                    data.status = {
                        childRender: (
                            <div className="px-2.5 py-2 col-span-2 flex items-center  text-xs justify-start">
                                {data?.status === "active" ? (
                                    <span className='w-2/3 text-center border-none bg-success px-5 border rounded font-thin text-white py-1'>
                                        Active
                                    </span>
                                ) : (
                                    <span className='w-2/3 text-center border-none bg-danger px-5 border rounded font-thin text-white py-1'>
                                        Inactive
                                    </span>
                                )}
                            </div>
                        )
                    }

                    return data;
                })}
            />
            <Modal onClose={() => {
                setShowModal(false);
            }} showModal={showModal}>
                {form}
            </Modal>
        </>
    )
}

export default Lists;