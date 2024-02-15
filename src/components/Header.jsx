import { Link } from 'react-router-dom';
import Logo from '../images/logo/logo-icon.svg';
import DarkModeSwitcher from './DarkModeSwitcher';
import DropdownMessage from './DropdownMessage';
import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import MenuBurgerIcon from './../images/nav/Mobile hamburger.png';
import sendwellLogo from "./../images/logo/sendwell-mailer-logo.png"

const Header = ({ sidebarOpen,
    setSidebarOpen, }) => {
    return (
        <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none header">
            <div className="flex flex-grow items-center justify-between py-4 px-4 shadow-2 md:px-6 2xl:px-11">
                <div className="hidden lg:block">
                    <img src={sendwellLogo} />
                </div>
                <div className="flex items-right gap-3 2xsm:gap-7">
                    <div className="grid grid-cols-1 gap-4 w-full">
                        <div className=" inline-flex justify-end items-center">
                            <DropdownUser />
                        </div>
                    </div>
                </div>
                <div className="block lg:hidden">
                    <img src={sendwellLogo} />
                </div>
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    {/* <!-- Hamburger Toggle BTN --> */}
                    <button
                        aria-controls="sidebar"
                        onClick={(e) => {
                            e.stopPropagation();
                            setSidebarOpen(!sidebarOpen);
                        }}
                        className="z-99999 block rounded-sm p-1.5 lg:hidden"
                    >
                        <span className="relative block h-5.5 w-5.5 cursor-pointer">
                            <span className="du-block absolute right-0 h-full w-full">
                                <img src={MenuBurgerIcon} alt="" />
                            </span>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
