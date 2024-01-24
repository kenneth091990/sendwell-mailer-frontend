import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

/**
 * - `data` - use mapping to customize html inside cell table
 * ```json
 * {
 *   "[key].childRender":  (<div></div>), // if you want to use react html instead of txt
 *    "mobileCellView" (<div></div>)
 * }
 * ```
 * - `keys` accepts string of array
 * 
 * ```json
 * {
 *    "labelrender": (<div></div>), // if you want to use react html instead of txt
 *    "col": 1, // accepts from 1-12
 *    "key": "key_element"  // should match on list of keys indicated
 * }
 * ```
 */
const DataTable = ({ data, headerChildren, hideCellOnMobile, keys, removeDistinctCellBg, hideHeaderOnMobile }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            if (!window.matchMedia("(min-width: 640px)").matches) {
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

    return (
        <div className="flex w-full flex-col rounded-2xl px-6 max-sm:px-0 pt-5 pb-7 bg-white  shadow-2xl max-sm:shadow-none">
            {headerChildren}
            {/* Headers */}
            <div className={`grid grid-cols-12 border-b-2 border-black/40 ${hideHeaderOnMobile ? "max-sm:hidden" : ""}`}>
                {(keys ?? []).map((ii, index) => {
                    if (ii?.render) return ii?.render;

                    return (
                        <div key={index} className={`px-2.5 py-2 col-span-${ii?.col}`}>
                            <span className="font-normal text-black/30 text-sm uppercase">
                                {ii?.key}
                            </span>
                        </div>
                    )
                })}
            </div>
            {(data ?? []).map((ele, index) => {

                if (isMobile) {
                    if (!ele?.mobileCellView) {
                        return <div className="text-center text-black">
                            Please add a `mobileCellView`
                        </div>
                    }
                    // The code inside this block will run if the viewport width is less than 640px
                    // This is where you can add your logic to hide something on mobile
                    return <div key={index} className={`w-full py-4 px-4 rounded-md ${index % 2 !== 0 ? "bg-black/10" : ""} `}>
                        {ele?.mobileCellView}
                    </div>
                }

                return (
                    <div key={index} className={`grid grid-cols-12 ${index % 2 !== 0 ? "bg-black/10" : ""} ${hideCellOnMobile ? "max-sm:hidden" : ""}`} >
                        {(keys ?? []).map(ii => {
                            var cellElement = ele[ii?.key];
                            if (cellElement?.childRender) {
                                return cellElement?.childRender;
                            }

                            return (
                                <div className={`px-2.5 py-2 col-span-${ii?.col} text-xs`}>
                                    {cellElement}
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    )
}

export default DataTable;