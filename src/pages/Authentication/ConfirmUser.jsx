import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import useQueryParams from '../../hooks/useQueryParams';
import { confirmUserThunk } from '../../modules/authThunks';

const ConfirmUser = () => {
    const query = useQueryParams();
    const dispatch = useDispatch();
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(confirmUserThunk({
            token: query.get("tk")
        }))
    }

    return (
        <div className='inline-flex w-full justify-center'>
            <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 ">
                <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
                    <div className='text-center'>
                        <h2 className="mb-9 text-2xl text-black dark:text-white sm:text-title-xl2">
                            {"Confirm User Account".toUpperCase()}
                        </h2>
                        <p>
                            You're one click away from getting started, please confirm your account.
                            <br />
                            Please click to confirm your account. Requests expires within 5hrs
                        </p>
                    </div>

                    <form onSubmit={submitForm}>
                        <div className="mb-5 text-center mt-15">
                            <input
                                type="submit"
                                value="Confirm Account"
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

export default ConfirmUser;
