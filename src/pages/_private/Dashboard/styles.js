import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100vh;
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    button {
      align-items: center;
      display: flex;
      justify-content: center;

      background: #f94d6a;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      height: 42px;
      transition: background 0.2s;
      width: 172px;

      &:hover {
        background: ${darken(0.06, '#f94d6a')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }

  ul {
    margin-top: 50px;
  }
`;

export const Meetup = styled.li`
  align-items: center;
  align-self: stretch;
  display: flex;
  height: 62px;
  justify-content: space-between;
  margin-bottom: 10px;
  padding: 0 20px;

  background: rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  color: #fff;

  strong {
    font-weight: bold;
    padding-left: 10px;
  }

  div {
    align-items: center;
    display: flex;
    justify-content: center;

    span {
      opacity: 0.6;
      padding-right: 30px;
      line-height: 24px;
    }

    button {
      background: none;
      border: 0;
      outline: 0;
      height: 24px;
      width: 24px;

      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

export const PageActions = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;

  color: #fff;
  font-size: 14px;

  button {
    background: none;
    color: #fff;

    border: 0;
    height: 30px;
    outline: 0;
    transition: opacity 0.25s ease-out;
    width: 30px;

    &:disabled {
      opacity: 0.3;
      cursor: not-allowed;
    }

    &:hover {
      color: ${props => (props.disabled ? '#fff' : darken(0.5, '#fff'))};
    }
  }
`;
