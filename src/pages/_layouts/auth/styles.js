import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  background: linear-gradient(180deg, #22202c 0%, #402845 100%);
  height: 100vh;

  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 315px;
  text-align: center;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    input {
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      height: 50px;
      margin: 0 0 10px;
      padding: 14px 20px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    span {
      align-self: flex-start;
      color: #e5556e;
      font-size: 14px;
      font-weight: 500;
      margin: 0 0 10px;
    }

    button {
      background: #e5556e;
      color: #fff;
      font-weight: bold;
      height: 50px;
      margin-top: 5px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#E5556E')};
      }
    }

    a {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      font-weight: bold;
      margin-top: 20px;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;
