import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;

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

    textarea {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      color: #fff;
      height: 200px;
      margin: 0 0 10px;
      padding: 14px 20px;
      resize: none;

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
      }
    }

    > button {
      align-self: flex-end;
      align-content: center;
      align-items: center;
      display: flex;
      justify-content: center;

      background: #f94d6a;
      color: #fff;
      font-size: 16px;
      height: 42px;
      margin-top: 10px;
      transition: background 0.2s;
      width: 180px;

      &:hover {
        background: ${darken(0.05, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;
