import { ChangeEvent } from "react";
import {
  Container,
  DimensionInput,
  DimensionLabel,
} from "./dimensions-inputs.style";

interface Props {
  dimensions: any;
  name: string;
  form: any;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement>,
    dimensionName: string,
    key: string
  ) => void;
}

const DimensionsInputs = ({
  dimensions,
  name,
  form,
  handleInputChange,
}: Props) => {
  return (
    <Container>
      {Object.keys(dimensions).map((key) => (
        <div key={key}>
          <DimensionLabel>{(dimensions as any)[key].label}</DimensionLabel>
          <DimensionInput
            type="number"
            name={`${name}.${key}.value`}
            id={`${name}.${key}.value`}
            value={form[name as keyof typeof form][key]?.value || ""}
            onChange={(e) => handleInputChange(e, name, key)}
          />
        </div>
      ))}
    </Container>
  );
};

export default DimensionsInputs;
