import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';

import { signUpRequest } from '~/store/modules/auth/actions';

import schema from './schema';

import logo from '~/assets/images/logo.svg';

export default function SignUp() {
  const dispatch = useDispatch();

  function handleSubmit({ name, email, password, password_confirmation }) {
    dispatch(signUpRequest(name, email, password, password_confirmation));
  }

  return (
    <>
      <img src={logo} alt="Logo MeetApp" />

      <Form onSubmit={handleSubmit} schema={schema} noValidate>
        <Input name="name" type="text" placeholder="Nome completo" />
        <Input name="email" type="email" placeholder="Digite seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho login</Link>
      </Form>
    </>
  );
}
