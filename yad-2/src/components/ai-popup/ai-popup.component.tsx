import { Text } from "@/styles/typography/typography.styles";
import { Container } from "./ai-popup.styles";
import { ChangeEvent } from "react";
import UploadImage from "@components/upload-image/upload-image.component";
import {
  ItemImage,
  ItemImageContainer,
  Textarea,
} from "@components/upload-item/upload-item.style";
import Image from "next/image";
import trashIcon from "@assets/icons/delete-icon.svg";

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
}: Props) => {
  return (
    <Container $aic $gap={40}>
      <Text w={"medium"} s={32}>
        מה מוכרים?
      </Text>
      {image ? (
        <ItemImageContainer>
          <ItemImage
            src={URL.createObjectURL(image)}
            alt="Uploaded Product"
            width={0}
            height={0}
          />
          <Image
            style={{ cursor: "pointer" }}
            onClick={handleDeleteFile}
            src={trashIcon}
            alt="Trash icon"
            width={20}
            height={20}
          />
        </ItemImageContainer>
      ) : (
        <UploadImage
          name={imageName}
          label={label}
          handleFileChange={handleFileChange}
        />
      )}
      <Textarea
        name={descriptionName}
        id={descriptionName}
        value={descriptionValue}
        onChange={handleInputChange}
      />
    </Container>
  );
};

export default AiPopup;
