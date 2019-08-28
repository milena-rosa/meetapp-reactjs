import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    outline: 0;
    padding: 0;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 18px 'Montserrat', 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    border: 0;
    border-radius: 4px;
    cursor: pointer;
  }

  input {
    border: 0;
    border-radius: 4px;
  }

  .toast_body {
    font: 16px 'Montserrat', 'Roboto', sans-serif;
  }
`;
