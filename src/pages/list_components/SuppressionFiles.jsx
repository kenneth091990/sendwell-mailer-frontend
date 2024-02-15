import React from 'react'
import DataTable from '../../common/components/DataTable';
import SelectDropdown from '../../components/SelectDropdown';
import BurgerMenu from './../../images/nav/Mobile hamburger.png';
import Icon_Download from "./../../images/nav/Icon_Download-removebg-preview.png"
import Icon_Edit from "./../../images/nav/Icon_Edit-removebg-preview.png"
import Icon_Trash from "./../../images/nav/Icon_Trash-removebg-preview.png"


const SuppresionFiles = () => {
    const mockData = [
        {
            "list": "list/00000000-0713-e1.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "campaign": "Solar A1",
            "count": "4,019",
            "status": "inactive",
        },
        {
            "list": "list/00000000-0713.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "campaign": "Global",
            "count": "1,223,009",
            "status": "active",
        },
        {
            "list": "list/00000000-0713-e1.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "campaign": "Roof Sytems",
            "count": "4,019",
            "status": "inactive",
        },
        {
            "list": "list/0000000000_0808_verified_refi.txt",
            "description": "Lorem ipsum dolor sit amet lorem ipsum sit amet dolor sit amet lorem ipsum dolor sit amet ala",
            "campaign": "Global",
            "count": "1,223,009",
            "status": "active",
        },
    ]

    return (
        <div className='pb-11'>
            <div className="grid grid-cols-12 gap-3">
                <div className='col-span-3 max-sm:col-span-12 text-left max-sm:hidden'>
                    <button className='flex flex-row gap-3 btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            // setShowModal(true);
                            // formView('uploadList', 'n', 0);
                        }
                    }>
                        Upload new list
                    </button>
                </div>
                <div className='col-span-6 max-sm:col-span-12 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>
                        SUPPRESSION FILES
                    </h1>
                </div>
                <div className='col-span-3'>
                </div>
            </div>
            <div className="w-full mt-5">
                <DataTable
                    hideHeaderOnMobile={true}
                    keys={[{
                        "key": "list",
                        "col": 3,

                    }, {
                        "key": "description",
                        "col": 3,

                    }, {
                        "key": "campaign",
                        "col": 2,

                    }, {
                        "key": "count",
                        "col": 1,

                    }, {
                        "key": "status",
                        "col": 1,

                    }, {
                        "key": "actions",
                        "col": 2,
                        "render": (
                            <div className="text-center flex flex-row gap-3 justify-center items-center">
                                <span className="font-semibold text-black/40 uppercase xsm:text-base">
                                    Actions
                                </span>
                            </div>
                        )
                    }]} data={mockData.map((mock, index) => {
                        var data = { ...mock };
                        data.mobileCellView = (
                            <div className='flex flex-col mb-4 justify-between'>
                                <div className="flex flex-row justify-between">
                                    <span className="text-black/30 text-md uppercase font-semibold">
                                        List
                                    </span>
                                    <button className=''>
                                        <img src={BurgerMenu} height={20} width={20} className='mx-1'></img>
                                    </button>
                                </div>
                                <span className='text-sm'>
                                    {data?.list}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    description
                                </span>
                                <span className='text-sm'>
                                    {data?.description}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    campaign
                                </span>
                                <span className='text-sm'>
                                    {data?.campaign}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    count
                                </span>
                                <span className='text-sm'>
                                    {data?.count}
                                </span>
                                <span className="text-black/30 text-md uppercase font-semibold mt-3">
                                    status
                                </span>
                                <span className='text-sm mt-3'>
                                    {data?.status === "active" ? (
                                        <span className='w-2/3 text-center border-none bg-success px-7 border rounded font-thin text-white py-2'>
                                            Active
                                        </span>
                                    ) : (
                                        <span className='w-2/3 text-center border-none bg-danger px-7 border rounded font-thin text-white py-2'>
                                            Inactive
                                        </span>
                                    )}
                                </span>
                            </div>
                        )

                        data.actions = (
                            <div className="h-full flex flex-row gap-3 justify-center items-center">
                                <button className=''>
                                    <img src={Icon_Download} height={20} width={20} className='mx-1'></img>
                                </button>
                                <button className='' onClick={
                                    () => {
                                        setShowModal(true);
                                        formView('editList', 'n', 0);
                                    }

                                }>
                                    <img src={Icon_Edit} height={20} width={20} className='mx-1'></img>
                                </button>
                                <button className='' onClick={
                                    () => {
                                        setShowModal(true);
                                        formView('deleteList', 'n', 0);
                                    }

                                }>
                                    <img src={Icon_Trash} height={20} width={20} className='mx-1'></img>
                                </button>
                            </div>
                        )

                        data.status = (
                            <div className="h-full flex items-center  text-xs justify-start">
                                {data?.status === "active" ? (
                                    <span className='w-full text-center border-none bg-success px-5 border rounded font-thin text-white py-1'>
                                        Active
                                    </span>
                                ) : (
                                    <span className='w-full text-center border-none bg-danger px-5 border rounded font-thin text-white py-1'>
                                        Inactive
                                    </span>
                                )}
                            </div>
                        )


                        return data;
                    })} headerChildren={(
                        <div className='flex flex-row py-5'>
                            <SelectDropdown
                                label={"SORT BY CAMPAIGN"}
                                labelClassName="font-semibold text-black/40 text-sm uppercase"
                                containerClassName={"w-1/5 max-sm:w-full"}>
                                <option value="">All Campaigns</option>
                                <option value="">Test Campaigns</option>
                            </SelectDropdown>
                        </div>
                    )} />
            </div>
        </div>
    )
}

export default SuppresionFiles;