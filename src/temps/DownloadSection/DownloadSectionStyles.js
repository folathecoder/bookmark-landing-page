import styled from "styled-components";
import { QUERIES } from "../../helpers/MediaQueries";

export const DownloadContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 1rem;

  @media ${QUERIES.tablet} {
    padding: 5rem 1rem;
  }
`;

export const DownloadWrap = styled.div`
  max-width: var(--max-container);
  min-height: 20rem;
  margin: var(--center-container);
  text-align: center;
`;

export const DownloadHeader = styled.h2`
  margin: 1rem;
`;
export const DownloadSubHeader = styled.p`
  max-width: 33.8125rem;
  margin: var(--center-container);
`;

export const ExtensionCards = styled.ul`
  margin: 1rem 0rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const ExtensionCard = styled.li`
  flex: 1 17.5rem;
  min-height: 23.1875rem;
  max-width: 17.5rem;
  background-color: var(--color-pry-100);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  padding: 3.5rem 0rem 1.5rem 0rem;
  border-radius: var(--border-radius);
  box-shadow: 0rem 0.6rem 0.8rem rgba(100, 100, 100, 0.07);

  @media ${QUERIES.tablet} {
    transform: translateY( ${(props) => props.index * 2.125}rem);
  }
`;

export const ExtensionImage = styled.img`
  max-width: 6.5625rem;
  height: auto;
`;

export const ExtensionTitle = styled.h4`
  padding: 0rem 1.5rem;
`;

export const ExtensionDescription = styled.p`
  padding: 0rem 1.5rem;
`;

export const ExtensionButton = styled.div`
  width: 100%;
  padding: 0rem 1rem;
`;

export const DottedLines = styled.div`
  width: 100%;
  height: 1rem;
  border-bottom: 0.3rem dotted hsla(231, 58%, 55%, 0.212);
`;
