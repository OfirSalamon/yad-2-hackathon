import { Text } from "@/styles/typography/typography.styles";
import {
  Container,
  MainContainer,
  ImageContainer,
  ContentContainer,
  UploadImageContainer,
} from "./ai-popup.styles";
import { ChangeEvent } from "react";
import UploadImage from "@components/upload-image/upload-image.component";
import { Button, Textarea } from "@components/upload-item/upload-item.style";
import backIcon from "@assets/icons/back.svg";
import ImagePreview from "@components/image-preview/image-preview.component";
import { Col, Row } from "@/styles/container/container.styles";
import Image from "next/image";
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
    <Container $jcsb>
      <MainContainer $gap={72}>
        <Row $aic $gap={8}>
          <Image src={backIcon} alt="Back icon" width={20} height={20} />
          <Text s={18}>חזרה לדף הבית</Text>
        </Row>
        <ContentContainer $gap={48}>
          <Col $gap={20}>
            <Text w={"medium"} s={48}>
              מה מוכרים?
            </Text>
            <Text s={20} c={"mutedText"} mb={84} lh={40}>
              אל תעבדו קשה מידי! העלו תמונה של המוצר או תארו אותו, ואנחנו נדאג
              להכל :)
            </Text>
          </Col>

          <ImageContainer>
            {image ? (
              <Col $aic $jcc $fw>
                <Text s={20} mb={16} w={"bold"}>
                  נראה מצויין!
                </Text>
                <ImagePreview
                  handleDeleteFile={handleDeleteFile}
                  image={image}
                />
              </Col>
            ) : (
              <Col $aic $jcc>
                <Text s={20} mb={16} w={"bold"}>
                  כאן מעלים תמונה
                </Text>
                <UploadImageContainer>
                  <UploadImage
                    name={imageName}
                    label={label}
                    handleFileChange={handleFileChange}
                  />
                </UploadImageContainer>
              </Col>
            )}
          </ImageContainer>

          <Col $fw $aic $jcc>
            <Text s={20} mb={16} w={"bold"}>
              אפשר גם לכתוב תיאור קצר
            </Text>
            <Textarea
              name={descriptionName}
              id={descriptionName}
              value={descriptionValue}
              onChange={handleInputChange}
              height={"100px"}
              placeholder="תאר את המוצר באופן כללי, לדוגמה: אייפון במצב טוב"
            />
          </Col>
        </ContentContainer>
      </MainContainer>
      <Button onClick={onButtonClick}>בואו נמשיך</Button>
    </Container>
  );
};

export default AiPopup;
