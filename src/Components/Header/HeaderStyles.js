import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  max-width: 100%;
  min-height: 0rem;
  margin: 1rem 1rem 0rem 1rem ;
`;

export const HeaderWrap = styled.div`
  background-color: var(--color-pry-100);
  background-color: pink;
  max-width: var(--max-container);
  min-height: 3.125rem;
  margin: var(--center-container);
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled(Link)`
 
  img {
    max-width: 9.3125rem;
    height: auto;
  }
`;

export const MobileNav = styled.div`
  display: none;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  @media screen and (max-width: 786px) {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    background-color: red;
  }
`;

export const HeaderNav = styled.nav`
  flex: 10;
  display: flex;
  align-items: center;

  & > * {
    flex: 1;
  }

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavItems = styled.div`
  flex: 10;
  display: flex;
  justify-content: flex-end;
`;

export const NavItem = styled(Link)`
  margin-right: 3rem;
`;

export const NavCta = styled.div`

`;
