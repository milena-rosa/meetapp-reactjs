import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/_public/SignIn';
import SignUp from '~/pages/_public/SignUp';
import ForgotPassword from '~/pages/_public/ForgotPassword';
import ResetPassword from '~/pages/_public/ResetPassword';

import Dashboard from '~/pages/_private/Dashboard';
import MeetupForm from '~/pages/_private/MeetupForm';
import MeetupInfo from '~/pages/_private/MeetupInfo';
import Profile from '~/pages/_private/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />
      <Route path="/forgotPassword" component={ForgotPassword} />
      <Route path="/resetPassword" component={ResetPassword} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/meetupForm" component={MeetupForm} isPrivate />
      <Route path="/meetupInfo" component={MeetupInfo} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
