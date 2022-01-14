import styled from "styled-components";

export const Input = styled.input`
  width: 30%;
  height: 25px;
`;

export const Button = styled.button`
  width: 60px;
  height: 31px;
`;

export const Div = styled.div`
  & * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  width: 70%;
  margin: auto;
  border-radius: 8px;
  border: 1px solid grey;
  box-shadow: 0 0 0px 1px grey;
  padding: 8px;
  & div {
    border: 1px solid grey;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
    & .title {
      width: 60%;
    }
    & .staus {
      width: 10%;
    }
    & .edit {
      width: 10%;
    }
    & .delete {
      width: 10%;
    }
  }
`;
