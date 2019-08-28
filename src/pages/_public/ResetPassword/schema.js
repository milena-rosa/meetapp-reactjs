import * as Yup from 'yup';

export default Yup.object().shape({
  token: Yup.string().required(
    'Por favor, informe o código recebido por e-mail'
  ),
  password: Yup.string()
    .min(8, 'A senha deve ter, no mínimo, 8 caracteres')
    .required('Por favor, insira uma senha'),
  password_confirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'As senhas informadas são diferentes'
  ),
});
