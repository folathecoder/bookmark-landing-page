import React from "react";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLogo,
  MobileNav,
  HeaderNav,
  NavItems,
  NavItem, 
  NavCta
} from "./HeaderStyles";
import Button from "../Button/Button"
import { brandData } from "./HeaderData";

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogo to="/">
            <img src={brandData.logo} alt={brandData.name} />
          </HeaderLogo>

          <MobileNav>
            <button>
              Nav
            </button>
          </MobileNav>

          <HeaderNav>
            <NavItems>
              <NavItem to="/">Features</NavItem>
              <NavItem to="/">Pricing</NavItem>
              <NavItem to="/">Contact</NavItem>
            </NavItems>
            <NavCta>
              <Button primary>LOGIN</Button>
            </NavCta>
          </HeaderNav>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
};

export default Header;
