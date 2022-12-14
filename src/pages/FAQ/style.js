import styled from "styled-components";

export const Body = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--absolute-white);
`
export const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    padding: 110px;
    justify-content: center;
    align-items: center;
`
export const ContentFAQ = styled.div`
    width: 1200px;
    height: 546px;
    display: flex;
    justify-content: right;
    align-items: center;
`
export const SectionFAQ = styled.div`
  width: 648px;
  height: 546px;
  border-radius: 16px;
  border: 1px solid #28c3d2;
  background-color: var(--white);
`
export const QuestionsFAQ = styled.div`
    width: 640px;
    height: 420px;
    border-radius: 8px;
    border: 1px solid #28c3d2;
    position: relative;
    right: 550px;
    top: 30px;
    overflow: auto;
`
export const QuestionWhite = styled.div`
    width: 100%;
    height: 20%;
    background-color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
        background-color: var(--blue-500);
        cursor: pointer;
    }
    .circle {
        width: 24px;
        height: 24px;
        background-color: red;
        border-radius: 50px;
        margin-left: 15px;
    }
    .arrowRight {
        width: 24px;
        height: 24px;
        margin-right: 15px;
    }
`
export const QuestionGray = styled.div`
    width: 100%;
    height: 20%;
    background-color: var(--gray-100);
    display: flex;
    align-items: center;
    justify-content: space-between;
    &:hover {
        background-color: var(--blue-500);
    }
    &:active {
        background-color: var(--blue-500);
    }
    .circle {
        width: 24px;
        height: 24px;
        background-color: red;
        border-radius: 50px;
        margin-left: 15px;
    }
    .arrowRight {
        width: 24px;
        height: 24px;
        margin-right: 15px;
    }
`
export const SectionFaqQuestion = styled.div`
    width: 86%;
    height: 100%;
    position: relative;
    left: 90px;
    bottom: 420px;
    word-wrap: break-word;
    background-color: var(--white);
`
export const Question = styled.div`
    padding-top: 40px;
    padding-left: 56px;
    padding-right: 40px;
    background-color: var(--white);
`
export const TitleQuestion = styled.p`
    font-size: 18px;
    font-weight: 700;
`
export const MessageQuestion = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-top: 40px;
`

