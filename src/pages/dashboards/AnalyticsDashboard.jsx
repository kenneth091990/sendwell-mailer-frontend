import React from 'react';
import DatePicker from '../../components/DatePicker';
import ChartFour from '../../components/ChartFour';


const AnalyticsDashboard = () => {

    return (
        <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
                {/* Chart Four start  */}
                <div className="col-span-12 flex flex-wrap items-center justify-between gap-3">
                    <div className="relative">
                        <DatePicker />
                    </div>
                    <div className="relative z-20 inline-block rounded bg-white shadow-card-2 dark:bg-boxdark">
                        <select name="" id=""
                            className="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-2 pl-4 pr-9 text-sm outline-none dark:border-strokedark">
                            <option value="">Yearly</option>
                            <option value="">Monthly</option>
                        </select>
                        <span className="absolute top-1/2 right-3 z-10 -translate-y-1/2">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                    d="M3.96967 6.21967C4.26256 5.92678 4.73744 5.92678 5.03033 6.21967L9 10.1893L12.9697 6.21967C13.2626 5.92678 13.7374 5.92678 14.0303 6.21967C14.3232 6.51256 14.3232 6.98744 14.0303 7.28033L9.53033 11.7803C9.23744 12.0732 8.76256 12.0732 8.46967 11.7803L3.96967 7.28033C3.67678 6.98744 3.67678 6.51256 3.96967 6.21967Z"
                                    fill="#64748B" />
                            </svg>
                        </span>
                    </div>
                </div>
                <ChartFour />
            </div>
        </div>
    );
}

export default AnalyticsDashboard;