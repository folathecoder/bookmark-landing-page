import React from "react";
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
  FormButtonWrap
} from "./CtaSectionStyles";

import Button from "../Button/Button"

const CtaSection = () => {
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
              />
              <EmailError>{ctaFormData.errorMessage}</EmailError>
            </FormInputWrap>
            <FormButtonWrap>
              <Button primary hoverPrimary blocked type="submit">
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
