import React, { useState, useEffect } from "react";
import {
  HeaderContainer,
  HeaderWrap,
  HeaderLogo,
  MobileNav,
  HeaderNav,
  NavItems,
  NavItem,
  NavCtaDesktop,
  NavCtaMobile
} from "./HeaderStyles";
import Button from "../Button/Button";
import { brandData, menuData } from "./HeaderData";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  //TODO: Handle mobile nav toggle
  const handleNavToggle = () => {
    setNavToggle(!navToggle);
  };

  //TODO: Prevent page scroll when mobile nav is open (true)
  useEffect(() => {
    if (navToggle === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  });

  return (
    <>
      <HeaderContainer>
        <HeaderWrap>
          <HeaderLogo to="/">
            <img src={navToggle ? brandData.logo2 : brandData.logo} alt={brandData.name} />
          </HeaderLogo>
          <MobileNav navToggle={navToggle}>
            <button onClick={handleNavToggle}>
              {navToggle ? (
                <i className="fas fa-times"></i>
              ) : (
                <i className="fas fa-bars"></i>
              )}
            </button>
          </MobileNav>
          <HeaderNav navToggle={navToggle}>
            <NavItems>
              {menuData.map((menu) => {
                return (
                  <NavItem to={menu.link} key={menu.id}>
                    {menu.title}
                  </NavItem>
                );
              })}
            </NavItems>
            <NavCtaDesktop>
              <Button primary>LOGIN</Button>
            </NavCtaDesktop>
            <NavCtaMobile>
              <Button outline blocked>
                LOGIN
              </Button>
            </NavCtaMobile>
          </HeaderNav>
        </HeaderWrap>
      </HeaderContainer>
    </>
  );
};

export default Header;
