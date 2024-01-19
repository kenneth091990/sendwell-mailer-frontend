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

const Lists = () => {

    return (
        <>
            <div className="grid grid-cols-12 ">
              
            </div>
            <div className="grid grid-cols-12 gap-3">
                <div className='col-span-3 text-left'>
                    <button className='btn  bg-gray px-3 py-2 border-none rounded-md text-gray mb-3 '>Merge lists</button>
                </div>
                <div className='col-span-6 text-center'>
                     <h1 className='text-2xl mb-3 text-gray'>MANAGE MY LISTS</h1>
                </div>
                <div className='col-span-3 text-right'>
                    <button className='btn  bg-white px-3 py-2 border border-line-blue rounded-md text-blue mb-3 '>Upload new lists</button>
                </div>
                
            </div>
            <div className="grid grid-cols-1 ">
                <div className="w-full rounded-md p-2 border border-line-gray">
                 
                    <table class="border-collapse w-full">
                        <thead>
                            <tr className='border-b border-line-gray'>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">LIST</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">DESCRIPTION</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">COUNT</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">STATUS</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 odd">
                                <td class="w-full lg:w-auto p-4 text-gray-800  border border-b lg:border-none block lg:table-cell relative lg:static max-lg:text-center text-left">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">LIST</span>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className='mx-2 accent-pink-500 checkbox'                
                                        />
                                        sample.txt
                                    </label>
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800 text-center border border-b text-center lg:border-none block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">DESCRIPTION</span>
                                    Lorem ipsum dolor sit amet lorem ipsum sit amet
                                    dolor sit amet lorem ipsum dolor sit amet ala
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800 text-center border border-b text-center lg:border-none block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">COUNT</span>
                                    <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold"> 123,456</span>
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800 text-center border border-b text-center lg:border-none block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">STATUS</span>
                                    <button className='btn  bg-red px-3 border rounded-md text-white'>Inactive</button>
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800 text-center border border-b text-center lg:border-none lg:border-none block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ACTION</span>
                                    <button className='btn  bg-red px-3 border rounded-md text-white'>Delete</button>
                                </td>
                            </tr>
                            <tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 even">
                                <td class="w-full lg:w-auto p-4 text-gray-800  border border-b lg:border-none block lg:table-cell relative lg:static max-lg:text-center text-left">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">LIST</span>
                                    <label>
                                        <input
                                            type="checkbox"
                                            className='mx-2 accent-pink-500 checkbox'                
                                        />
                                        sampleasdsads.txt
                                    </label>
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800 text-center border border-b text-center lg:border-none block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">DESCRIPTION</span>
                                    Lorem ipsum dolor sit amet lorem ipsum sit amet
                                    dolor sit amet lorem ipsum dolor sit amet ala
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800 text-center border border-b text-center lg:border-none block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">COUNT</span>
                                    <span class="rounded bg-red-400 py-1 px-3 text-xs font-bold"> 123,456</span>
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800 text-center border border-b text-center lg:border-none block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">STATUS</span>
                                    <button className='btn  bg-red px-3 border rounded-md text-white'>Inactive</button>
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800 text-center border border-b text-center lg:border-none lg:border-none block lg:table-cell relative lg:static">
                                    <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">ACTION</span>
                                    <button className='btn  bg-red px-3 border rounded-md text-white'>Delete</button>
                                </td>
                            </tr>
                        
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Lists;