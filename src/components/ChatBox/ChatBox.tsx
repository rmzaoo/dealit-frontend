import { useState } from "react";
import {
  ChatContainer,
  HistDiv,
  ChatInput,
  InputDiv,
  SubmitButton,
  UserText,
  AIText,
  ChatTitle,
  AIButton,
} from "./styles";
import { fetchCompletion } from "../../api/completionFetch";
import { GiMagnifyingGlass } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

interface Props {
  isOpen: boolean;
}

const ChatBox = ({ isOpen }: Props) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<any>([
    <AIText>Hello! I'm dealio! Feel free to ask me anything!</AIText>,
  ]);
  const navigate = useNavigate();

  const onClick = async () => {
    const h = history;
    h.push(<UserText key={input + Math.random()}>{input}</UserText>);
    setHistory(h);
    const response: { response: string } = await fetchCompletion(input);

    setTimeout(() => {
      if (/Clothing/.test(response.response)) {
        setHistory([
          ...history,
          <AIText key={response.response + Math.random()}>
            {response.response}
          </AIText>,
          <AIButton onClick={() => navigate("/products/Clothing")}>
            Clothing
          </AIButton>,
        ]);
        return;
      }
      if (/Automotive/.test(response.response)) {
        setHistory([
          ...history,
          <AIText key={response.response + Math.random()}>
            {response.response}
          </AIText>,
          <AIButton onClick={() => navigate("/products/Automotive")}>
            Automotive
          </AIButton>,
        ]);
        return;
      }
      if (/Electronics/.test(response.response)) {
        setHistory([
          ...history,
          <AIText key={response.response + Math.random()}>
            {response.response}
          </AIText>,
          <AIButton onClick={() => navigate("/products/Electronics")}>
            Electronics
          </AIButton>,
        ]);
        return;
      }
      if (/Gaming/.test(response.response)) {
        setHistory([
          ...history,
          <AIText key={response.response + Math.random()}>
            {response.response}
          </AIText>,
          <AIButton onClick={() => navigate("/products/Gaming")}>
            Gaming
          </AIButton>,
        ]);
        return;
      }
      if (/Kitchen/.test(response.response)) {
        setHistory([
          ...history,
          <AIText key={response.response + Math.random()}>
            {response.response}
          </AIText>,
          <AIButton onClick={() => navigate("/products/Kitchen")}>
            Kitchen
          </AIButton>,
        ]);
        return;
      }
      if (/Outdoor/.test(response.response)) {
        setHistory([
          ...history,
          <AIText key={response.response + Math.random()}>
            {response.response}
          </AIText>,
          <AIButton onClick={() => navigate("/products/Outdoor")}>
            Outdoor
          </AIButton>,
        ]);
        return;
      }
      setHistory([
        ...history,
        <AIText key={response.response + Math.random()}>
          {response.response}
        </AIText>,
      ]);
    }, 1000);
    setInput("");
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      onClick();
    }
  };

  return (
    <>
      <ChatContainer isOpen={isOpen}>
        <ChatTitle>Dealio, the AI Assistant</ChatTitle>
        <HistDiv>{history}</HistDiv>
        <InputDiv>
          <ChatInput
            type="text"
            name="question"
            placeholder="Enter any question!"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <SubmitButton onClick={onClick}>
            <GiMagnifyingGlass size="2x" />
          </SubmitButton>
        </InputDiv>
      </ChatContainer>
    </>
  );
};

export default ChatBox;
