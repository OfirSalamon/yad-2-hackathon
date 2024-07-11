import React, { ChangeEvent } from "react";
import {
  PriceRadioButtonLabel,
  PriceRadioButtonLabelContainer,
  PriceRadioInput,
} from "./price-options.style";
import { Input } from "@components/upload-item/upload-item.style";

interface Props {
  priceOptions: any;
  currPrice: number;
  name: string;
  value: number;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handlePriceOptionChange: (optionValue: string, price?: string) => void;
}

const PriceOptions = ({
  priceOptions,
  currPrice,
  handlePriceOptionChange,
  name,
  value,
  handleInputChange,
}: Props) => {
  return (
    <>
      <PriceRadioButtonLabelContainer>
        {priceOptions.options?.map((option: any) => (
          <React.Fragment key={option.value}>
            <PriceRadioInput
              type="radio"
              name={priceOptions.name}
              id={`${priceOptions.name}-${option.value}`}
              value={option.value}
              checked={currPrice === option.value}
              onChange={() =>
                handlePriceOptionChange(option.value, option.price || "")
              }
            />
            <PriceRadioButtonLabel
              htmlFor={`${priceOptions.name}-${option.value}`}
            >
              {option.label}
              {option.price && `\n(₪${option.price})`}
            </PriceRadioButtonLabel>
          </React.Fragment>
        ))}
      </PriceRadioButtonLabelContainer>
      <Input
        type={"number"}
        name={name}
        id={name}
        value={value}
        onChange={handleInputChange}
      />
    </>
  );
};

export default PriceOptions;
