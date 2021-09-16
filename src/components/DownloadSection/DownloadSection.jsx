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
  ExtensionButton,
  DottedLines,
} from "./DownloadSectionStyles";

const DownloadSection = ({ downloadData, extensionData }) => {
  return (
    <>
      <DownloadContainer>
        <DownloadWrap>
          <DownloadHeader>{downloadData.header}</DownloadHeader>
          <DownloadSubHeader>{downloadData.subheader}</DownloadSubHeader>
          <ExtensionCards>
            {extensionData.map((extension, index) => {
              return (
                <ExtensionCard key={extension.id} index={index}>
                  <ExtensionImage src={extension.image} />
                  <ExtensionTitle>{extension.title}</ExtensionTitle>
                  <ExtensionDescription>
                    {extension.description}
                  </ExtensionDescription>
                  <DottedLines />
                  <ExtensionButton>
                    <Button blocked link={extension.link}>
                      {extension.buttonText}
                    </Button>
                  </ExtensionButton>
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
