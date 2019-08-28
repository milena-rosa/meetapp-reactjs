import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;

    strong {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    div {
      display: flex;
    }

    button {
      align-self: flex-end;
      align-content: center;
      align-items: center;
      display: flex;
      justify-content: center;

      height: 42px;

      color: #fff;
      font-size: 16px;
      font-weight: bold;

      transition: background 0.2s;

      svg {
        margin-right: 10px;
      }
    }

    #editButton {
      background: #4dbaf9;
      margin-right: 15px;
      width: 116px;

      &:hover {
        background: ${darken(0.05, '#4dbaf9')};
      }
    }

    #cancelButton {
      background: #d44059;
      width: 138px;

      &:hover {
        background: ${darken(0.05, '#d44059')};
      }
    }
  }

  main {
    img {
      border-radius: 4px;
      height: 300px;
      width: 940px;
    }

    p {
      color: #fff;
      line-height: 32px;
      margin-top: 25px;
    }
  }

  footer {
    display: flex;
    margin-top: 30px;

    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;

    div {
      align-self: flex-end;
      align-content: center;
      align-items: center;
      display: flex;
      justify-content: center;
      margin-right: 20px;
    }

    svg {
      margin-right: 10px;
    }
  }
`;
