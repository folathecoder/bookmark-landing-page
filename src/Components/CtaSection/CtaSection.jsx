import React, { useState } from "react";
import { ctaData, ctaFormData } from "../../data/Home/CtaSectionData";
import {
  CtaContainer,
  CtaWrap,
  CtaSubHeader,
  CtaHeader,
  Form,
  FormInputWrap,
  EmailInput,
  EmailError,
  FormButtonWrap,
} from "./CtaSectionStyles";

import Button from "../Button/Button";

const CtaSection = () => {
  const [input, setInput] = useState({});
  const [email, setEmail] = useState("");

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input.email) {
      setEmail(input);
    }
  };

  console.log(email);

  return (
    <>
      <CtaContainer>
        <CtaWrap>
          <CtaSubHeader>{ctaData.subHeading}</CtaSubHeader>
          <CtaHeader>{ctaData.heading}</CtaHeader>
          <Form>
            <FormInputWrap>
              <EmailInput
                type="email"
                name="email"
                id="email"
                placeholder={ctaFormData.placeholder}
                onChange={handleInputChange}
              />
              <EmailError>{ctaFormData.errorMessage}</EmailError>
            </FormInputWrap>
            <FormButtonWrap>
              <Button
                primary
                hoverPrimary
                blocked
                type="submit"
                event={handleFormSubmit}
              >
                {ctaFormData.buttonText}
              </Button>
            </FormButtonWrap>
          </Form>
        </CtaWrap>
      </CtaContainer>
    </>
  );
};

export default CtaSection;
