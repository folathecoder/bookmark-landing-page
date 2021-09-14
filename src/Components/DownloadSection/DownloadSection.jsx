import React from "react";
import Button from "../Button/Button";



import {
  DownloadContainer,
  DownloadWrap,
  DownloadHeader,
  DownloadSubHeader,
  ExtensionCards,
  ExtensionCard,
  ExtensionImage,
  ExtensionTitle,
  ExtensionDescription,
} from "./DownloadSectionStyles";
import {
  downloadData,
  extensionData,
} from "../../data/Home/DownloadSectionData";

const DownloadSection = () => {
  return (
    <>
      <DownloadContainer>
        <DownloadWrap>
          <DownloadHeader>{downloadData.header}</DownloadHeader>
          <DownloadSubHeader>{downloadData.subheader}</DownloadSubHeader>
          <ExtensionCards>
              {extensionData.map(extension => {
                  return (
                    <ExtensionCard>
                      <ExtensionImage src={extension.image} />
                      <ExtensionTitle>{extension.title}</ExtensionTitle>
                      <ExtensionDescription>
                        {extension.description}
                      </ExtensionDescription>
                      <Button blocked>{extension.buttonText}</Button>
                    </ExtensionCard>
                  );
              })}
          </ExtensionCards>
        </DownloadWrap>
      </DownloadContainer>
    </>
  );
};

export default DownloadSection;
