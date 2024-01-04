import { Link } from 'react-router-dom';

const Registration = () => {
  return (
    <div className='inline-flex w-full justify-center'>
          <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 ">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
             <div className='text-center'>
              <h2 className="mb-9 text-2xl text-black dark:text-white sm:text-title-xl2">
                  REGISTER FOR <br/> AN ACCOUNT
                </h2>
             </div>

              <form>
                <div className="mb-4">
                  <label className="mb-2.5 block  text-black dark:text-white">
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
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
                      placeholder="***********"
                      className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
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
                      placeholder="**********"
                      className="w-full rounded-lg border border-stroke bg-transparent py-3 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                
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
                    <Link to="login" className="text-primary underline">
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
