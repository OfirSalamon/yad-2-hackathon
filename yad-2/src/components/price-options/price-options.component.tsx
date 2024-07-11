import React, { ChangeEvent } from "react";
import {
  PriceRadioButtonLabel,
  PriceRadioButtonLabelContainer,
  PriceRadioInput,
} from "./price-options.style";
import { Input } from "@components/upload-item/upload-item.style";

interface Props {
  priceOptions: any;
  currPrice: string;
  above_market_price: number;
  below_market_price: number;
  market_price: number;
  name: string;
  value: number;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
  handlePriceOptionChange: (price?: string) => void;
}

const PriceOptions = ({
  priceOptions,
  currPrice,
  above_market_price,
  below_market_price,
  market_price,
  handlePriceOptionChange,
  name,
  value,
  handleInputChange,
}: Props) => {
  const map: { [key: string]: number | undefined } = {
    [priceOptions.options[0].label]: below_market_price,
    [priceOptions.options[1].label]: market_price,
    [priceOptions.options[2].label]: above_market_price,
    [priceOptions.options[3].label]: undefined,
  };

  const currPriceNum = parseFloat(currPrice);
  const isCurrPriceInMap = Object.values(map).includes(currPriceNum);
  return (
    <>
      <PriceRadioButtonLabelContainer>
        {Object.keys(map)?.map((name: string, index) => {
          const isSelected =
            name === "אחר" ? !isCurrPriceInMap : +currPrice === map[name];

          return (
            <React.Fragment key={index}>
              <PriceRadioInput
                type="radio"
                name={priceOptions.name}
                id={`${priceOptions.name}-${name}`}
                value={map[name]}
                checked={isSelected}
                onChange={() => handlePriceOptionChange(`${map[name]}`)}
              />
              <PriceRadioButtonLabel htmlFor={`${priceOptions.name}-${name}`}>
                {name}
                {map[name] && `\n(₪${map[name]})`}
              </PriceRadioButtonLabel>
            </React.Fragment>
          );
        })}
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
