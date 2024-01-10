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
                            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                                <svg
                                    className="fill-primary dark:fill-white"
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                        fill=""
                                    />
                                </svg>
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
                            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                                <svg
                                    className="fill-primary dark:fill-white"
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                        fill=""
                                    />
                                </svg>
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
                            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                                <svg
                                    className="fill-primary dark:fill-white"
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                        fill=""
                                    />
                                </svg>
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
                            <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
                                <svg
                                    className="fill-primary dark:fill-white"
                                    width="22"
                                    height="16"
                                    viewBox="0 0 22 16"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <path
                                        d="M11 15.1156C4.19376 15.1156 0.825012 8.61876 0.687512 8.34376C0.584387 8.13751 0.584387 7.86251 0.687512 7.65626C0.825012 7.38126 4.19376 0.918762 11 0.918762C17.8063 0.918762 21.175 7.38126 21.3125 7.65626C21.4156 7.86251 21.4156 8.13751 21.3125 8.34376C21.175 8.61876 17.8063 15.1156 11 15.1156ZM2.26876 8.00001C3.02501 9.27189 5.98126 13.5688 11 13.5688C16.0188 13.5688 18.975 9.27189 19.7313 8.00001C18.975 6.72814 16.0188 2.43126 11 2.43126C5.98126 2.43126 3.02501 6.72814 2.26876 8.00001Z"
                                        fill=""
                                    />
                                    <path
                                        d="M11 10.9219C9.38438 10.9219 8.07812 9.61562 8.07812 8C8.07812 6.38438 9.38438 5.07812 11 5.07812C12.6156 5.07812 13.9219 6.38438 13.9219 8C13.9219 9.61562 12.6156 10.9219 11 10.9219ZM11 6.625C10.2437 6.625 9.625 7.24375 9.625 8C9.625 8.75625 10.2437 9.375 11 9.375C11.7563 9.375 12.375 8.75625 12.375 8C12.375 7.24375 11.7563 6.625 11 6.625Z"
                                        fill=""
                                    />
                                </svg>
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