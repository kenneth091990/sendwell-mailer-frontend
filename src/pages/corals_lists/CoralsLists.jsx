import React, { createRef, useRef, useState } from 'react'
import DataTable from '../../common/components/DataTable';
import { Link } from 'react-router-dom';
import CircleIcon from './../../images/nav/Circle_Caution.png'
import SearchIcon from './../../images/nav/SearchIcon.png'
import TrashIcon from "./../../images/nav/Icon_Trash-removebg-preview.png"
import InputTextfield from '../../components/InputTextfield';
import Modal from '../../components/Modal';
import MultiSelectWithCheckboxes from '../../components/MultiSelectWithCheckboxes';
import CircularProgressBar from '../../components/CircularProgressBar';
import Accordion from '../../components/Accordion';





const CoralsLists = () => {

    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(null);
    const formRef = useRef(null);
    const formView = (formName, action, id) => {
        switch (formName) {
            case 'add':
                setForm(addCorralsForm());
                break;
        }

        if (formRef.current) {
            formRef.current.reset();

        }
    }





    const addCorralsForm = () => {


        return (
            <form ref={formRef} className='flex-inline w-[54vh] max-sm:w-[95%]'>
                <div className='text-center'>
                    <img src='src/images/nav/Circle_Add.png' height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-5'>
                    <h2 className='text-blue'>CREATE NEW CORRAL</h2>
                </div>
                <div className='mt-5'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 text-left">

                        <InputTextfield type="text" label="CORRAL TITLE" labelClassName="mb-2.5 block font-medium text-primary" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' />

                    </div>
                </div>
                <div className='mt-5'>
                    <div className='text-left'>
                        <MultiSelectWithCheckboxes placeholder='select domains' label='SELECT DOMAINS' labelClassName='text-primary' isMulti={true} hasCheckbox={true} />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='text-left'>
                        <MultiSelectWithCheckboxes placeholder='select ses' label='SELECT SES PROFILES' labelClassName='text-primary' isMulti={true} />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 text-left">

                        <InputTextfield type="text" label="SELECT LISTS" labelClassName="mb-2.5 block font-medium text-primary" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' />

                    </div>
                </div>


                <div className='mt-5'>
                    <div>
                        <button className='btn bg-blue p-2 border rounded-md text-white py-2 px-6'>Create Corral</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn bg-transparent text-blue px-6' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }

    const accordionItems = [
        {
            title: (
                <div className="flex-grow">
                    <div class="grid grid-cols-3 gap-4">
                        <div className='text-primary'>EXAMPLE CORRAL</div>
                        <div className='col-span-2 text-right flex flex-row-reverse'>
                            <ul className='flex flex-inline text-primary'>
                                <li className='px-5 '><div>Domains: 3 <span className='pl-5'>|</span></div> </li>
                                <li className='px-5 '><div>SES: 5  <span className='pl-5'>|</span></div></li>
                                <li className='px-5 '><div>Lists: 3  <span className='pl-5'>|</span></div></li>
                                <li className='px-5'><div>Suppresion: 3 </div></li>
                            </ul>
                        </div>
                    </div>
                </div>
            ),
            content: (
                <span className='text-[1rem] break-words'>
                   this is content
                </span>
            ),
        }

    ]

  


    return (
        <React.Fragment>
            <div className="grid grid-cols-12 gap-3 pt-11">
                <div className='col-span-3 max-sm:col-span-12 text-left max-sm:hidden'>
                    <button className='flex flex-row gap-3 btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            setShowModal(true);
                            formView('add', 'n', 0);
                        }
                    }>
                        <div className='flex flex-row gap-3 '>
                            <span>
                                Create new corrals
                            </span>
                        </div>
                    </button>
                </div>
                <div className='col-span-6 max-sm:col-span-12 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>
                       CORRALS
                    </h1>
                </div>
            </div>
            <div className="flex flex-col w-full">
              <Accordion items={accordionItems} />
            </div>        
            <Modal onClose={() => {
                setShowModal(false);
            }} showModal={showModal}>
                {form}
            </Modal>
        </React.Fragment>
    )
}

export default CoralsLists;