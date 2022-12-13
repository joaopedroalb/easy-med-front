import React from "react";
import {
  Body,
  Content,
  ContentFAQ,
  SectionFAQ,
  QuestionsFAQ,
  QuestionWhite,
  QuestionGray
} from "./style";
import HeaderDoctor from "../../components/layout/Headers/HeaderDoctor";
import ArrowRight from "../../../src/assets/images/arrow-right.svg";

export default function FAQ() {
  return (
    <Body>
      <HeaderDoctor />
      <Content>
        <ContentFAQ>
          <SectionFAQ>
            <QuestionsFAQ>
              <QuestionWhite>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionWhite>
              <QuestionGray>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionGray>
              <QuestionWhite>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionWhite>
              <QuestionGray>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionGray>
              <QuestionWhite>
                <div className="circle"></div>
                <p>Pergunta</p>
                <img className="arrowRight" src={ArrowRight} />
              </QuestionWhite>
             
            </QuestionsFAQ>
          </SectionFAQ>
        </ContentFAQ>
      </Content>
    </Body>
  );
}
