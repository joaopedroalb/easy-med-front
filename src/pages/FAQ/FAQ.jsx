import React from "react";
import {
  Body,
  Content,
  ContentFAQ,
  SectionFAQ,
  QuestionsFAQ,
  QuestionWhite,
  QuestionGray,
  SectionFaqQuestion,
  TitleQuestion,
  Question,
  MessageQuestion,
} from "./style";
import HeaderDoctor from "../../components/layout/Headers/HeaderDoctor";
import ArrowRight from "../../../src/assets/images/arrow-right.svg";

const questions = [
  {
    questionId: 1,
    question: "Pergunta 1",
    title: "Pergunta 1",
    message: "Resposta 1",
  },
  {
    questionId: 2,
    question: "Pergunta 2",
    title: "Pergunta 2",
    message: "Resposta 2",
  },
  {
    questionId: 3,
    question: "Pergunta 3",
    title: "Pergunta 3",
    message: "Resposta 3",
  },
  {
    questionId: 4,
    question: "Pergunta 4",
    title: "Pergunta 4",
    message: "Resposta 4",
  },
  {
    questionId: 5,
    question: "Pergunta 5",
    title: "Pergunta 5",
    message: "Resposta 5",
  },
];

export default function FAQ() {
  const [question, setQuestion] = React.useState({
    title: "",
    message: "",
  });

  const handleQuestionClick = (_title, _message) => {
    setQuestion({ title: _title, message: _message });
  };

  return (
    <Body>
      <HeaderDoctor />
      <Content>
        <ContentFAQ>
          <SectionFAQ>
            <QuestionsFAQ>
              {questions.map(
                ({ questionId, question, title, message }, index) => {
                  const Component =
                    index % 2 === 0 ? QuestionWhite : QuestionGray;

                  return (
                    <Component
                      key={questionId}
                      onClick={() => handleQuestionClick(title, message)}
                    >
                      <div className="circle"></div>
                      <p>{question}</p>
                      <img className="arrowRight" src={ArrowRight} />
                    </Component>
                  );
                }
              )}
            </QuestionsFAQ>
            <SectionFaqQuestion>
              <Question>
                <TitleQuestion>{question.title}</TitleQuestion>
                <MessageQuestion>{question.message}</MessageQuestion>
              </Question>
            </SectionFaqQuestion>
          </SectionFAQ>
        </ContentFAQ>
      </Content>
    </Body>
  );
}
