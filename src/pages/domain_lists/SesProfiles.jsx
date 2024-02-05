import React from 'react'
import DataTable from '../../common/components/DataTable';
import { Link } from 'react-router-dom';
import CircleIcon from './../../images/nav/Circle_Caution.png'
import CircleQuestion from './../../images/nav/Circle_Question.png'
import SearchIcon from './../../images/nav/SearchIcon.png'
import SES_Settings from './../../images/nav/SES_Settings.png'
import TrashIcon from "./../../images/nav/Icon_Trash-removebg-preview.png"
import EditIcon from "./../../images/nav/Icon_Edit-removebg-preview.png"
import InputTextfield from '../../components/InputTextfield';


const SesProfiles = () => {
    const mockData = [
        // {
        //     id: 1231,
        //     domain_name: 'mydomainname.com',
        //     registrar: 'eNom',
        //     account: 'B1gFrank',
        //     created_on: 'October 5, 2024',
        //     expire_date: 'October 5, 2028',
        //     action: (
        //         <div className="w-full">
        //             <img src={TrashIcon} alt="TrashIcon" className='h-5 w-5 mx-auto' />
        //         </div>
        //     )
        // },
        {
            id: (
                <span className='text-[1rem] text-graydark'>
                    1446
                </span>
            ),
            email: (
                <span className='text-[1rem] text-graydark'>
                    samdini141@gmail.com
                </span>
            ),
            rate_limit: (
                <span className='text-[1rem] text-graydark'>
                    7 per second
                </span>
            ),
            daily_quota: (
                <span className='text-[1rem] text-graydark'>
                    45,000
                </span>
            ),
            total_jobs: (
                <span className='text-[1rem] text-graydark'>
                    150
                </span>
            ),
            action: (
                <div className="w-full flex flex-row gap-2">
                    <img src={EditIcon} alt="EditIcon" className='h-5 w-5 mx-auto' />
                    <img src={TrashIcon} alt="TrashIcon" className='h-5 w-5 mx-auto' />
                </div>
            )
        },
        {
            id: (
                <span className='text-[1rem] text-graydark'>
                    1442
                </span>
            ),
            email: (
                <span className='text-[1rem] text-graydark'>
                    samdini141@gmail.com
                </span>
            ),
            rate_limit: (
                <span className='text-[1rem] text-graydark'>
                    7 per second
                </span>
            ),
            daily_quota: (
                <span className='text-[1rem] text-graydark'>
                    45,000
                </span>
            ),
            total_jobs: (
                <span className='text-[1rem] text-graydark'>
                    150
                </span>
            ),
            action: (
                <div className="w-full flex flex-row gap-2">
                    <img src={EditIcon} alt="EditIcon" className='h-5 w-5 mx-auto' />
                    <img src={TrashIcon} alt="TrashIcon" className='h-5 w-5 mx-auto' />
                </div>
            )
        }

    ]
    return (
        <React.Fragment>
            <div className="grid grid-cols-12 gap-3 pt-11">
                <div className='col-span-3 max-sm:col-span-12 text-left max-sm:hidden'>
                    <button className='flex flex-row gap-3 btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            // setShowModal(true);
                            // formView('uploadList', 'n', 0);
                        }
                    }>
                        <div className='flex flex-row gap-3 '>
                            <span>
                                Add SES Profile
                            </span>
                        </div>
                    </button>
                </div>
                <div className='col-span-6 max-sm:col-span-12 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>
                        SES PROFILES
                    </h1>
                </div>
                <div className='col-span-3 max-sm:col-span-12 text-left hidden max-sm:text-center'>
                    <button className='btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            // setShowModal(true);
                            // formView('uploadList', 'n', 0);
                        }
                    }>
                        <div className='flex flex-row gap-3 '>
                            <span>
                                Add SES Profile
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <DataTable
                    hideHeaderOnMobile={true}
                    hideCellOnMobile={true}
                    headerChildren={(
                        <div className='w-full flex flex-row max-sm:flex-col justify-between max-sm:items-center  mb-3'>
                            <InputTextfield inputProps={{
                                placeholder: "Search...",
                                type: "text",
                            }} iconComponent={(
                                <div className='px-3 py-1.5'>
                                    <img src={SearchIcon} className="h-6 w-6" alt="SearchIcon" />
                                </div>
                            )} />
                            <button className='max-sm:hidden btn font-medium bg-white px-3 py-2 border-0 rounded-md mb-3' onClick={
                                () => {
                                    // setShowModal(true);
                                    // formView('uploadList', 'n', 0);
                                }
                            }>
                                <div className='flex flex-row gap-3 text-primary'>
                                    <img src={SES_Settings} alt="SES_Settings" className='h-6 w-6' />
                                    <span>
                                        SES Settings
                                    </span>
                                </div>
                            </button>
                        </div>
                    )}
                    keys={[
                        {
                            "key": "id",
                            "col": 2
                        },
                        {
                            "key": "email",
                            "col": 3
                        },
                        {
                            "key": "rate_limit",
                            "label": "rate limit",
                            "col": 2
                        },
                        {
                            "key": "daily_quota",
                            "label": "daily quota",
                            "col": 2
                        },
                        {
                            "key": "total_jobs",
                            "label": "total jobs",
                            "col": 2
                        },
                        {
                            "key": "action",
                            "label": "",
                            "col": 1
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
                                    email
                                </span>
                                <span className='text-sm'>
                                    {data?.email}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    rate limit
                                </span>
                                <span className='text-sm'>
                                    {data?.rate_limit}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    daily quota
                                </span>
                                <span className='text-sm'>
                                    {data?.daily_quota}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    total jobs
                                </span>
                                <span className='text-sm'>
                                    {data?.total_jobs}
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
        </React.Fragment>
    )
}

export default SesProfiles;