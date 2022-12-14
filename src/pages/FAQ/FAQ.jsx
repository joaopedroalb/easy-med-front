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
import LayoutPage from "../../components/layout/LayoutPage";

const questions = [
  {
    questionId: 1,
    question: "Pra quê serve a EasyMed?",
    message: "A EasyMed serve para juntar todas as suas informações médicas num lugar só, trazendo praticidade e segurança",
  },
  {
    questionId: 2,
    question: "Meu dados estão seguros?",
    message: "Seus dados estão protegidos na nuvem",
  },
  {
    questionId: 3,
    question: "Como adiciono alergias e doenças familiares?",
    message: "No menu do perfil, é possível selecionar tanto alergias quanto condições familiares para adicionar no seu perfil de paciente",
  },
  {
    questionId: 4,
    question: "Qualquer médico pode mexer em qualquer informação minha?",
    message: "Não, somente os médicos que você autorizar quando fizer uma consulta podem alterar informações relacionadas",
  },
  {
    questionId: 5,
    question: "Como coloco os meus exames na plataforma?",
    message: "No menu do perfil, é possível colocar o link do arquivo do seu exame",
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
    <LayoutPage>
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
                      onClick={() => handleQuestionClick(question, message)}
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
    </LayoutPage>
  );
}
