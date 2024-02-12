import React, { useState } from "react"
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const DefaultLayout = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);


    // return (
    //     <div className="dark:bg-boxdark-2 dark:text-bodydark">
    //         {/* <!-- ===== Page Wrapper Start ===== --> */}
    //         <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    //         <div className="flex h-screen overflow-hidden">
    //             {/* <!-- ===== Sidebar Start ===== --> */}
    //             <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    //             {/* <!-- ===== Sidebar End ===== --> */}

    //             {/* <!-- ===== Content Area Start ===== --> */}
    //             <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">

    //                 <main>
    //                     <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
    //                         {children}
    //                     </div>
    //                 </main>
    //             </div>
    //         </div>
    //     </div>
    // )

    return (
        <React.Fragment>
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <div className="flex flex-row">
                <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                <main className="px-[25px] pt-[50px] w-[84%] h-[90vh] overflow-y-scroll overflow-x-hidden">
                    {/* <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10"> */}
                    {children}
                    {/* </div> */}
                </main>
            </div>
        </React.Fragment>
    )
}

export default DefaultLayout;