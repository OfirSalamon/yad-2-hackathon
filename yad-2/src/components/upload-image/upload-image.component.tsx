import { ChangeEvent } from "react";
import { UploadImagePreview, FileInput } from "./upload-image.style";
import uploadIcon from "@assets/icons/upload.svg";
import Image from "next/image";
import { Text } from "@/styles/typography/typography.styles";

interface Props {
  name: string;
  label: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UploadImage = ({ name, label, handleFileChange }: Props) => {
  return (
    <>
      <UploadImagePreview htmlFor={name}>
        <Text s={18}>{label}</Text>
        <Image src={uploadIcon} alt="Upload icon" width={20} height={20} />
      </UploadImagePreview>
      <FileInput
        type={"file"}
        name={name}
        id={name}
        multiple
        onChange={handleFileChange}
      />
    </>
  );
};

export default UploadImage;
