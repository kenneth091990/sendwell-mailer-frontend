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

const Suppresions = () => {

    return (
        <>
           
            <div className="grid grid-cols-12 gap-3">
                <div className='col-span-3 text-left max-md:col-span-12'>
                    <button className='btn  bg-white px-3 py-2 border border-line-blue rounded-md text-blue mb-3 '>Upload new lists</button>
                </div>
                <div className='col-span-6 text-center max-md:col-span-12'>
                     <h1 className='text-2xl mb-3 text-gray'>SUPPRESSION FILES</h1>
                </div>
               
                
            </div>
            <div className="grid grid-cols-1 gap-3 mb-3">
                <div>
                    <label className='text-gray'>SORT BY CAMPAIGN</label>
                   
                </div>
                <div> 
                    <select className='p-3 border border-line-gray'>
                        <option value="All">All Campaigns</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 ">
                <div className="w-full rounded-md p-2  lg:border border-line-gray">
                 
                    <table class="border-collapse w-full">
                        <thead>
                            <tr className='lg:border-b border-line-gray'>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">LIST</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">DESCRIPTION</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">COUNT</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">STATUS</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr class="rounded-md bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 odd">
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">LIST</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                           <label>
                                                <input
                                                    type="checkbox"
                                                    className='mx-2 accent-pink-500 checkbox'                
                                                />
                                                sample.txt
                                            </label>
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">DESCRIPTION</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                        Lorem ipsum dolor sit amet lorem ipsum sit amet
                                        dolor sit amet lorem ipsum dolor sit amet ala
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">COUNT</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                    123,456
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">STATUS</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                         <button className='btn  bg-red p-5 border rounded-md text-white py-3'>Inactive</button>
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">ACTION</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Download-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                         </button>
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Edit-removebg-preview.png' height={20} width={20}  className='mx-1'></img>
                                         </button>
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Trash-removebg-preview.png' height={20} width={20}  className='mx-1'></img>
                                         </button>
                                    </div>
                             
                                </td>
                            </tr>
                            <tr class="rounded-md bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 even">
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">LIST</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                           <label>
                                                <input
                                                    type="checkbox"
                                                    className='mx-2 accent-pink-500 checkbox'                
                                                />
                                                sample.txt
                                            </label>
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">DESCRIPTION</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                        Lorem ipsum dolor sit amet lorem ipsum sit amet
                                        dolor sit amet lorem ipsum dolor sit amet ala
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">COUNT</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                    123,456
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">STATUS</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                         <button className='btn  bg-red p-5 border rounded-md text-white py-3'>Inactive</button>
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">ACTION</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Download-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                         </button>
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Edit-removebg-preview.png' height={20} width={20}  className='mx-1'></img>
                                         </button>
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Trash-removebg-preview.png' height={20} width={20}  className='mx-1'></img>
                                         </button>
                                    </div>
                             
                                </td>
                            </tr>
                            
                        
                        
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-12 gap-3 mt-5">
                <div className='col-span-3 text-left max-md:col-span-12'>
                    <button className='btn  bg-white px-3 py-2 border border-line-blue rounded-md text-blue mb-3 '>Add cemented list</button>
                </div>
                <div className='col-span-6 text-center max-md:col-span-12'>
                     <h1 className='text-2xl mb-3 text-gray'>CEMENTED SUPPRESSION FILES</h1>
                </div>
               
                
            </div>
            <div className="grid grid-cols-1 gap-3 mb-3">
                <div>
                    <label className='text-gray'>SORT BY CAMPAIGN</label>
                   
                </div>
                <div> 
                    <select className='p-3 border border-line-gray'>
                        <option value="All">All Campaigns</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 ">
                <div className="w-full rounded-md p-2 border border-line-gray">
                 
                <table class="border-collapse w-full">
                        <thead>
                            <tr className='lg:border-b border-line-gray'>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">LIST</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">DESCRIPTION</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">COUNT</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">STATUS</th>
                                <th class="py-1 px-4 text-gray hidden lg:table-cell">ACTION</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr class="rounded-md bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 odd">
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">LIST</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                           <label>
                                                <input
                                                    type="checkbox"
                                                    className='mx-2 accent-pink-500 checkbox'                
                                                />
                                                sample.txt
                                            </label>
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">DESCRIPTION</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                        Lorem ipsum dolor sit amet lorem ipsum sit amet
                                        dolor sit amet lorem ipsum dolor sit amet ala
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">COUNT</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                    123,456
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">STATUS</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                         <button className='btn  bg-red p-5 border rounded-md text-white py-3'>Inactive</button>
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">ACTION</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Download-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                         </button>
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Edit-removebg-preview.png' height={20} width={20}  className='mx-1'></img>
                                         </button>
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Trash-removebg-preview.png' height={20} width={20}  className='mx-1'></img>
                                         </button>
                                    </div>
                             
                                </td>
                            </tr>
                            <tr class="rounded-md bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0 even">
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">LIST</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                           <label>
                                                <input
                                                    type="checkbox"
                                                    className='mx-2 accent-pink-500 checkbox'                
                                                />
                                                sample.txt
                                            </label>
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">DESCRIPTION</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                        Lorem ipsum dolor sit amet lorem ipsum sit amet
                                        dolor sit amet lorem ipsum dolor sit amet ala
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">COUNT</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                    123,456
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">STATUS</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                         <button className='btn  bg-red p-5 border rounded-md text-white py-3'>Inactive</button>
                                    </div>
                             
                                </td>
                                <td class="w-full lg:w-auto p-4 text-gray-800  border-none  block lg:table-cell relative lg:static text-left">
                                    <div class="lg:hidden text-xl font-medium uppercase text-gray">ACTION</div>
                                    <div class='max-md:mt-3 md:mt-3'>    
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Download-removebg-preview.png' height={20} width={20} className='mx-1'></img>
                                         </button>
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Edit-removebg-preview.png' height={20} width={20}  className='mx-1'></img>
                                         </button>
                                         <button className=''>
                                            <img src='src/images/nav/Icon_Trash-removebg-preview.png' height={20} width={20}  className='mx-1'></img>
                                         </button>
                                    </div>
                             
                                </td>
                            </tr>
                        
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Suppresions;