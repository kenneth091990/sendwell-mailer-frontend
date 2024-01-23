import React from 'react'

/**
 * - `data` - use mapping to customize html inside cell table
 * ```json
 * {
 *   "childRender":  (<div></div>), // if you want to use react html instead of txt
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
const DataTable = ({ data, headerChildren, keys, removeDistinctCellBg }) => {


    return (
        <div className="flex w-full flex-col rounded-2xl px-6 pt-5 pb-7 bg-white shadow-2xl">
            {headerChildren}
            {/* Headers */}
            <div className="grid grid-cols-12 border-b-2 border-black/40">
                {(keys ?? []).map(ii => {
                    if (ii?.render) return ii?.render;

                    return (
                        <div className={`px-2.5 py-2 col-span-${ii?.col}`}>
                            <span className="font-normal text-black/30 uppercase xsm:text-base">
                                {ii?.key}
                            </span>
                        </div>
                    )
                })}
            </div>
            {(data ?? []).map((ele, index) => {

                return (
                    <div className={`grid grid-cols-12 ${index % 2 !== 0 ? "bg-black/10" : ""}`} >
                        {(keys ?? []).map(ii => {
                            var cellElement = ele[ii?.key];
                            if (cellElement?.childRender) {
                                return cellElement?.childRender;                                
                            }

                            return (
                                <div className={`px-2.5 py-2 col-span-${ii?.col}`}>
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