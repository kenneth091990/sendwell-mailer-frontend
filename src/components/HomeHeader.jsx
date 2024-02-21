import { Link } from 'react-router-dom';
import sendwellLogo from "./../images/logo/sendwell-mailer-logo.png"

const HomeHeader = () => {
    return (
        <div className="header p-6">
            <div className="grid grid-cols-2 gap-4 w-full">
                <img src={sendwellLogo} />
                <div className=" inline-flex justify-end items-center">
                    <ul className='float-right'>
                        <li className="inline p-2">
                            <Link to="/login" className="font-thin tracking-tighter">
                                LOGIN
                            </Link>
                        </li>
                        <li className="inline p-2">
                            <Link to="/registration" className="font-thin tracking-tighter ">
                                REGISTRATION
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HomeHeader;
