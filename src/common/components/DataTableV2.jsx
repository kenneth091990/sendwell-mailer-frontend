import React, { useEffect, useState } from 'react'
import CircularProgressBar from '../../components/CircularProgressBar';

const DataTableV2 = ({ data, emptyDataComponent, headerChildren, isLoading, hideCellOnMobile, keys, removeDistinctCellBg, hideHeaderOnMobile, overrideClass }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            if (window.matchMedia("(max-width: 768px)").matches) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        // Check on initial mount
        checkScreenSize();

        // Set up event listener for resizing
        window.addEventListener('resize', checkScreenSize);

        // Clean up
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const validatedData = data ?? [];

    return (
        <div className={`overflow-auto flex w-full flex-col rounded-2xl px-6 max-sm:px-0 pt-5 pb-7 bg-white  shadow-lg max-sm:shadow-none ${overrideClass}`}>
            {headerChildren}

            <table className="w-full table-auto">
                <thead className={`${hideHeaderOnMobile ? "laptop:contents tablet:hidden max-sm:hidden " : ""}`}>
                    <tr className="border-b-2 border-black/40 w-full text-left">
                        {(keys ?? []).map((ii, index) => {
                            // if (ii?.render) return <div key={index} className={`px-1 py-2 col-span-${ii?.col}`}>
                            //     {ii?.render}
                            // </div>;

                            if (ii?.render) return <th key={index} className={`font-semibold min-w-[${ii?.col}] px-2 py-2 text-sm font-medium text-black/40 uppercase`}>
                                {ii?.render}
                            </th>;
                            //     <span className="font-semibold text-black/40 text-sm uppercase">
                            //     </span>
                            // </div>
                            return (
                                <th key={index} className={`font-semibold min-w-[${ii?.col}] px-2 py-2 text-sm font-medium text-black/40 uppercase`}>
                                    {ii?.label ?? ii?.key}
                                </th>
                            )
                        })}
                    </tr>
                </thead>
                <tbody className='overflow-auto '>
                    {(() => {
                        if (isLoading) {
                            return (
                                <tr>
                                    <td colSpan={keys.length}>
                                        <CircularProgressBar />
                                    </td>
                                </tr>
                            )
                        }

                        if (!validatedData.length) {
                            return (
                                <tr>
                                    <td colSpan={keys.length} className="w-full text-center">
                                        {emptyDataComponent ?? (<span className='w-full mt-4 text-center'>No Data Yet</span>)}
                                    </td>
                                </tr>
                            )
                        }

                        return validatedData.map((ele, index) => {
                            // * Add to non strict mobile View [ && ele?.mobileCellView]
                            if (isMobile) {
                                if (!ele?.mobileCellView) {

                                    return <tr key={index}>
                                        <td colSpan={keys.length}>
                                            <div key={index} className="text-center text-black">
                                                Please add a `mobileCellView`
                                            </div>
                                        </td>
                                    </tr>

                                }
                                // The code inside this block will run if the viewport width is less than 640px
                                // This is where you can add your logic to hide something on mobile
                                return <tr key={index}>
                                    <td colSpan={keys.length}>
                                        <div key={index} className={`w-full py-4 px-2 rounded-md ${index % 2 !== 0 ? "bg-black/10" : ""} `}>
                                            {ele?.mobileCellView}
                                        </div>
                                    </td>
                                </tr>
                            }

                            return (
                                <tr key={index} className={`${index % 2 !== 0 ? "bg-black/10" : ""} ${hideCellOnMobile ? "max-sm:hidden" : ""}`} >
                                    {(keys ?? []).map((ii, jj) => {
                                        var cellElement = ele[ii?.key];
                                        if (cellElement?.childRender) {
                                            return (
                                                <td key={index + "_" + jj} className={`py-3 px-2 text-xs`}>
                                                    {cellElement?.childRender}
                                                </td>
                                            )
                                        }

                                        return (
                                            <td key={index + "_" + jj} className={`py-3 px-2 break-words text-xs`}>
                                                {cellElement}
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })

                    })()}
                </tbody>
            </table>
        </div>
    )
}

export default DataTableV2;