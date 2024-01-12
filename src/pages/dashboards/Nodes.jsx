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

const Nodes = () => {

    return (
        <>
            <div className="grid grid-cols-12 ">
                <h1 className='text-2xl mb-3'>Nodes</h1>
            </div>
            <div className="grid grid-cols-12 ">
                <button className='btn  bg-green px-3 py-2 border rounded-md text-white mb-3'>New Node</button>
            </div>
            <div className="grid grid-cols-1 ">
                <div className="w-full ">
                    <table className="w-full ">
                        <thead>
                            <tr className="bg-gray-2 text-left dark:bg-meta-4 border-t border-b">
                                <th className="py-1 px-4 text-black dark:text-white xl:pl-11">
                                    Node ID
                                </th>
                                <th className=" py-1 px-4  text-black dark:text-white">
                                    Name
                                </th>
                                <th className="py-1 px-4  text-black dark:text-white">
                                    IP
                                </th>
                                <th className="py-1 px-4 text-black dark:text-white">
                                    Enabled
                                </th>
                                <th className="py-1 px-4  text-black dark:text-white">
                                    Delete
                                </th>
                                <th className="py-1 px-4  text-black dark:text-white">
                                    Restart
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-gray-2 text-left bg-transparent ">
                                <td className="py-1 px-4 text-black text-medium">
                                   8
                                </td>
                                <td className=" py-1 px-4 text-black text-medium">
                                    T1233432
                                </td>
                                <td className="py-1 px-4  text-black text-medium">
                                    123.23.123
                                </td>
                                <td className="py-1 px-4 text-black text-medium">
                                    <select>
                                        <option value="Enable">On</option>
                                        <option value="Disable">Off</option>
                                    </select>
                                </td>
                                <td className="py-1 px-4  text-black text-medium">
                                    <button className='btn  bg-red px-3 border rounded-md text-white'>Delete</button>
                                </td>
                                <td className="py-1 px-4  text-black text-medium">
                                    <button className='btn  bg-green px-3 border rounded-md text-white'>Restart</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Nodes;