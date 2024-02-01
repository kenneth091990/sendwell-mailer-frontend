import React from 'react'
import { Link } from 'react-router-dom';
import DataTable from '../../common/components/DataTable';
import CircularProgressBar from '../../components/CircularProgressBar';
import CircleIcon from './../../images/nav/Circle_Caution.png'
import CircleQuestion from './../../images/nav/Circle_Question.png'
const Domains = () => {

    const mockData = [
        {
            id: 1231,
            domain_name: 'mydomainname.com',
            registrar: 'eNom',
            account: 'B1gFrank',
            created_on: 'October 5, 2024',
            expire_date: 'October 5, 2028',
        },
        {
            id: 1232,
            domain_name: 'mydomainname.com',
            registrar: 'eNom',
            account: 'B1gFrank',
            created_on: 'October 5, 2024',
            expire_date: 'October 5, 2028',
        },
        {
            id: 1233,
            domain_name: 'mydomainname.com',
            registrar: 'eNom',
            account: 'B1gFrank',
            created_on: 'October 5, 2024',
            expire_date: 'October 5, 2028',
        }
    ]

    return (
        <div >
            <div className='flex flex-row justify-center text-center mb-5 max-sm:mb-0'>
                <h1 className='text-2xl mb-3 max-sm:mb-0 text-gray'>CONNECTED DOMAINS</h1>
            </div>
            <div className="flex flex-col w-full">
                <DataTable
                    hideHeaderOnMobile={true}
                    hideCellOnMobile={true}
                    keys={[
                        {
                            "key": "id",
                            "col": 1
                        },
                        {
                            "key": "domain_name",
                            "label": "domain name",
                            "col": 3
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
                                Please navigate to the <Link to={'/integrations'} className='text-primary underline'>integrations</Link> page to connect one now.
                            </p>
                        </div>
                    )}
                />
            </div>
            <div className="flex w-full px-[28.5%] max-sm:px-0 gap-2 flex-row items-center mt-11">
                <img src={CircleQuestion} alt="CircleIcon" className='h-[3rem] w-[3rem]' />
                <p className='text-black/60 py-0 text-sm'>
                    Don't see all your domains? Make sure you've connected all
                    of your registrar accounts on the <Link to={'/integrations'} className='text-primary underline'>integrations</Link> page.
                </p>
            </div>
            <div className="flex flex-col items-center">
                <CircularProgressBar />
            </div>
        </div>
    )
}

export default Domains;