import React from 'react'
import { Link } from 'react-router-dom';
import DataTable from '../../common/components/DataTable';
import CircularProgressBar from '../../components/CircularProgressBar';

import GrayBurgerIcon from "./../../images/nav/GrayBurgerIcon.png"
import Icon_Edit from "./../../images/nav/Icon_Edit-removebg-preview.png"
const Queues = () => {

    const mockData = [
        {
            name: 'Sb12-44Sub',
            count: 0,
            status: 'Ready',
            delivery_type: 'MailDelivery',
            time: 'January 10, 2024 10:14 AM',
            actions: '',
        },
    ]

    return (
        <div >
            <div className='flex flex-row justify-center text-center mb-5 max-sm:mb-0'>
                <h1 className='text-2xl mb-3 max-sm:mb-0 text-gray'>MAILING QUEUE</h1>
            </div>
            <div className="flex flex-col w-full">
                <DataTable
                    hideHeaderOnMobile={true}
                    hideCellOnMobile={true}
                    keys={[
                        {
                            "key": "name",
                            "col": 2
                        },
                        {
                            "key": "count",
                            "label": "count",
                            "col": 1
                        },
                        {
                            "key": "status",
                            "col": 2
                        },
                        {
                            "key": "delivery_type",
                            "label": "delivery type",
                            "col": 2
                        },
                        {
                            "key": "time",
                            "label": "created on",
                            "col": 3
                        },
                        {
                            "key": "actions",
                            "col": 2
                        },
                    ]}
                    data={mockData.map((domain, index) => {
                        var data = { ...domain };
                        data.mobileCellView = (
                            <div className='flex flex-col mb-4 justify-between'>
                                <span className="text-black/30 text-md uppercase font-semibold">
                                    Name
                                </span>
                                <span className='text-sm'>
                                    {data?.name}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    Count
                                </span>
                                <span className='text-sm'>
                                    {data?.count}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    Status
                                </span>
                                <span className='text-sm'>
                                    {data?.status}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    Delivery Type
                                </span>
                                <span className='text-sm'>
                                    {data?.delivery_type}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    Time
                                </span>
                                <span className='text-sm'>
                                    {data?.time}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    Actions
                                </span>
                                <span className='text-sm'>
                                    {data?.actions}
                                </span>
                            </div>
                        )
                        data.name = {
                            childRender: (
                                <div className="h-full flex flex-row gap-3 ">
                                    <img src={GrayBurgerIcon} className='h-3.5 w-3.5 mr-1'></img> {data.name}
                                </div>
                            )
                        }
                        data.actions = {
                            childRender: (
                                <div className="h-full flex flex-row gap-3 ">

                                    <button className='' onClick={
                                        () => {

                                        }

                                    }>
                                        <img src={Icon_Edit} height={20} width={20} className='mx-1'></img>
                                    </button>
                                    <button className='bg-blue p-2 px-5 rounded-md font-semibold' onClick={
                                        () => {

                                        }

                                    }> SEND NOW
                                    </button>
                                </div>
                            )
                        }

                        return data;
                    })}
                />
            </div>
        </div>
    )
}

export default Queues;