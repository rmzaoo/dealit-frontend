import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const ChatContainer = styled.div`
  background-color: white;
  display: none;
  flex-direction: column;
  position: fixed;
  padding: 10px;
  width: 400px;
  height: 38%;
  z-index: 1000;
  top: 48%;
  left: 70%;
  border-radius: 5px;
  scale: ${(props: Props) => (props.isOpen ? 1 : 0)};
`;
export const HistDiv = styled.div`
  background-color: blue;
  width: 100%;
  height: 80%;
  border-radius: 5px;
  overflow: scroll;
`;
export const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 18%;
  border-radius: 5px;
  margin-top: 10px;
`;

export const ChatInput = styled.input`
  background-color: red;
  width: 88%;
  height: 90%;
  border-radius: 5px;
  padding: 3px;
  border: 0px;
`;

export const SubmitButton = styled.button`
  width: 10%;
  height: 100%;
  color: #fff;
  background-color: #10a37f;
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
  font-family: "ColfaxAI", Helvetica, sans-serif;
`;

export const UserText = styled.p`
  margin: 4px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: black;
  background-color: rgb(173, 232, 228);
  border-radius: 4px;
`;

export const AIText = styled.p`
  margin: 4px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  color: black;
  background-color: rgb(242, 108, 96);
  border-radius: 4px;
`;
