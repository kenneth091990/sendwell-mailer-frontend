import React, { useEffect, useState } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DefaultLayout from './layout/DefaultLayout';
import HomePageLayout from './layout/HomePageLayout';

import Dashboard from './pages/dashboards/Dashboard';
import Loader from './common/Loader';
import ErrorPage from './pages/ErrorPage';
import AnalyticsDashboard from './pages/dashboards/AnalyticsDashboard';
import SignIn from './pages/Authentication/SignIn';
import Registration from './pages/Authentication/Registration';
import ResetPassword from './pages/Authentication/ResetPassword';


export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (<Loader />) : (
        <Switch>
          <Route exact path={'/'}>
            <DefaultLayout>
              <Dashboard />
            </DefaultLayout>
          </Route>

          <Route exact path={'/analytics'}>
            <DefaultLayout>
              <AnalyticsDashboard />
            </DefaultLayout>
          </Route>
          <Route exact path={'/login'}>
            <HomePageLayout>
              <SignIn />
            </HomePageLayout>
          </Route>
          <Route exact path={'/registration'}>
            <HomePageLayout>
              <Registration />
            </HomePageLayout>
          </Route>
          <Route exact path={'/reset_password'}>
            <HomePageLayout>
              <ResetPassword />
            </HomePageLayout>
          </Route>
          <Route exact path={'/recover_password'}>
            <HomePageLayout>
              <ResetPassword />
            </HomePageLayout>
          </Route>

          {/* Error Page 404 */}
          <Route path="*">
            <ErrorPage />
          </Route>
        </Switch>
      )}

    </BrowserRouter>
  )
}