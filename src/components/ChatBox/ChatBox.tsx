import { JSXElementConstructor, useState } from "react";
import {
  ChatContainer,
  HistDiv,
  ChatInput,
  InputDiv,
  SubmitButton,
  UserText,
  AIText
} from "./styles";

interface Props {
  isOpen: boolean;
}

const ChatBox = ({ isOpen }: Props) => {
  const [input, setInput] = useState("");
  const [history] = useState<any>([]);

  async function onClick() {
    history.push(<UserText>{input}</UserText>);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: input }),
    });
    const data = await response.json();
    history.push(<AIText>{data.result}</AIText>);
    setInput("");
  }

  return (
    <>
      <ChatContainer isOpen={isOpen}>
        <HistDiv />
        <InputDiv>
          <ChatInput
            type="text"
            name="question"
            placeholder="Enter any question!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <SubmitButton type="button" />
        </InputDiv>
      </ChatContainer>
    </>
  );
};

export default ChatBox;
