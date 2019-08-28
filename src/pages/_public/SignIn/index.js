import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '~/store/modules/auth/actions';

import schema from './schema';
import logo from '~/assets/images/logo.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="Logo MeetApp" />

      <Form schema={schema} onSubmit={handleSubmit} noValidate>
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit">{loading ? 'Carregando...' : 'Entrar'}</button>

        <Link to="/forgotPassword">Alterar ou redefinir senha</Link>
        <Link to="/register">Criar conta grátis</Link>
      </Form>
    </>
  );
}
