import React, { createRef, useRef, useState } from 'react'
import DataTable from '../../common/components/DataTable';
import { Link } from 'react-router-dom';
import CircleIcon from './../../images/nav/Circle_Caution.png'
import SearchIcon from './../../images/nav/SearchIcon.png'
import TrashIcon from "./../../images/nav/Icon_Trash-removebg-preview.png"
import ErrorIcon from "./../../images/nav/Icon_Error.png"
import Icon_Caution from "./../../images/nav/Icon_Caution.png"

import InputTextfield from '../../components/InputTextfield';
import Modal from '../../components/Modal';
import MultiSelectWithCheckboxes from '../../components/MultiSelectWithCheckboxes';
import CircularProgressBar from '../../components/CircularProgressBar';
import Accordion from '../../components/Accordion';

import Circle_Add from "./../../images/nav/Circle_Add.png"
import MultiSelectDropdown from '../../components/MultiSelectDropdown';



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
                    <img src={Circle_Add} height={70} width={70} className='mx-auto my-0' />
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
                        <MultiSelectDropdown options={[
                            { value: 'imodoma.com', label: 'imodoma.com' },
                            { value: 'generalred.com', label: 'generalred.com' },
                            { value: 'italiantourismboard.com', label: 'italiantourismboard.com' },
                            { value: 'garysgarageband.com', label: 'garysgarageband.com' },
                            { value: 'juiceboxcleanse.com', label: 'juiceboxcleanse.com' },
                            { value: 'blueneoninvestments.com', label: 'blueneoninvestments.com' },
                        ]} placeholder='select domains' label='SELECT DOMAINS' labelClassName='text-primary' isMulti={true} hasCheckbox={true} />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className='text-left'>
                        <MultiSelectDropdown options={[
                            { value: 'samdini141@gmail.com', label: 'samdini141@gmail.com' },
                            { value: 'ladderspaces.com', label: 'ladderspaces.com' },
                            { value: 'greenneonfantastic.com', label: 'greenneonfantastic.com' },
                            { value: 'godskins.com', label: 'godskins.com' },
                        ]} placeholder='select ses' label='SELECT SES PROFILES' labelClassName='text-primary' isMulti={true} hasCheckbox={true} />
                    </div>
                </div>
                <div className='mt-5'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-1 text-left">
                        {/* <InputTextfield type="text" label="SELECT LISTS" labelClassName="mb-2.5 block font-medium text-primary" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /> */}
                        <MultiSelectDropdown options={[
                            { value: 'list/0000000000_0808_verified_refi.txt', label: 'list/0000000000_0808_verified_refi.txt' },
                            { value: 'list/00000000-0713.txt', label: 'list/00000000-0713.txt' },
                            { value: 'list/00000000-0713-e1.txt', label: 'list/00000000-0713-e1.txt' },
                            { value: 'list/00000_sc_all.txt', label: 'list/00000_sc_all.txt' },
                        ]} placeholder='select lists' label='SELECT LISTS' labelClassName='text-primary' isMulti={true} hasCheckbox={true} />
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

    const DomainsMockData = [
        {

            domain_name: (
                <span className='items-center text-[1rem] break-words flex flex-row gap-3'>
                    <img src={Icon_Caution} alt="Icon_Caution" className="w-6 h-6" />
                    <span className='h-full w-full'>
                        mydomainname.com
                    </span>
                </span>
            ),
            action: (
                <div className="w-full text-right flex flex-row-reverse">
                    <img src={ErrorIcon} alt="ErrorIcon" className='h-5 w-5' />
                </div>
            )
        },
        {

            domain_name: (
                <span className='items-center text-[1rem]  break-words'>
                    mydomainname.com
                </span>
            ),
            action: (
                <div className="w-full text-right flex flex-row-reverse">
                    <img src={ErrorIcon} alt="ErrorIcon" className='h-5 w-5' />
                </div>
            )
        },

    ]

    const accordionItems = [
        {
            title: (
                <div className="flex-grow">
                    <div className="grid grid-cols-3 gap-4">
                        <div className='text-primary font-semibold flex flex-row gap-3'>
                            <img src={Icon_Caution} alt="Icon_Caution" className="w-6 h-6" />
                            EXAMPLE CORRAL
                        </div>
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
                <div className="flex-grow">
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "Domains",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        Domains
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "SES Profiles",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        SES Profiles
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "LISTS",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        LISTS
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "SUPPRESIONS",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        SUPPRESIONS
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                </div>
            ),
        },
        {
            title: (
                <div className="flex-grow">
                    <div className="grid grid-cols-3 gap-4">
                        <div className='text-primary font-semibold'>EXAMPLE CORRAL</div>
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
                <div className="flex-grow">
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "Domains",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        Domains
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "SES Profiles",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        SES Profiles
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "LISTS",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        LISTS
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "SUPPRESIONS",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        SUPPRESIONS
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                </div>
            ),
        },
        {
            title: (
                <div className="flex-grow">
                    <div className="grid grid-cols-3 gap-4">
                        <div className='text-primary font-semibold'>EXAMPLE CORRAL</div>
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
                <div className="flex-grow">
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "Domains",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        Domains
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "SES Profiles",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        SES Profiles
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "LISTS",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        LISTS
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                    <DataTable
                        overrideClass='shadow-none'
                        hideHeaderOnMobile={true}
                        hideCellOnMobile={true}
                        keys={[

                            {
                                "key": "domain_name",
                                "label": "SUPPRESIONS",
                                "col": 6
                            },
                            {
                                "key": "action",
                                "label": "",
                                "col": 6
                            },
                        ]}
                        data={DomainsMockData.map((domain, index) => {
                            var data = { ...domain };
                            data.mobileCellView = (
                                <div className='flex flex-col mb-4 justify-between'>
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        SUPPRESIONS
                                    </span>
                                    <span className='text-sm'>
                                        {data?.domain_name}
                                    </span>
                                    <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    </span>
                                    <span className='text-sm'>
                                        {data?.action}
                                    </span>
                                </div>
                            )

                            return data;
                        })}
                    />
                </div>
            ),
        },


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
                                Create new corral
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