import React, { createRef, useRef, useState } from 'react'
import DataTable from '../../common/components/DataTable';
import { Link } from 'react-router-dom';
import CircleIcon from './../../images/nav/Circle_Caution.png'
import CircleQuestion from './../../images/nav/Circle_Question.png'
import SearchIcon from './../../images/nav/SearchIcon.png'
import TrashIcon from "./../../images/nav/Icon_Trash-removebg-preview.png"
import InputTextfield from '../../components/InputTextfield';
import Modal from '../../components/Modal';
import MultiSelectWithCheckboxes from '../../components/MultiSelectWithCheckboxes';

import CircularProgressBar from '../../components/CircularProgressBar';



import Circle_Add from "./../../images/nav/Circle_Add.png"
import DataTableV2 from '../../common/components/DataTableV2';
import MultiSelectDropdown from '../../components/MultiSelectDropdown';


const ConnectedDomains = () => {

    const [showModal, setShowModal] = useState(false);
    const [form, setForm] = useState(null);
    const formRef = useRef(null);
    const formView = (formName, action, id) => {
        switch (formName) {
            case 'registrar':
                setForm(addRegistrarForm());
                break;
            case 'domain':
                // setForm(loading());
                setForm(addDomainsForm());
                break;
        }

        if (formRef.current) {
            formRef.current.reset();

        }
    }






    const loading = () => {


        return (
            <div className='flex-inline w-[85vh] max-sm:w-[95%]'>

                <div className='mt-5'>
                    <h2 className='text-blue text-2xl'>PLEASE WAIT</h2>
                </div>
                <div className='mt-5 flex flex-col justify-between items-center text-justify'>
                    <CircularProgressBar />
                    <div className='mt-5 tracking-tighter font-thin '>Adding registrar and syncing domains.</div>
                    <div className='mt-5 tracking-tighter font-thin'>
                        Please
                        <span className='text-black font-semibold'>do not </span>
                        navigate away from this page until the sync completes
                    </div>
                    <div className='tracking-tighter font-thin'>and the "Add Domains" window appears, this may take a few moments</div>
                </div>
            </div>
        )
    }

    const addRegistrarForm = () => {


        return (
            <form ref={formRef} className='flex-inline w-[85vh] max-sm:w-[95%]'>
                <div className='text-center'>
                    <img src={Circle_Add} height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-5'>
                    <h2 className='text-blue'>ADD REGISTRAR</h2>
                </div>
                <div className='mt-5'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-left">

                        <div><InputTextfield type="text" label="REGISTRAR NAME" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>
                        <div><InputTextfield type="text" label="USERNAME" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>

                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-left mt-5">

                        <div><InputTextfield type="password" label="PASSWORD" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>

                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-left mt-5">

                        <div><InputTextfield type="text" label="API TOKEN" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>
                        <div><InputTextfield type="text" label="API URL" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>

                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-left mt-5">

                        <div><InputTextfield type="text" label="NAMESERVER1" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>
                        <div><InputTextfield type="text" label="NAMESERVER1 IP" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>

                    </div>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 text-left mt-5">

                        <div><InputTextfield type="text" label="NAMESERVER2" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>
                        <div><InputTextfield type="text" label="NAMESERVER2 IP" labelClassName="mb-2.5 block font-medium text-black" className='w-full rounded-md border border-black/10 bg-transparent py-1 pl-3 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none' /></div>

                    </div>
                </div>


                <div className='mt-5'>
                    <div>
                        <button className='btn bg-blue p-2 border rounded-md text-white py-2 px-6'>Add Registrar</button>
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
            id: (
                <span className='text-[1rem] text-graydark'>
                    1231
                </span>
            ),
            domain_name: (
                <span className='text-[1rem] break-words'>
                    mydomainname.com
                </span>
            ),
            registrar: (
                <span className='text-[1rem] text-graydark'>
                    eNom
                </span>
            ),
            account: (
                <span className='text-[1rem] text-graydark'>
                    B1gFrank
                </span>
            ),
            created_on: (
                <span className='text-[1rem] text-graydark'>
                    October 5, 2024
                </span>
            ),
            expire_date: (
                <span className='text-[1rem] text-graydark'>
                    October 5, 2028
                </span>
            ),
            action: (
                <div className="w-full">
                    <img src={TrashIcon} alt="TrashIcon" className='h-5 w-5 mx-auto' />
                </div>
            )
        },
        {
            id: (
                <span className='text-[1rem] text-graydark'>
                    1232
                </span>
            ),
            domain_name: (
                <span className='text-[1rem]  break-words'>
                    mydomainname.com
                </span>
            ),
            registrar: (
                <span className='text-[1rem] text-graydark'>
                    eNom
                </span>
            ),
            account: (
                <span className='text-[1rem] text-graydark'>
                    B1gFrank
                </span>
            ),
            created_on: (
                <span className='text-[1rem] text-graydark'>
                    October 5, 2024
                </span>
            ),
            expire_date: (
                <span className='text-[1rem] text-graydark'>
                    October 5, 2028
                </span>
            ),
            action: (
                <div className="w-full">
                    <img src={TrashIcon} alt="TrashIcon" className='h-5 w-5 mx-auto' />
                </div>
            )
        },

    ]

    const addDomainsForm = () => {


        return (
            <form ref={formRef} className='flex-inline w-[110vh] max-sm:w-[95%]'>
                <div className='text-center'>
                    <img src={Circle_Add} height={70} width={70} className='mx-auto my-0' />
                </div>
                <div className='mt-5'>
                    <h2 className='text-blue'>ADD DOMAINS</h2>
                </div>
                <div className='mt-5 mb-[100px]'>
                    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 text-left">

                        <div>
                            <MultiSelectDropdown
                                placeholder='search account'
                                label='REGISTRAR ACCOUNT'
                                labelClassName='text-primary'
                                isMulti={false}
                                options={[
                                    { value: 'GoDaddy (fred1@lusky.com)', label: 'GoDaddy (fred1@lusky.com)' },
                                    { value: 'GoDaddy (fred2@lusky.com)', label: 'GoDaddy (fred2@lusky.com)' },
                                    { value: 'GoDaddy (fred3@lusky.com)', label: 'GoDaddy (fred3@lusky.com)' },
                                    { value: 'GoDaddy (scott@maslowe.com)', label: 'GoDaddy (scott@maslowe.com)' },
                                    { value: 'GoDaddy (fred@lusky.com)', label: 'GoDaddy (fred@lusky.com)' },
                                ]} />
                        </div>

                        <div>
                            {/* <MultiSelectWithCheckboxes placeholder='search available domains' label='AVAILABLE DOMAINS' labelClassName='text-primary' isMulti={true} hasCheckbox={true} hasSelectAll={true} /> */}
                            <MultiSelectDropdown
                                placeholder='search available domains'
                                label='AVAILABLE DOMAINS'
                                labelClassName='text-primary'
                                isMulti={true}
                                hasCheckbox={true}
                                hasSelectAll={true}
                                options={[
                                    { value: 'bgnormanlateral.com', label: 'bgnormanlateral.com' },
                                    { value: 'ladderspaces.com', label: 'ladderspaces.com' },
                                    { value: 'greenneonfantastic.com', label: 'greenneonfantastic.com' },
                                    { value: 'godskins.com', label: 'godskins.com' },
                                ]} />
                        </div>






                        <div>
                            <MultiSelectDropdown
                                placeholder='search selected domains'
                                label='SELECTED DOMAINS'
                                labelClassName='text-primary'
                                isMulti={true}
                                hasCheckbox={true}
                                options={[
                                    { value: 'imodoma.com', label: 'imodoma.com' },
                                    { value: 'generalred.com', label: 'generalred.com' },
                                    { value: 'italiantourismboard.com', label: 'italiantourismboard.com' },
                                    { value: 'garysgarageband.com', label: 'garysgarageband.com' },
                                    { value: 'juiceboxcleanse.com', label: 'juiceboxcleanse.com' },
                                    { value: 'blueneoninvestments.com', label: 'blueneoninvestments.com' },
                                ]} />
                        </div>

                    </div>
                </div>


                <div className='mt-5'>
                    <div>
                        <button className='btn bg-blue p-2 border rounded-md text-white py-2 px-6'>Sync Domains</button>
                    </div>
                    <div className='mt-3'>
                        <button className='btn bg-transparent text-blue px-6' onClick={() => setShowModal(false)}>Cancel</button>
                    </div>
                </div>
            </form>
        )
    }


    return (
        <React.Fragment>
            <div className='flex flex-row justify-center text-center mb-5 mt-2 max-sm:mb-0 items-center'>
                <div className='text-right max-sm:hidden'>
                    <button className='btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            setShowModal(true);
                            formView('domain', 'n', 0);
                        }
                    }>
                        Add domains
                    </button>
                </div>
                <h1 className='flex-1 text-2xl mb-3 max-sm:mb-0 text-gray'>CONNECTED DOMAINS</h1>
                <div className='text-right max-sm:hidden'>
                    <button className='btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            setShowModal(true);
                            formView('registrar', 'n', 0);
                        }
                    }>
                        Add registrar
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <DataTableV2
                    hideHeaderOnMobile={true}
                    hideCellOnMobile={true}
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
                    keys={[
                        {
                            "key": "id",
                            "col": "10%"
                        },
                        {
                            "key": "domain_name",
                            "label": "domain name",
                            "col": "20%"
                        },
                        {
                            "key": "registrar",
                            "col": "20%"
                        },
                        {
                            "key": "account",
                            "col": "20%"
                        },
                        {
                            "key": "created_on",
                            "label": "created on",
                            "col": "10%"
                        },
                        {
                            "key": "expire_date",
                            "label": "expire date",
                            "col": "10%"
                        },
                        {
                            "key": "action",
                            "label": "",
                            "col": "10%"
                        },
                    ]}
                    data={mockData.map((domain, index) => {
                        var data = { ...domain };
                        data.mobileCellView = (
                            <div className='flex flex-col mb-4 justify-between'>
                                <span className="text-black/30 text-md uppercase font-semibold">
                                    id
                                </span>
                                <span className='text-sm'>
                                    {data?.id}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    domain name
                                </span>
                                <span className='text-sm'>
                                    {data?.domain_name}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    registrar
                                </span>
                                <span className='text-sm'>
                                    {data?.registrar}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    account
                                </span>
                                <span className='text-sm'>
                                    {data?.account}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    created on
                                </span>
                                <span className='text-sm'>
                                    {data?.created_on}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    expire date
                                </span>
                                <span className='text-sm'>
                                    {data?.expire_date}
                                </span>
                            </div>
                        )
                        data.domain_name = {
                            childRender: (
                                <a key={index} href={`https://${data.domain_name}`} target="_blank" className='text-primary underline !text-md'>{data.domain_name}</a>
                            )
                        }

                        return data;
                    })}
                    emptyDataComponent={(
                        <div className="flex flex-col items-center w-full py-10">
                            <img src={CircleIcon} alt="CircleIcon" className='h-[4rem] w-[4rem] mb-4' />
                            <p className='text-black/60'>
                                It looks like you haven't connected a registrar account.
                            </p>
                            <p className='text-black/60'>
                                Please select the <Link to={'#'} className='text-primary underline'>“Add registrar”</Link> button above to connect one now.
                            </p>
                        </div>
                    )}
                />
            </div>
            {/* <div className="flex w-full px-[28.5%] max-sm:px-0 gap-2 flex-row items-center mt-11">
                <img src={CircleQuestion} alt="CircleIcon" className='h-[3rem] w-[3rem]' />
                <p className='text-black/60 py-0 text-sm'>
                    Don't see all your domains? Make sure you've connected all
                    of your registrar accounts on the <Link to={'/integrations'} className='text-primary underline'>integrations</Link> page.
                </p>
            </div> */}
            <Modal className={"desktop:w-[75%] laptop:w-[95%]"} onClose={() => {
                setShowModal(false);
            }} showModal={showModal}>
                {form}
            </Modal>
        </React.Fragment>
    )
}

export default ConnectedDomains;