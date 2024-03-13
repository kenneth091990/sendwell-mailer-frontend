import { Link } from 'react-router-dom';
import { useRef, useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../modules/authentication/authThunks';
import { validatePassword } from '../../core/constants';
import { toast } from 'react-toastify';

const Registration = () => {
  const form = useRef();
  const dispatch = useDispatch();

  const [registerForm, setRegisterForm] = useReducer(
    (prev, next) => {
      var newEvent = { ...prev, ...next };
      if (`${newEvent?.password}`.trim()) {

        const passwordPattern = validatePassword(newEvent?.password);

        newEvent.password_has_one_lowercase = passwordPattern.password_has_one_lowercase;
        newEvent.password_has_one_uppercase = passwordPattern.password_has_one_uppercase;
        newEvent.password_has_one_number = passwordPattern.password_has_one_number;
        newEvent.password_has_one_special_character = passwordPattern.password_has_one_special_character;
        newEvent.password_has_8_minimum = passwordPattern.password_has_8_minimum;

        if (!passwordPattern.password_has_pattern_error && newEvent?.password !== newEvent?.confirm_password) {
          newEvent.password_match = "Password does not match";
        } else {
          newEvent.password_match = "Valid Password is required";
        }
        // if (newEvent?.password !== newEvent?.confirm_password) {
        //   newEvent.password_has_one_lowercase =  validatePassword(newEvent?.password).password_has_one_lowercase;

        //   // 
        // } else {
        // //  newEvent.password_match = validatePassword(newEvent?.password);
        //   newEvent.password_has_one_lowercase = validatePassword(newEvent?.password).password_has_one_lowercase;
        // }
      }

      return newEvent;
    },
    {
      email: "",
      username: "",
      password: "",
      confirm_password: "",
      password_match: null,
      password_has_one_lowercase: false,
      password_has_one_uppercase: false,
      password_has_one_number: false,
      password_has_one_special_character: false,
      password_has_8_minimum: false,
      password_has_pattern_error: false
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
    console.log(registerForm);

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
            <h2 className="mb-9 text-black sm:text-2xl font-thin">
              REGISTER FOR <br /> AN ACCOUNT
            </h2>
          </div>

          <form ref={form} onSubmit={submitRegister}>
            <div className="mb-4">
              <label className=" block  text-gray dark:text-white tracking-tighter font-thin">
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
                  className="tracking-tighter w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className=" block  text-gray dark:text-white tracking-tighter font-thin">
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
                  className="tracking-tighter font-thin w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className=" block text-gray dark:text-white tracking-tighter font-thin">
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
                  className={` tracking-tighter font-thin w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:${registerForm.password_match ? 'border-primary' : ' border-meta-1'} focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:${registerForm.password_match ? 'border-primary' : ' border-meta-1'}`}
                />
                <div class="grid grid-cols-2">

                  <div class="sm:col-span-2 md:col-span-1">
                    <ul className='list-disc list-inside text-xs tracking-tighter font-thin  text-gray'>
                      <li className={(registerForm.password ? (registerForm.password_has_one_lowercase ? 'text-success' : 'text-danger') : '')}>One lowercase character</li>
                      <li className={(registerForm.password ? (registerForm.password_has_one_uppercase ? 'text-success' : 'text-danger') : '')}>One uppercase character</li>
                      <li className={(registerForm.password ? (registerForm.password_has_one_number ? 'text-success' : 'text-danger') : '')}>One number</li>
                    </ul>
                  </div>
                  <div class="sm:col-span-2 md:col-span-1">
                    <ul className='list-disc list-inside text-xs tracking-tighter font-thin  text-gray'>
                      <li className={(registerForm.password ? (registerForm.password_has_one_special_character ? 'text-success' : 'text-danger') : '')}>One special character</li>
                      <li className={(registerForm.password ? (registerForm.password_has_8_minimum ? 'text-success' : 'text-danger') : '')}>8 character minimum</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* {(registerForm.password_match && registerForm.password_match !== "Password does not match") && <small className='text-meta-1'>{registerForm?.password_match}</small>} */}
            </div>

            <div className="mb-6">
              <label className=" block text-gray dark:text-white tracking-tighter font-thin">
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
                  className={`tracking-tighter font-thin w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:${registerForm.password_match ? 'border-primary' : ' border-meta-1'} focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:${registerForm.password_match ? 'border-primary' : ' border-meta-1'}`}
                />
                {(registerForm.password_match && registerForm.password_match === "Password does not match") && <small className='text-meta-1'>{registerForm?.password_match}</small>}
              </div>
            </div>

            <div className="mb-5 text-center">
              <input
                type="submit"
                value="Register Account"
                className="cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90 px-20 py-3 tracking-tighter font-thin"
              />
            </div>

            <div className="mt-6 text-center text-gray tracking-tighter font-thin">
              <p className="tracking-tighter font-thin">
                Already have an account?{' '}

              </p>

            </div>
            <div className="mt-6 text-center">

              <Link to="/login" className="text-primary underline pt-6 tracking-tighter font-thin">
                Login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
