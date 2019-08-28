import styled from 'styled-components';

export const Container = styled.div`
  label {
    cursor: pointer;
    transform: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  background: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  color: rgba(255, 255, 255, 0.3);
  font-size: 20px;
  font-weight: bold;
  height: 300px;
  margin-bottom: 20px;
  width: 940px;

  div {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  img {
    background: #eee;
    border-radius: 4px;
    height: 300px;
    width: 940px;
  }

  input {
    display: none;
  }
`;
