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
import SearchIcon from './../../images/nav/SearchIcon.png'
import InputTextfield from '../../components/InputTextfield';
import AddCementedForm from './Forms/AddCementedForm';





const SuppresionFiles = () => {
    const [showModal, setShowModal] = useState(false);
    const [getToast, setToast] = useToast();
    const dispatch = useDispatch();
    const [form, setForm] = useState(null);
    const [formType, setFormType] = useState("");

    const formView = (formName, action, id) => {
        setFormType(formName)

        setShowModal(true);

        if (formRef.current) {
            formRef.current.reset();
        }
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
                            formView('addCementedSuppresion', 'n', 0);
                        }
                    }>
                        Upload new list
                    </button>
                </div>
                <div className='col-span-6 max-sm:col-span-12 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>
                        SUPPRESSION FILES XX
                    </h1>
                </div>
                <div className='col-span-3'>
                </div>
            </div>
            <div className="w-full">
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
                    })}
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
            </div>
            <Modal  onClose={() => {
            

            }} showModal={showModal}>
                {/* {form} */}
                {(() => {
                    switch (formType) {
                        case 'addCementedSuppresion':
                            return (
                                <AddCementedForm showModal={showModal} />
                            )
                            break;
                    }
                })()}
            </Modal>
        </div>
    )
}

export default SuppresionFiles;