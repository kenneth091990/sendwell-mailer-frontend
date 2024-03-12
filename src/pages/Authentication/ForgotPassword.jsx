import { Link } from 'react-router-dom';
import { useRef, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { forgotPasswordThunk } from '../../modules/authentication/authThunks';
import { validateEmail } from '../../core/constants';
import { toast } from 'react-toastify';

const ForgotPassword = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");

    const submitForm = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            toast.error("Invalid email address");
            return;
        }
        dispatch(forgotPasswordThunk({
            emailOrUsername: email
        }))
    }

    return (
        <div className='inline-flex w-full justify-center'>
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 ">
                <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                    <div className='text-center'>
                        <h2 className="mb-9 sm:text-2xl font-thin">
                            RESET YOUR PASSWORD
                        </h2>
                        <p className='text-gray'>Enter your email and we'll send you instructions to reset the <br /> password associated with your account</p>
                    </div>

                    <form onSubmit={submitForm}>
                        <div className="mb-4 mt-15">
                            <label className="tracking-tighter font-thin text-gray ">
                                Email
                            </label>
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    className="tracking-tighter font-thin w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                                />


                            </div>
                        </div>
                        <div className="mb-5 text-center mt-15">
                            <input
                                type="submit"
                                value="Reset Password"
                                className="cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 px-20 py-3"
                            />
                        </div>



                        <div className="mt-6 text-center">
                            <p>
                                <Link to="/login" className="text-primary underline">
                                    Return to Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
