import styled from "styled-components";
import { Link } from "react-router-dom";
import { QUERIES } from "../../helpers/MediaQueries";

export const FooterContainer = styled.footer`
  background-color: var(--color-sec-100);
  max-width: 100%;
  min-height: 0rem;
  padding: 1rem;

  @media ${QUERIES.tabletMini} {
    padding: 0rem 1rem;
  }
`;

export const FooterWrap = styled.div`
  max-width: var(--max-container);
  min-height: 5.5rem;
  margin: var(--center-container);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media ${QUERIES.tabletMini} {
    flex-direction: row;
    text-align: left;
    justify-content: space-between;
  }
`;

export const FooterLogo = styled(Link)`
  margin: 1.5rem 0rem;

  @media ${QUERIES.tabletMini} {
    margin-right: 3rem;
  }
`;

export const Logo = styled.img``;

export const FooterMenu = styled.div`
  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletMini} {
    flex: 10;
    flex-direction: row;
  }
`;
export const FooterMenuItem = styled(Link)`
  margin: 1rem 0rem;
  color: var(--color-pry-100);
  text-transform: uppercase;

  @media ${QUERIES.tabletMini} {
    margin-right: 3rem;
  }
`;

export const FooterSocial = styled.div`
  display: flex;
`;

export const FooterSocialItem = styled(Link)`
  margin: 1.5rem 1rem;

  @media ${QUERIES.tabletMini} {
    margin: 0;
    margin-left: 2rem;
  }
`;

export const Social = styled.img`

`;
