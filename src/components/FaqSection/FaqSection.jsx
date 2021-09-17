import React from "react";
import { FaqContainer, FaqWrap, FaqHeader, FaqSubHeader, Faq, FaqItemWrap, FaqQuestionWrap, FaqQuestion, FaqIcon, FaqAnswer,FaqAnswerWrap , FaqButton} from "./FaqSectionStyles";
import Button from "../../components/Button/Button"

const FaqSection = ({ faqData }) => {
  return (
    <>
      <FaqContainer>
        <FaqWrap>
            <FaqHeader>{faqData.heading}</FaqHeader>
            <FaqSubHeader>{faqData.subHeading}</FaqSubHeader>
            <Faq>
                {faqData.faqs.map((faq, index) => {
                    return (
                      <FaqItemWrap key={index}>
                        <FaqQuestionWrap>
                          <FaqQuestion>{faq.question}</FaqQuestion>
                          <FaqIcon>
                            <i className="fas fa-chevron-down"></i>
                          </FaqIcon>
                        </FaqQuestionWrap>
                        <FaqAnswerWrap>
                          <FaqAnswer>{faq.answer}</FaqAnswer>
                        </FaqAnswerWrap>
                      </FaqItemWrap>
                    );
                })}
            </Faq>
            <FaqButton>
              <Button>{faqData.faqButton.text}</Button>
            </FaqButton>
        </FaqWrap>
      </FaqContainer>
    </>
  );
};

export default FaqSection;
