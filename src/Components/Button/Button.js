import React from "react";
import { CustomButton } from "./ButtonStyles";

const Button = ({primary, blocked, outline, children}) => {




  return <CustomButton primary={primary} blocked={blocked} outline={outline}>{children}</CustomButton>;
};

export default Button;
