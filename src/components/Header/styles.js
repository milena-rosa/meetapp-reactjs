import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 0 30px;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  height: 92px;
  margin: 0 auto;
  max-width: 940px;
  min-width: 350px;

  nav {
    align-items: center;
    display: flex;

    img {
      height: 32px;
      width: 31px;
    }
  }

  aside {
    align-items: center;
    display: flex;

    button {
      background: #d44059;
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      height: 42px;
      width: 71px;

      &:hover {
        background: ${darken(0.05, '#d44059')};
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  margin: 0 20px;
  padding-left: 20px;

  div {
    margin-right: 10px;
    text-align: right;

    strong {
      color: #fff;
      font-size: 14px;
      font-weight: bold;
      line-height: 17px;

      display: block;
    }

    a {
      color: #999;
      display: block;
      font-size: 14px;
      line-height: 17px;
      margin-top: 4px;
      transform: opacity 0.2s;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  img {
    background: #eee;
    border: 1px solid #eee;
    border-radius: 50%;
    height: 38px;
    width: 38px;
  }
`;
