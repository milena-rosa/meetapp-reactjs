import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import {
  signInSuccess,
  signFailure,
  signUpSuccess,
  resetPasswordFailure,
  resetPasswordSuccess,
} from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    // POST /sessions JSON: { email, password }
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    // save jwt token in the header so the routes that need it can access
    api.defaults.headers.Authorization = `Bearer ${token.token}`;

    yield put(signInSuccess(token, user));

    // redirect to the dashboard
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação. Por favor, verifique seus dados.');
    yield put(signFailure(err));
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, password_confirmation } = payload;

    // POST /users JSON: { name, email, password, password_confirmation }
    yield call(api.post, 'users', {
      name,
      email,
      password,
      password_confirmation,
    });

    yield put(signUpSuccess());

    // redirect to the signin page
    history.push('/');
  } catch (error) {
    console.tron.log('sdfds', error);
    toast.error('Falha no cadastro. Por favor, verifique seus dados.');
    yield put(signFailure(error));
  }
}

export function signOut() {
  history.push('/');
}

export function* forgotPassword({ payload }) {
  const { email } = payload;

  yield call(api.post, 'passwords', {
    email,
  });

  toast.success(
    'Um e-mail lhe foi enviado com as informações para a recuperação da senha.'
  );
  history.push('/resetPassword');
}

export function* resetPassword({ payload }) {
  try {
    const { token, password, password_confirmation } = payload;

    yield call(api.put, 'passwords', {
      token,
      password,
      password_confirmation,
    });

    toast.success('Sua senha foi alterada com sucesso!');
    yield put(resetPasswordSuccess());

    history.push('/');
  } catch (err) {
    toast.error(
      'Algo deu errado... Por favor, confira as informações fornecidas.'
    );
    yield put(resetPasswordFailure());
  }
}

// called when the action 'persist/REHYDRATE' is triggered
// save jwt token in the header so the routes that need it can access
export function setToken({ payload }) {
  if (!payload) {
    return;
  }

  const { token } = payload.auth;
  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token.token}`;
  }
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/FORGOT_PASSWORD_REQUEST', forgotPassword),
  takeLatest('@auth/RESET_PASSWORD_REQUEST', resetPassword),
  takeLatest('@auth/SIGN_OUT', signOut),
  takeLatest('persist/REHYDRATE', setToken),
]);
