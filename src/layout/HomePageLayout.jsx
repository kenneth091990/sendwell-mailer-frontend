import { useState } from "react";
import { Link } from 'react-router-dom';
import HomeHeader from "../components/HomeHeader";

const HomePageLayout = ({ children }) => {

    return (
        <div className="dark:bg-boxdark-2 dark:text-bodydark">

            <main>
                <HomeHeader></HomeHeader>
                <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10 ">
                    {children}
                </div>
            </main>

        </div>
    )
}

export default HomePageLayout;