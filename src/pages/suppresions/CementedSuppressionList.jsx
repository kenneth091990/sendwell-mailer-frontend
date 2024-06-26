import React, { createRef, useRef, useState } from 'react'
import DataTable from '../../common/components/DataTable';
import DataTableV2 from '../../common/components/DataTableV2';
import InputWithCounter from '../../components/InputWithCounter';
import Modal from '../../components/Modal';
import SelectDropdown from '../../components/SelectDropdown';
import TextAreaWithCounter from '../../components/TextAreaWithCounter';
import AddIcon from "./../../images/nav/AddIcon.png";
import Circle_Add from "./../../images/nav/Circle_Add.png";
import SearchIcon from './../../images/nav/SearchIcon.png';
import InputTextfield from '../../components/InputTextfield';



const CementedSuppressionList = () => {
    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(null);
    const formRef = useRef(null);

    const formListTitleRef = createRef(null);
    const formListDescRef = createRef(null);
    const formView = (formName, action, id) => {
        switch (formName) {
            case 'mergeLists':
                setForm(cementedSupressionForm());
                break;

        }

        if (formRef.current) {
            formRef.current.reset();

        }
    }


    const cementedSupressionForm = () => {
        return (
            <form ref={formRef} className='flex-inline w-[49vh] max-sm:w-[95%]'>
                <div className='text-center'>
                    <img src={Circle_Add} height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-3'>
                    <h2 className='text-blue'>ADD CEMENTED LIST</h2>
              
                </div>
                <div className='mt-5 text-left'>
                    <SelectDropdown
                        className={'text-black'}
                        label={"SUPPRESSION LIST"}
                        labelClassName="text-primary text-sm uppercase font-semibold"
                        containerClassName={"w-full max-sm:w-full"}>
                        <option value="">Test Campaign 1</option>
                        <option value="">Test Campaign 2</option>
                    </SelectDropdown>
                </div>
          
                <div className='mt-5 '>
                    <div>
                        <button className='btn  bg-blue p-2 border rounded-md text-white py-2'>Cement List</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn  bg-transparent  text-blue' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    return (
        <div className='pb-11'>
            <div className="grid grid-cols-12 gap-3">
                <div className='col-span-3 max-sm:col-span-12 text-left max-sm:hidden'>
                    <button className='flex flex-row gap-3 btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            setShowModal(true);
                            formView('mergeLists', 'n', 0);
                            // setForm(cementedSupressionForm());
                        }
                    }>
                        <div className='flex flex-row gap-3 '>
                            <img src={AddIcon} alt="AddIcon" className='h-6 w-6' />
                            <span>
                                Add cemented list
                            </span>
                        </div>
                    </button>
                </div>
                <div className='col-span-6 max-sm:col-span-12 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>
                        CEMENTED SUPPRESSION FILES
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
                        "col": "30%"
                    },
                    {
                        "key": "description",
                        "col": "30%",
                    },
              
                    {
                        "key": "count",
                        "col": "10%",
                    },
                    {
                        "key": "status",
                        "col": "10%",
                    },
                    {
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
                    data={[]} 
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

export default CementedSuppressionList;