import React from "react";
import { CustomButton } from "./ButtonStyles";

const Button = ({ primary, blocked, outline, hoverPrimary, children }) => {
  
  return (
    <CustomButton
      primary={primary}
      blocked={blocked}
      outline={outline}
      hoverPrimary={hoverPrimary}
    >
      {children}
    </CustomButton>
  );
};

export default Button;
