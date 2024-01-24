import React from 'react'
import { useState } from 'react';

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


const Lists = () => {

    const [showModal, setShowModal] = useState(false);
    const [ form, setForm] = useState(null);

    const formView = (formName, action, id) => {
        
        switch(formName){
            case 'mergeLists':
                setForm(cementedSupressionForm());;
            break;
        }

        setForm(formElement);
    }

    const cementedSupressionForm = () =>{
        return (
            <div  className='flex-inline'>
                <div className='text-center'>
                    <img src='src/images/nav/Circle_Merge.png' height={70} width={70} className='mx-auto my-0'/>
                </div>
                <div className='mt-3'>
                    <h2 className='text-xl text-blue'>MERGE LISTS?</h2>
                    <div>
                        <p className='text-sm'>The selected lists will be merged into one new list.</p>
                        <p className='text-sm'>Please provide a new title and description for the merged list</p>
                    </div>
                </div>
                <div className='mt-5 text-left'>
                    <div>
                        <label className='text-blue'>MERGE LIST TITLE</label>
                    </div>
                    <div>
                    <input
                        type="text"
                        className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-2 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />
                    </div>
                </div>
                <div className='mt-5 text-left'>
                    <div>
                        <label className='text-blue'>MERGE LIST TITLE</label>
                    </div>
                    <div>
                        <textarea  className="w-full rounded-lg border border-stroke bg-transparent py-1 pl-2 pr-20 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"></textarea>
                    </div>
                </div>
                <div className='mt-5 '>
                    <div>
                        <button className='btn  bg-blue p-3 border rounded-md text-white py-3'>Create Merge Lists</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn  bg-transparent  text-blue' onClick={ () => setShowModal(false) }>Cancel</button>
                    </div>
                </div>
            
            </div>
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
            "list": "list/00000000-0713.txt",
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
                <div className='text-left max-xsm:hidden'>
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
                <div className='text-right max-xsm:hidden'>
                    <button className='btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3'>
                        Upload new lists
                    </button>
                </div>
            </div>
            <DataTable
                keys={[{
                    "key": "list",
                    "col": 3,

                }, {
                    "key": "description",
                    "col": 5,

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
                data={mockData.map((mock, index) => {
                    var data = { ...mock };

                    data.actions = {
                        childRender: (
                            <div className="py-2 px-2 text-center col-span-1 flex flex-row gap-3 justify-center items-center">
                                <button className=''>
                                    <img src='src/images/nav/Icon_Download-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                </button>
                                <button className=''>
                                    <img src='src/images/nav/Icon_Edit-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                </button>
                                <button className=''>
                                    <img src='src/images/nav/Icon_Trash-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                </button>
                            </div>
                        )
                    }

                    data.list = {
                        childRender: (
                            <div className="px-1 py-2 flex flex-row col-span-3 items-center">
                                <input
                                    type="checkbox"
                                    id={`checkbox_${index}`}
                                    className='mx-2 mr-4 accent-pink-500 checkbox  cursor-pointer'
                                />
                                <label htmlFor={`checkbox_${index}`} className='cursor-pointer'>
                                    list/0000000000_0808_verified_refi.txt
                                </label>
                            </div>
                        )
                    }

                    data.status = {
                        childRender: (
                            <div className="px-2.5 py-2 col-span-2 flex items-center justify-start">
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
                { form }
            </Modal>
        </>
    )
}

export default Lists;