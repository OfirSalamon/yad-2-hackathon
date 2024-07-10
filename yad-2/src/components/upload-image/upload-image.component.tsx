import { ChangeEvent } from "react";
import { FileInputLabel, FileInput } from "./upload-image.style";

interface Props {
  name: string;
  label: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const UploadImage = ({ name, label, handleFileChange }: Props) => {
  return (
    <>
      <FileInputLabel htmlFor={name}>{label}</FileInputLabel>
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
