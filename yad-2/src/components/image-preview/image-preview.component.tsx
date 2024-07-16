import trashIcon from "@assets/icons/delete-icon.svg";
import Image from "next/image";
import { ItemImage, ItemImageContainer } from "./image-preview.style";

interface Props {
  image: File;
  handleDeleteFile?: () => void;
  showDeleteIcon?: boolean;
}

const ImagePreview = ({
  image,
  handleDeleteFile,
  showDeleteIcon = true,
}: Props) => {
  return (
    <ItemImageContainer>
      <ItemImage
        src={URL.createObjectURL(image)}
        alt="Uploaded Product"
        width={0}
        height={0}
      />
      {showDeleteIcon && (
        <Image
          style={{
            cursor: "pointer",
            position: "absolute",
            bottom: "10px",
            left: "10px",
          }}
          onClick={handleDeleteFile}
          src={trashIcon}
          alt="Trash icon"
          width={20}
          height={20}
        />
      )}
    </ItemImageContainer>
  );
};

export default ImagePreview;
