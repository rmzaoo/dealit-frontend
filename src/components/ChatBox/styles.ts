import styled from "styled-components";

interface Props {
  isOpen: boolean;
}

export const ChatContainer = styled.div`
  background-color: rgba(21, 90, 110, 0.6);
  display: flex;
  flex-direction: column;
  position: fixed;
  padding: 10px;
  width: 400px;
  height: 38%;
  z-index: 10;
  top: 48%;
  left: 68%;
  border-radius: 5px;
  scale: ${(props: Props) => (props.isOpen ? 1 : 0)};
  -webkit-transform: scale(${(props: Props) => (props.isOpen ? 1.0 : 0.0)});
`;

export const ChatTitle = styled.p`
  width: 100%;
  text-align: center;
  color: whitesmoke;
`;

export const HistDiv = styled.div`
  background-color: rgba(84, 128, 168, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 80%;
  border-radius: 5px;
  overflow-y: scroll;
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
  background-color: whitesmoke;
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
  background-color: rgb(32,90,90);
  border: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  font-size: 16px;
  line-height: 24px;
`;

export const UserText = styled.p`
  margin: 4px;
  padding: 4px;
  display: flex;
  justify-content: center;
  margin-left: 20%;
  align-items: center;
  text-align: flex-start;
  align-self: flex-end;
  width: 80%;
  color: black;
  background-color: rgba(177, 216, 246, 1);
  border-radius: 5px;
`;

export const AIText = styled.p`
  margin: 4px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: flex-start;
  width: 80%;
  color: black;
  background-color: whitesmoke;//rgba(189, 220, 240, 1);
  border-radius: 5px;
`;


