import { Link } from 'react-router-dom';
import { useRef, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../modules/authThunks';
import { validatePassword } from '../../core/constants';
import { toast } from 'react-toastify';

const Registration = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const [registerForm, setRegisterForm] = useReducer(
    (prev, next) => {
      var newEvent = { ...prev, ...next };

      if (`${newEvent?.password}`.trim() && `${newEvent?.confirm_password}`.trim()) {
        if (newEvent?.password !== newEvent?.confirm_password) {
          newEvent.password_match = validatePassword(newEvent?.password) ?? "Password does not match";
        } else {
          newEvent.password_match = validatePassword(newEvent?.password);
        }
      }

      return newEvent;
    },
    {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      password_match: null,
    }
  )

  const handleInput = (e) => {
    const { name, value } = e.target;
    setRegisterForm({
      [name]: value
    })
  }

  const submitRegister = (e) => {
    e.preventDefault();
    if (registerForm.password_match !== null || !`${registerForm?.password}`.trim()) {
      toast.error(registerForm?.password_match ?? `Password is required`);
      return;
    }
    dispatch(registerUserThunk(registerForm))
  }

  return (
    <div className='inline-flex w-full justify-center'>
      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 ">
        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
          <div className='text-center'>
            <h2 className="mb-9 text-2xl text-black dark:text-white sm:text-title-xl2">
              REGISTER FOR <br /> AN ACCOUNT
            </h2>
          </div>

          <form ref={form} onSubmit={submitRegister}>
            <div className="mb-4">
              <label className="mb-2.5 block  text-black dark:text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  name='email'
                  value={registerForm?.email}
                  onChange={handleInput}
                  placeholder="Enter your email"
                  autoComplete="new-password"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="mb-2.5 block  text-black dark:text-white">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  name='username'
                  required
                  value={registerForm?.username}
                  onChange={handleInput}
                  placeholder="Enter your username"
                  autoComplete="new-password"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  name='password'
                  value={registerForm?.password}
                  onChange={handleInput}
                  autoComplete="new-password"
                  className={`w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:${registerForm.password_match ? 'border-primary' : ' border-meta-1'} focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:${registerForm.password_match ? 'border-primary' : ' border-meta-1'}`}
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="mb-2.5 block text-black dark:text-white">
                Confirm Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  name='confirm_password'
                  value={registerForm?.confirm_password}
                  onChange={handleInput}
                  autoComplete="new-password"
                  className={`w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:${registerForm.password_match ? 'border-primary' : ' border-meta-1'} focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:${registerForm.password_match ? 'border-primary' : ' border-meta-1'}`}
                />
                {registerForm.password_match && <small className='text-meta-1'>{registerForm?.password_match}</small>}
              </div>
            </div>

            <div className="mb-5 text-center">
              <input
                type="submit"
                value="Login"
                className="cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 px-20 py-3"
              />
            </div>

            <div className="mt-6 text-center">
              <p>
                Already have an account?{' '}
                <Link to="/login" className="text-primary underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
