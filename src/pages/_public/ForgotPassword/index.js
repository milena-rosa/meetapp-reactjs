import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { forgotPasswordRequest } from '~/store/modules/auth/actions';

import schema from './schema';
import logo from '~/assets/images/logo.svg';

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email }) {
    dispatch(forgotPasswordRequest(email));
  }

  return (
    <>
      <img src={logo} alt="Logo MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit} noValidate>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />

        <button type="submit">
          {loading ? 'Carregando...' : 'Alterar senha'}
        </button>

        <Link to="/">Voltar</Link>
      </Form>
    </>
  );
}
