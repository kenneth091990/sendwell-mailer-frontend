import { Link } from 'react-router-dom';

const HomeHeader = () => {
    return (
        <div className="header p-6">
            <div className="grid grid-cols-2 gap-4 w-full">
                <img  src="/src/images/logo/sendwell-mailer-logo.png" />
                <div className=" inline-flex justify-end items-center">
                    <ul className='float-right'>
                        <li className="inline p-2">
                            <Link to="/login" className="font-semibold ">
                                LOGIN
                            </Link>
                        </li>
                        <li  className="inline p-2">
                            <Link to="/register" className="font-semibold ">
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
