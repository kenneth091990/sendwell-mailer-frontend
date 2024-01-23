import React, { useEffect, useState } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import DefaultLayout from './layout/DefaultLayout';
import HomePageLayout from './layout/HomePageLayout';

import Dashboard from './pages/dashboards/Dashboard';
import Nodes from './pages/dashboards/Nodes';
import Lists from './pages/dashboards/Lists';
import Suppresions from './pages/dashboards/Suppresions';
import Loader from './common/Loader';
import ErrorPage from './pages/ErrorPage';
import AnalyticsDashboard from './pages/dashboards/AnalyticsDashboard';
import SignIn from './pages/Authentication/SignIn';
import Registration from './pages/Authentication/Registration';
import ResetPassword from './pages/Authentication/ResetPassword';
import ConfirmUser from './pages/Authentication/ConfirmUser';
import ForgotPassword from './pages/Authentication/ForgotPassword';
import { useSelector, useDispatch } from 'react-redux';
import { AUTH_EVENTS, getAuthState } from './modules/authSlice';
import { toast } from 'react-toastify';
import useToast from './hooks/useToast';
import { getCurrentUserThunk } from './modules/authThunks';
import { useAuth } from './providers/AuthProvider';


export default function App() {
  const [user, updateAuth] = useAuth();
  const [toastId, setToastId] = useToast();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const { status, message, event, data } = useSelector(getAuthState);

  useEffect(() => {

    if (status === "initial") {
      dispatch(getCurrentUserThunk());
    }

    if (event === AUTH_EVENTS.currentUser) {
      if (status === "error") {
        setLoading(false)
        updateAuth(null);
      }

      if (status === "success") {
        setLoading(false)
        updateAuth(data);
      }
    }

    if (event === AUTH_EVENTS.login) {
      if (status === "loading") {
        setLoading(true)
        setToastId(toast.loading("Please wait logging your account", {
          isLoading: true,
        }))
      }

      if (status === "error") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "error"
        })
      }

      if (status === "success") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "success"
        })
        updateAuth(data);
      }
    }


    if (event === AUTH_EVENTS.register) {
      if (status === "loading") {
        setLoading(true)
        setToastId(toast.loading("Please wait registering your account", {
          isLoading: true,
        }))
      }

      if (status === "error") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "error"
        })
      }

      if (status === "success") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "success"
        })
      }
    }

    if (event === AUTH_EVENTS.forgotPassword) {
      if (status === "loading") {
        setLoading(true)
        setToastId(toast.loading("Please wait checking your account", {
          isLoading: true,
        }))
      }

      if (status === "error") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "error"
        })
      }

      if (status === "success") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "success"
        })
      }
    }

    if (event === AUTH_EVENTS.resetPassword) {
      if (status === "loading") {
        setLoading(true)
        setToastId(toast.loading("Please wait restting your account", {
          isLoading: true,
        }))
      }

      if (status === "error") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "error"
        })
      }

      if (status === "success") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "success"
        })
      }
    }

    if (event === AUTH_EVENTS.confirmUser) {
      if (status === "loading") {
        setLoading(true)
        setToastId(toast.loading("Please wait confirming your account", {
          isLoading: true,
        }))
      }

      if (status === "error") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "error"
        })
      }

      if (status === "success") {
        setLoading(false)
        toast.update(toastId, {
          isLoading: false,
          autoClose: true,
          render: message,
          type: "success"
        })
        updateAuth(data);
      }
    }


  }, [status, event])

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 1000);
  // }, []);

  return (
    <BrowserRouter>
      {loading ? (<Loader />) : (
        <Switch>
          <Route exact path={'/'} render={(props) => {
            // if (!user) {
            //   return (
            //     <Redirect to={'/login'} />
            //   )
            // }

            return (
              <DefaultLayout>
                <Dashboard />
              </DefaultLayout>
            )
          }} />

          <Route exact path={'/lists'} render={(props) => {
            // if (!user) {
            //   return (
            //     <Redirect to={'/login'} />
            //   )
            // }

            return (
              <DefaultLayout>
                <Lists />
              </DefaultLayout>
            )
          }} />

          <Route exact path={'/nodes'} render={(props) => {
            // if (!user) {
            //   return (
            //     <Redirect to={'/login'} />
            //   )
            // }

            return (
              <DefaultLayout>
                <Nodes />
              </DefaultLayout>
            )
          }} />

          <Route exact path={'/suppresions'} render={(props) => {
            // if (!user) {
            //   return (
            //     <Redirect to={'/login'} />
            //   )
            // }

            return (
              <DefaultLayout>
                <Suppresions />
              </DefaultLayout>
            )
          }} />


          <Route exact path={'/analytics'} render={(props) => {
            if (!user) {
              return (
                <Redirect to={'/login'} />
              )
            }
            return (
              <DefaultLayout >
                <AnalyticsDashboard />
              </DefaultLayout>
            )
          }} />




          <Route exact path={'/login'} render={(props) => {
            if (user) {
              return (
                <Redirect to={'/'} />
              )
            }

            return (
              <HomePageLayout {...props}>
                <SignIn {...props} />
              </HomePageLayout>
            )
          }} />

          <Route exact path={'/registration'} render={(props) => {
            if (user) {
              return (
                <Redirect to={'/'} />
              )
            }

            return (
              <HomePageLayout {...props}>
                <Registration {...props} />
              </HomePageLayout>
            )
          }} />

          <Route exact path={'/forgot_password'} render={(props) => {
            if (user) {
              return (
                <Redirect to={'/'} />
              )
            }

            return (
              <HomePageLayout {...props}>
                <ForgotPassword {...props} />
              </HomePageLayout>
            )
          }} />

          <Route exact path={'/confirm-user'} render={(props) => {
            if (user) {
              return (
                <Redirect to={'/'} />
              )
            }

            return (
              <HomePageLayout {...props}>
                <ConfirmUser {...props} />
              </HomePageLayout>
            )
          }} />

          <Route exact path={'/reset-password'} render={(props) => {
            if (user) {
              return (
                <Redirect to={'/'} />
              )
            }

            return (
              <HomePageLayout {...props}>
                <ResetPassword {...props} />
              </HomePageLayout>
            )
          }} />

          {/* Error Page 404 */}
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      )}

    </BrowserRouter>
  )
}