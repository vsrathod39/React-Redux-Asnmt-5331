import styled from "styled-components";

export const Div = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid grey;
  border-radius: 8px;
  padding: 15px;
  width: 30%;
  display: grid;
  margin: auto;
  align-items: center;
  justify-content: center;
  grid-template-columns: 80% 15%;
  grid-template-areas:
    "e f"
    "a b"
    "c c"
    "g g";
  gap: 10px;
  & .title {
    grid-area: e;
    text-align: center;
    width: 100%;
  }
  & .close {
    cursor: pointer;
  }
  & textarea {
    grid-area: a;
    outline: none;
    border: 1px solid grey;
  }
  & select {
    grid-area: b;
    height: 60%;
    border: 1px solid grey;
  }
  & .updated-btn {
    grid-area: c;
    height: 40px;
    cursor: pointer;
  }
  & .update-state {
    grid-area: g;
  }
`;
