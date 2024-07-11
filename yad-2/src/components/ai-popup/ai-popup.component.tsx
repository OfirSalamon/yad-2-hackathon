import { Text } from "@/styles/typography/typography.styles";

import ImagePreview from "@components/image-preview/image-preview.component";
import UploadImage from "@components/upload-image/upload-image.component";
import { Button, Textarea } from "@components/upload-item/upload-item.style";
import { ChangeEvent } from "react";
import { Container, ContentContainer, ImageContainer } from "./ai-popup.styles";
import Spinner from "@components/spinner/spinner.component";

interface Props {
  image: File;
  imageName: string;
  label: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteFile: () => void;
  descriptionName: string;
  descriptionValue: string;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  onButtonClick: () => void;
  loading?: boolean;
}

const AiPopup = ({
  image,
  imageName,
  label,
  handleFileChange,
  handleDeleteFile,
  descriptionName,
  descriptionValue,
  handleInputChange,
  onButtonClick,
  loading,
}: Props) => {
  return (
    <Container $aic $jcsb>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <ContentContainer $aic $gap={20}>
            <Text w={"medium"} s={32}>
              מה מוכרים?
            </Text>
            <Text s={20} c={"mutedText"} mb={48}>
              אל תעבדו קשה מידי! העלו תמונה של המוצר או תארו אותו, ואנחנו נדאג
              להכל :)
            </Text>
            <ImageContainer>
              {image ? (
                <ImagePreview
                  handleDeleteFile={handleDeleteFile}
                  image={image}
                />
              ) : (
                <UploadImage
                  name={imageName}
                  label={label}
                  handleFileChange={handleFileChange}
                />
              )}
            </ImageContainer>

            <Textarea
              name={descriptionName}
              id={descriptionName}
              value={descriptionValue}
              onChange={handleInputChange}
              height={"150px"}
              placeholder="תאר את המוצר באופן כללי, לדוגמה: אייפון במצב טוב"
            />
          </ContentContainer>
          <Button onClick={onButtonClick}>צא לדרך!</Button>
        </>
      )}
    </Container>
  );
};

export default AiPopup;
