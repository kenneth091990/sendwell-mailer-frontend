import React from 'react'
import DataTable from '../../common/components/DataTable';
import { Link } from 'react-router-dom';
import CircleIcon from './../../images/nav/Circle_Caution.png'
import CircleQuestion from './../../images/nav/Circle_Question.png'
import SearchIcon from './../../images/nav/SearchIcon.png'
import TrashIcon from "./../../images/nav/Icon_Trash-removebg-preview.png"
import InputTextfield from '../../components/InputTextfield';

const ConnectedDomains = () => {
    const mockData = [
        {
            id: (
                <span className='text-[1rem] text-graydark'>
                    1231
                </span>
            ),
            domain_name: (
                <span className='text-[1rem] '>
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
                <span className='text-[1rem] '>
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

    return (
        <React.Fragment>
            <div className='flex flex-row justify-center text-center mb-5 mt-2 max-sm:mb-0 items-center'>
                <div className='text-right max-sm:hidden'>
                    <button className='btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3'>
                        Add domains
                    </button>
                </div>
                <h1 className='flex-1 text-2xl mb-3 max-sm:mb-0 text-gray'>CONNECTED DOMAINS</h1>
                <div className='text-right max-sm:hidden'>
                    <button className='btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3'>
                        Add registrar
                    </button>
                </div>
            </div>
            <div className="flex flex-col w-full">
                <DataTable
                    hideHeaderOnMobile={true}
                    hideCellOnMobile={true}
                    headerChildren={(
                        <div className='w-full max-sm:items-center max-sm:flex-col flex flex-row mb-3'>
                            <InputTextfield inputProps={{
                                placeholder: "Search...",
                                type: "text",
                            }} iconComponent={(
                                <div className='px-3 py-1.5'>
                                    <img src={SearchIcon} className="h-6 w-6" alt="SearchIcon" />
                                </div>
                            )} />
                        </div>
                    )}
                    keys={[
                        {
                            "key": "id",
                            "col": 1
                        },
                        {
                            "key": "domain_name",
                            "label": "domain name",
                            "col": 2
                        },
                        {
                            "key": "registrar",
                            "col": 2
                        },
                        {
                            "key": "account",
                            "col": 2
                        },
                        {
                            "key": "created_on",
                            "label": "created on",
                            "col": 2
                        },
                        {
                            "key": "expire_date",
                            "label": "expire date",
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
        </React.Fragment>
    )
}

export default ConnectedDomains;