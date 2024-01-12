import React from 'react'
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

const Dashboard = () => {

    return (
        <>
            <div className="grid grid-cols-12 ">
                <h1 className='text-2xl'>Dashboard</h1>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
                <div className="border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark bg-blue rounded-lg">
                    <div >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex h-11.5 w-11.5">
                                <img  src="/src/images/CardIcons-22.png" height={16} />

                            </div>
                            <div>
                                <p>1,999,999</p>
                                <p className='text-center'>Mailings</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                        <div className='w-full bg-transparent '>
                             <button class="btn btn-blue w-full bg-transparent text-white p-2 rounded-lg border-solid border" >
                                Manage Mailings
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark bg-green rounded-lg text-white">
                    <div >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex h-11.5 w-11.5 ">
                           
                                <img  src="/src/images/CardIcons-23.png" height={16} />

                            </div>
                            <div>
                                <p>1,999,999</p>
                                <p className='text-center'>Cretives</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                        <div className='w-full bg-transparent '>
                             <button class="btn btn-blue w-full bg-transparent text-white p-2 rounded-lg border-solid border" >
                                Manage Cretives
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark bg-orange rounded-lg text-white">
                    <div >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex h-11.5 w-11.5 ">
                                <img  src="/src/images/CardIcons-24.png" height={16} />

                            </div>
                            <div>
                                <p>1,999,999</p>
                                <p className='text-center'>VMtas</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                        <div className='w-full bg-transparent '>
                             <button class="btn btn-blue w-full bg-transparent text-white p-2 rounded-lg border-solid border" >
                                Manage VMtas
                            </button>
                        </div>
                    </div>
                </div>
                <div className="border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark bg-red rounded-lg text-white">
                    <div >
                        <div className="grid grid-cols-2 gap-4">
                            <div className="flex h-11.5 w-11.5">
                                <img  src="/src/images/CardIcons-25.png" height={16} />

                            </div>
                            <div>
                                <p>1,999,999</p>
                                
                                <p className='text-center'>Deployments</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                        <div className='w-full bg-transparent '>
                             <button class="btn btn-blue w-full bg-transparent text-white p-2 rounded-lg border-solid border" >
                                View Deployments
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
                <div className="col-span-12">   <h1 className='text-2xl'>DELIVERY AT GLANCE</h1></div>
             
                <div className="col-span-12   px-5 pt-7.5 pb-5 shadow-default  lg:col-span-6">
                    <div className="">
                        <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
                            GRAND TOTAL
                        </h4>
                        <div className="flex flex-col">
                            <div className="grid grid-cols-2 border-b-2">
                                <div className="p-2 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue">
                                    Total out
                                    </h5>
                                </div>
                                <div className="p-2 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue ">
                                    123,456
                                    </h5>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 border-b-2">
                                <div className="p-2 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue">
                                    Total Minute Out
                                    </h5>
                                </div>
                                <div className="p-2 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue ">
                                    123,456
                                    </h5>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 border-b-2">
                                <div className="p-2 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue">
                                    Last Minute out
                                    </h5>
                                </div>
                                <div className="p-2 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue ">
                                    123,456
                                    </h5>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 border-b-2">
                                <div className="p-2 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue">
                                    Active Connections
                                    </h5>
                                </div>
                                <div className="p-2 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue ">
                                    123,456
                                    </h5>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 border-b-2">
                                <div className="p-2 xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue">
                                    Total  in Queue
                                    </h5>
                                </div>
                                <div className="p-2 text-center xl:p-5">
                                    <h5 className="text-sm font-medium uppercase xsm:text-base text-blue ">
                                    123,456
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ChartOne />
               
         
            </div>
        </>
    )
}

export default Dashboard;