import * as Yup from 'yup';

export default Yup.object().shape({
  email: Yup.string()
    .email('Por favor, informe um e-mail válido')
    .required('Por favor, digite seu e-mail'),
});
