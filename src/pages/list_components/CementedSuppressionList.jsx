import React from 'react'
import DataTable from '../../common/components/DataTable';
import SelectDropdown from '../../components/SelectDropdown';
import AddIcon from "./../../images/nav/AddIcon.png"
const CementedSuppressionList = () => {

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
                        <div className='flex flex-row gap-3 '>
                            <img src={AddIcon} alt="AddIcon" className='h-6 w-6' />
                            <span>
                                Add cemented list
                            </span>
                        </div>
                    </button>
                </div>
                <div className='col-span-6 max-sm:col-span-12 text-center'>
                    <h1 className='text-2xl mb-3 text-gray'>
                        CEMENTED SUPPRESSION FILES
                    </h1>
                </div>
                <div className='col-span-3 max-sm:col-span-12 text-left hidden max-sm:block max-sm:text-center'>
                    <button className='btn font-medium bg-white px-3 py-2 border border-line-blue-mailer text-blue-mailer rounded-md mb-3' onClick={
                        () => {
                            // setShowModal(true);
                            // formView('uploadList', 'n', 0);
                        }
                    }>
                        <div className='flex flex-row gap-3 '>
                            <img src={AddIcon} alt="AddIcon" className='h-6 w-6' />
                            <span>
                                Add cemented list
                            </span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="w-full mt-5">
                <DataTable data={[]} headerChildren={(
                    <div className='flex flex-row py-5'>
                        <SelectDropdown
                            label={"SORT BY CAMPAIGN"}
                            labelClassName="font-semibold text-black/40 text-sm uppercase"
                            containerClassName={"w-1/5"} />
                    </div>
                )} />
            </div>
        </div>
    )
}

export default CementedSuppressionList;