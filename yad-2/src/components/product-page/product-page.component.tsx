import { Col } from "@/styles/container/container.styles";
import { Text } from "@/styles/typography/typography.styles";
import ImagePreview from "@components/image-preview/image-preview.component";

interface Props {
  form: any;
}

const ProductPage = ({ form }: Props) => {
  return (
    <Col $gap={20}>
      <ImagePreview showDeleteIcon={false} image={form.image} />
      <Text w={"medium"} s={24}>
        {form.title}
      </Text>
      <Text w={"medium"} s={40}>
        ₪{form.price}
      </Text>
      <Text w={"medium"} s={24}>
        על המוצר
      </Text>
      <Text s={16}>{form.suggestion}</Text>
      <Text w={"medium"} s={24}>
        פרטים נוספים
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>סוג מוצר: </span>
        {form.genre}
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>מצב מוצר: </span>
        {form.condition}
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>סוג בד: </span>
        {form.material}
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>צבע: </span>
        {form.color}
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>סגנון: </span>
        {form.style}
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>עומק: </span>
        {form.depth ?? "83"}
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>רוחב: </span>
        {form.width ?? "96"}
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>גובה: </span>
        {form.height ?? "185"}
      </Text>
      <Text s={20}>
        <span style={{ color: "gray" }}>כתובת: </span>
        {form.address}
      </Text>
    </Col>
  );
};

export default ProductPage;
