import styled from "styled-components";
import { link } from "react-router-dom";

export const DownloadContainer = styled.section`
  max-width: 100%;
  min-height: 0rem;
  padding: 1rem;
`;

export const DownloadWrap = styled.div`
  max-width: var(--max-container);
  min-height: 20rem;
  margin: var(--center-container);
  background-color: pink;
  text-align: center;
`;

export const DownloadHeader = styled.h2``;
export const DownloadSubHeader = styled.p``;

export const ExtensionCards = styled.ul`
  background-color: red;
  display: flex;
  flex-direction: column;
  align-items: center;

  
`;
export const ExtensionCard = styled.li`
  display: flex;
  flex-direction: column;
  background-color: white;
`;
export const ExtensionImage = styled.img``;
export const ExtensionTitle = styled.h4``;
export const ExtensionDescription = styled.p``;
