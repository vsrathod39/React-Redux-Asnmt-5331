import styled from "styled-components";

export const Div = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  border: 2px solid grey;
  width: 65%;
  margin: auto;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  & ul {
    width: 90%;
    margin: auto;
    gap: 10px;
    display: flex;
    flex-direction: column;
    list-style-type: none;
    & li {
      width: 100%;
      border: 1px solid grey;
      display: flex;

      & .title {
        width: 70%;
      }
      & .status {
        width: 10%;
      }
      & .state {
        width: 10%;
      }
    }
  }
`;
