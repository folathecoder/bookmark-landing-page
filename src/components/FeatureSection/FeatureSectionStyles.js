import styled from "styled-components";
import { QUERIES } from "../../helpers/MediaQueries";

export const FeatureContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
`;
export const FeatureWrap = styled.div`
  /* background-color: red; */
  max-width: var(--max-container);
  min-height: 30rem;
  margin: var(--center-container);
  text-align: center;
`;

export const FeatureHeader = styled.h2`
  margin: 1rem;
`;
export const FeatureSubHeader = styled.p`
  max-width: 33.8125rem;
  margin: var(--center-container);
`;

export const FeatureTabs = styled.div`
  max-width: 45.62rem;
  min-height: 4rem;
  margin: var(--center-container);
  margin-top: 2rem;
  /* background-color: pink; */
  display: flex;
  flex-direction: column;
  border-bottom: 0.1rem solid var(--color-sec-400);
  

  @media ${QUERIES.tablet} {
    flex-direction: row;
  }

  & > * {
    flex: 1;
  }
`;
export const FeatureTab = styled.button`
  min-height: 3.75rem;
  background-color: transparent;
  border: none;
  border-bottom: 0.2rem solid transparent;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1.5rem;
  border-bottom: 0.2rem solid
    ${({ clicked, index }) => (clicked === index ? "var(--color-pry-300)" : "transparent")};

  @media ${QUERIES.tabletMini} {
  }
`;

export const FeatureContentWrap = styled.div`
    max-width: 100%;
    min-height: 7rem;
    margin: 4rem 0rem;
    /* background-color: pink; */
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    display: ${({clicked, index}) => clicked === index ? "flex" : "none"};

    & > * {
        flex: 1;
        padding: 1rem;
    }

    @media ${QUERIES.tablet} {
        flex-direction: row;
    }
`
export const FeatureImage = styled.img``;
export const FeatureContent = styled.div`
  @media ${QUERIES.tablet} {
      display: flex;
      align-items: center;
      justify-content: flex-end;
  }
`;
export const FeatureContentInner = styled.div`
    max-width: 27.8125rem;
    /* background-color: red; */
`;
export const FeatureContentHeader = styled.h3`
  font-size: 1.5rem;
  line-height: 1.75rem;
  font-weight: var(--font-weight-200);

  @media ${QUERIES.tabletMini} {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`;
export const FeatureContentSubHeader = styled.p`
    margin: 1rem 0rem;
`;