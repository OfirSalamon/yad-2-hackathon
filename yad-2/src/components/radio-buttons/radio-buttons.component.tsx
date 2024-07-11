import React, { ChangeEvent } from "react";
import {
  RadioButtonLabel,
  RadioButtonsContainer,
  RadioInput,
} from "./radio-buttons.style";

interface Props {
  options: any;
  name: string;
  value: boolean;
  handleInputChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void;
}

const RadioButtons = ({ options, name, value, handleInputChange }: Props) => {
  return (
    <RadioButtonsContainer>
      {options?.map((option: any) => (
        <React.Fragment key={option.value}>
          <RadioInput
            type="radio"
            name={name}
            id={`${name}-${option.value}`}
            value={option.value}
            checked={value === option.value}
            onChange={handleInputChange}
          />
          <RadioButtonLabel
            htmlFor={`${name}-${option.value}`}
            checked={value === option.value}
          >
            {option.value}
          </RadioButtonLabel>
        </React.Fragment>
      ))}
    </RadioButtonsContainer>
  );
};

export default RadioButtons;
