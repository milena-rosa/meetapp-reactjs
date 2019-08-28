import * as Yup from 'yup';

export default Yup.object().shape({
  name: Yup.string()
    .min(3)
    .required('Por favor, informe seu nome completo'),
  email: Yup.string()
    .email('Por favor, informe um e-mail válido')
    .required('Por favor, digite seu e-mail'),
  password: Yup.string()
    .min(8, 'A senha deve ter, no mínimo, 8 caracteres')
    .required('Por favor, insira uma senha'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'As senhas informadas são diferentes'
  ),
});
