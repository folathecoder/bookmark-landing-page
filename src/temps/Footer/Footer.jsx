import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLogo,
  Logo,
  FooterMenu,
  FooterMenuItem,
  FooterSocial,
  FooterSocialItem,
  Social,
} from "./FooterStyles";

const Footer = ({brandData, menuData, socialData}) => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          <FooterLogo to="/">
            <Logo src={brandData.logo3}></Logo>
          </FooterLogo>
          <FooterMenu>
            {menuData.map((menu) => {
              return (
                <FooterMenuItem to={menu.link} key={menu.id}>{menu.title}</FooterMenuItem>
              );
            })}
          </FooterMenu>
          <FooterSocial>
            {socialData.map((social) => {
              return (
                <FooterSocialItem to={social.link} key={social.id}>
                  <Social src={social.image} alt={social.title}></Social>
                </FooterSocialItem>
              );
            })}
          </FooterSocial>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
