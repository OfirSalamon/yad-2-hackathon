import { Text } from "@/styles/typography/typography.styles";
import { Container } from "./ai-popup.styles";
import { ChangeEvent } from "react";
import UploadImage from "@components/upload-image/upload-image.component";
import {
  ItemImage,
  ItemImageContainer,
} from "@components/upload-item/upload-item.style";
import Image from "next/image";
import trashIcon from "@assets/icons/delete-icon.svg";

interface Props {
  image: File;
  name: string;
  label: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleDeleteFile: () => void;
}

const AiPopup = ({
  image,
  name,
  label,
  handleFileChange,
  handleDeleteFile,
}: Props) => {
  return (
    <Container $aic $gap={40}>
      <Text w={"medium"} s={32} c={"white"}>
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
          name={name}
          label={label}
          handleFileChange={handleFileChange}
        />
      )}
    </Container>
  );
};

export default AiPopup;
