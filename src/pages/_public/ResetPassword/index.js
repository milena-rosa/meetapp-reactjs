import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { resetPasswordRequest } from '~/store/modules/auth/actions';

import schema from './schema';
import logo from '~/assets/images/logo.svg';

export default function ResetPassword() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ token, password, password_confirmation }) {
    dispatch(resetPasswordRequest(token, password, password_confirmation));
  }

  return (
    <>
      <img src={logo} alt="Logo MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit} noValidate>
        <Input
          name="token"
          type="text"
          placeholder="Código recebido por e-mail"
        />
        <Input name="password" type="password" placeholder="Nova senha" />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit">
          {loading ? 'Carregando...' : 'Alterar senha'}
        </button>

        <Link to="/">Voltar</Link>
      </Form>
    </>
  );
}
