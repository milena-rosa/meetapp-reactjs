import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px auto;
  max-width: 940px;
  min-width: 350px;

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

    hr {
      background: rgba(255, 255, 255, 0.1);
      border: 0;
      height: 1px;
      margin: 10px 0 20px;
    }

    span {
      align-self: flex-start;
      color: #e5556e;
      font-size: 14px;
      font-weight: 500;
      margin: 0 0 10px;
    }

    button {
      align-self: flex-end;
      align-content: center;
      align-items: center;
      display: flex;
      justify-content: center;

      background: #f94d6a;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      height: 42px;
      margin-top: 10px;
      transition: background 0.2s;
      width: 162px;

      &:hover {
        background: ${darken(0.06, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
