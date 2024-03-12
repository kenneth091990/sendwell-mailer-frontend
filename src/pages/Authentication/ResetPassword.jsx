import { Link } from 'react-router-dom';
import { useRef, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { resetPasswordThunk } from '../../modules/authentication/authThunks';
import useQueryParams from '../../hooks/useQueryParams';

const ResetPassword = () => {
  const query = useQueryParams();
  const dispatch = useDispatch();

  const [resetForm, setResetForm] = useReducer(
    (prev, next) => {
      var newEvent = { ...prev, ...next };

      if (`${newEvent?.password}`.trim() && `${newEvent?.confirm_password}`.trim()) {
        if (newEvent?.password !== newEvent?.confirm_password) {
          newEvent.password_match = false;
        } else {
          newEvent.password_match = true;
        }
      }

      return newEvent;
    },
    {

      password: "",
      confirm_password: "",
      password_match: true,
    }
  )

  const handleInput = (e) => {
    const { name, value } = e.target;
    setResetForm({
      [name]: value
    })
  }

  const submitResetForm = (e) => {
    e.preventDefault();
    if (!resetForm.password_match) return;
    if (!query.get("tk")) {
      alert("Invalid token");
      return;
    }

    dispatch(resetPasswordThunk({
      token: query.get("tk"),
      ...resetForm
    }))
  }


  return (
    <div className='inline-flex w-full justify-center'>
      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 ">
        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
          <div className='text-center'>
            <h2 className="mb-9 sm:text-2xl font-thin">
              ENTER YOUR NEW PASSWORD
            </h2>
            <p className='text-gray'>Enter your email and we'll send you instructions to reset the <br /> password associated with your account</p>
          </div>

          <form onSubmit={submitResetForm}>
            <div className="mb-4 mt-15">
              <label className=" text-gray tracking-tighter font-thin">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name='password'
                  value={resetForm?.password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  className={`tracking-tighter font-thin w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:${resetForm.password_match ? 'border-primary' : ' border-meta-1'} focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:${resetForm.password_match ? 'border-primary' : ' border-meta-1'}`}
                />
              </div>
            </div>
            <div className="mb-4 mt-15">
              <label className=" text-gray tracking-tighter font-thin">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  name='confirm_password'
                  value={resetForm?.confirm_password}
                  onChange={handleInput}
                  placeholder="Enter your password"
                  className={`tracking-tighter font-thin w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:${resetForm.password_match ? 'border-primary' : ' border-meta-1'} focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:${resetForm.password_match ? 'border-primary' : ' border-meta-1'}`}
                />
                {!resetForm.password_match && <small className='text-meta-1'>Password not match</small>}
              </div>
            </div>
            <div className="mb-5 text-center mt-15">
              <input
                type="submit"
                value="Reset Password"
                className="tracking-tighter font-thin cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 px-20 py-3"
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

export default ResetPassword;
