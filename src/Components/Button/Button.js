import React from "react";
import { CustomButton } from "./ButtonStyles";

const Button = ({ primary, blocked, outline, hoverPrimary, event, link, children }) => {
  
  return (
    <CustomButton
      primary={primary}
      blocked={blocked}
      outline={outline}
      hoverPrimary={hoverPrimary}
      onClick={event}
      link={link}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
