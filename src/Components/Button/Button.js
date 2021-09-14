import React from "react";
import { CustomButton } from "./ButtonStyles";

const Button = ({ primary, blocked, outline, hoverPrimary, event, children }) => {
  
  return (
    <CustomButton
      primary={primary}
      blocked={blocked}
      outline={outline}
      hoverPrimary={hoverPrimary}
      onClick={event}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
