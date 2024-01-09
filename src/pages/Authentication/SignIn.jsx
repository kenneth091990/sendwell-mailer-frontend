import { useRef } from 'react';
import { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginThunk } from '../../modules/authThunks';

const SignIn = () => {
  const form = useRef();
  const dispatch = useDispatch();
  const [loginForm, setLoginForm] = useReducer(
    (prev, next) => ({ ...prev, ...next }),
    {
      emailOrUsername: "",
      password: ""
    }
  )

  const handleInput = (e) => {
    const { name, value } = e.target;
    setLoginForm({
      [name]: value
    })
  }

  const submitLogin = (e) => {
    e.preventDefault();
    dispatch(loginThunk(loginForm))
  }

  return (
    <div className='inline-flex w-full justify-center'>
      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 ">
        <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
          <div className='text-center'>
            <h2 className="mb-9 text-2xl text-black dark:text-white sm:text-title-xl2">
              LOGIN
            </h2>
          </div>
          <form ref={form} onSubmit={submitLogin}>
            <div className="mb-4">
              <label className="mb-2.5 block  text-black dark:text-white">
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  name='emailOrUsername'
                  required
                  autoComplete="new-password"
                  value={loginForm?.emailOrUsername}
                  onChange={handleInput}
                  placeholder="Enter your email or username"
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
                  name='password'
                  required
                  autoComplete="new-password"
                  value={loginForm?.password}
                  onChange={handleInput}
                  placeholder="6+ Characters, 1 Capital letter"
                  className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>
            <div className="mt-15 text-center">
              <p>
                <Link to="/forgot_password" className="text-primary">
                  Forgot Password?
                </Link>
              </p>
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
                Don’t have any account?{' '}
                <Link to="/registration" className="text-primary underline">
                  Register for an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
