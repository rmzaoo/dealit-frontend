import React from "react";
import { Container, ContainerQuestion } from "./styled";

interface Props {
  title: string;
  description: string;
  mapQuestions: { question: string; answer: string }[];
  className?: string;
}

const Faq = ({ title, description, mapQuestions, className }: Props) => {
  // on click show the answer and hide the question

  const [showAnswer, setShowAnswer] = React.useState(false);
  const [selectedQuestion, setSelectedQuestion] = React.useState(0);
  const handleClick = (index: number) => {
    setSelectedQuestion(index);
    setShowAnswer(index === selectedQuestion ? !showAnswer : true);
  };

  return (
    <Container className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <div className="questions">
        {mapQuestions.map((question, index) => (
          <ContainerQuestion key={index}>
            <h3 onClick={() => handleClick(index)}>{question.question}</h3>
            {showAnswer && selectedQuestion === index && (
              <p>{question.answer}</p>
            )}
          </ContainerQuestion>
        ))}
      </div>
    </Container>
  );
};

export default Faq;
