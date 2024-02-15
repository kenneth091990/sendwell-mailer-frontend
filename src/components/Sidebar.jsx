import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../images/logo/logo.svg';
import SidebarLinkGroup from './SidebarLinkGroup';

import NavWhite_Nodes from "./../images/nav/NavWhite_Nodes.png";
import Nav_Nodes from "./../images/nav/Nav_Nodes.png";

import NavWhite_Domains from "./../images/nav/NavWhite_Domains.png";
import Nav_Domains from "./../images/nav/Nav_Domains.png";

import NavWhite_Lists from "./../images/nav/NavWhite_Lists.png";
import Nav_Lists from "./../images/nav/Nav_Lists.png";

import Icon_CorralsWhite from "./../images/nav/Icon_CorralsWhite.png";
import Icon_CorralsBlue from "./../images/nav/Icon_CorralsBlue.png";

import NavWhite_Supression from "./../images/nav/NavWhite_Supression.png";
import Nav_Suppression from "./../images/nav/Nav_Suppression.png";

import NavWhite_Config from "./../images/nav/NavWhite_Config.png";
import Nav_Config from "./../images/nav/Nav_Config.png";

import NavWhite_Integrations from "./../images/nav/NavWhite_Integrations.png";
import Nav_Integrations from "./../images/nav/Nav_Integrations.png";

import NavWhite_Queues from "./../images/nav/NavWhite_Queues.png";
import Nav_Queues from "./../images/nav/Nav_Queues.png";


const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
    const location = useLocation();
    const { pathname } = location;

    const trigger = useRef(null);
    const sidebar = useRef(null);

    const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
    const [sidebarExpanded, setSidebarExpanded] = useState(
        storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
    );

    // close on click outside
    useEffect(() => {
        const clickHandler = ({ target }) => {
            if (!sidebar.current || !trigger.current) return;
            if (
                !sidebarOpen ||
                sidebar.current.contains(target) ||
                trigger.current.contains(target)
            )
                return;
            setSidebarOpen(false);
        };
        document.addEventListener('click', clickHandler);
        return () => document.removeEventListener('click', clickHandler);
    });

    // close if the esc key is pressed
    useEffect(() => {
        const keyHandler = ({ keyCode }) => {
            if (!sidebarOpen || keyCode !== 27) return;
            setSidebarOpen(false);
        };
        document.addEventListener('keydown', keyHandler);
        return () => document.removeEventListener('keydown', keyHandler);
    });

    useEffect(() => {
        localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
        if (sidebarExpanded) {
            document.querySelector('body')?.classList.add('sidebar-expanded');
        } else {
            document.querySelector('body')?.classList.remove('sidebar-expanded');
        }
    }, [sidebarExpanded]);

    return (
        <aside
            ref={sidebar}
            className={`absolute left-0 top-0 flex flex-col overflow-y-hidden bg-white duration-300 ease-linear 
            laptop:w-[30%] laptop:static laptop:translate-x-0  laptop:h-[90vh] desktop:h-[90vh]
            desktop:w-[16%] desktop:static desktop:translate-x-0 
            max-sm:z-999999 max-sm:h-screen 
            max-sm:w-full tablet:z-999999 
            tablet:h-screen tablet:w-full 
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            {/* <!-- SIDEBAR HEADER --> */}
            <div className="flex items-center justify-between max-sm:flex-row-reverse gap-2 px-6 py-5.5 desktop:py-6.5">
                <div className="hidden sm:block">
                    <form action="https://formbold.com/s/unique_form_id" method="POST">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Type to search..."
                                className="w-full bg-transparent pr-4 pl-9 focus:outline-none"
                            />
                            <button className="absolute top-1/2 left-0 -translate-y-1/2">
                                <svg
                                    className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                                        fill=""
                                    />
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                                        fill=""
                                    />
                                </svg>
                            </button>
                        </div>
                    </form>
                </div>

                <button
                    ref={trigger}
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                    aria-controls="sidebar"
                    aria-expanded={sidebarOpen}
                    className="block lg:hidden"
                >
                    <svg
                        className="fill-current"
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""
                        />
                    </svg>
                </button>
            </div>
            {/* <!-- SIDEBAR HEADER --> */}

            <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
                {/* <!-- Sidebar Menu --> */}
                <nav className="mt-5 py-4 px-4 lg:mt-9 lg:px-6">
                    {/* <!-- Menu Group --> */}
                    <div>


                        <ul className="mb-6 flex flex-col gap-1.5">
                            <li className='w-full'>
                                <NavLink
                                    to="/"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-blue duration-300 ease-in-out hover:bg-[#d8d8d8] hover:text-white dark:hover:bg-meta-4 ${pathname === '/' ? 'active-link' : ""}`}>
                                    <img src={pathname === '/' ? NavWhite_Nodes : Nav_Nodes} height={18} width={18} />
                                    Dashboard
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/domains"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-blue duration-300 ease-in-out hover:bg-[#d8d8d8] hover:text-white dark:hover:bg-meta-4 ${pathname.includes('domains') ? 'active-link' : ""}`}>
                                    <img src={pathname.includes('domains') ? NavWhite_Domains : Nav_Domains} height={18} width={18} />
                                    Domains and SES
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/lists"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-blue duration-300 ease-in-out hover:bg-[#d8d8d8] hover:text-white dark:hover:bg-meta-4 ${pathname.includes('lists') ?
                                        'active-link' : ""
                                        }`}>
                                    <img src={pathname.includes('lists') ? NavWhite_Lists : Nav_Lists} height={18} width={18} />
                                    Lists
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/corrals"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-blue duration-300 ease-in-out hover:bg-[#d8d8d8] hover:text-white dark:hover:bg-meta-4 ${pathname.includes('corrals') ?
                                        'active-link' : ""
                                        }`}>
                                    <img src={pathname.includes('corrals') ? Icon_CorralsWhite : Icon_CorralsBlue} height={18} width={18} />
                                    Corrals
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/suppresions"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-blue duration-300 ease-in-out hover:bg-[#d8d8d8] hover:text-white dark:hover:bg-meta-4 ${pathname.includes('suppresions') ?
                                        'active-link' : ""
                                        }`}
                                >
                                    <img src={pathname.includes('suppresions') ? NavWhite_Supression : Nav_Suppression} height={18} width={18} />
                                    Suppresions
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/settings"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-blue duration-300 ease-in-out hover:bg-[#d8d8d8] hover:text-white dark:hover:bg-meta-4 ${pathname.includes('settings') ?
                                        'active-link' : ''
                                        }`}
                                >
                                    <img src={pathname.includes('settings') ? NavWhite_Config : Nav_Config} height={18} width={18} />
                                    Settings
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/prompts"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-blue duration-300 ease-in-out hover:bg-[#d8d8d8] hover:text-white dark:hover:bg-meta-4 ${pathname.includes('prompts') ? 'active-link' : ""}`}>
                                    <img src={pathname.includes('prompts') ? NavWhite_Integrations : Nav_Integrations} height={18} width={18} />
                                    Prompts
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/queues"
                                    className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-blue duration-300 ease-in-out hover:bg-[#d8d8d8] hover:text-white dark:hover:bg-meta-4 ${pathname.includes('queues') ? 'active-link' : ""}`}
                                >
                                    <img src={pathname.includes('queues') ? NavWhite_Queues : Nav_Queues} height={18} width={18} />
                                    Campaign Wizard
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <!-- Sidebar Menu --> */}
            </div>
        </aside>
    );
};

export default Sidebar;
