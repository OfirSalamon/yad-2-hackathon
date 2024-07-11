import React, { useEffect, useState } from "react";
import {
  DropdownContainer,
  DropdownContent,
  DropdownHeader,
  DropdownItem,
} from "./drop-down.style";
import { IOptions } from "@/types";

interface DropdownProps {
  options: IOptions[];
  onSelect: (value: string) => void;
  selectedOption?: string;
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  onSelect,
  selectedOption,
}) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string | null>(
    selectedOption ?? null
  );
  useEffect(() => {
    if (!selectedOption) return;
    setSelected(selectedOption);
  }, [selectedOption]);
  const handleSelect = (option: string) => {
    onSelect(option);
    setSelected(option);
    setShow(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setShow(!show)}>
        {selected ?? "בחר"}
      </DropdownHeader>
      <DropdownContent show={show}>
        {options.map(({ name }) => (
          <DropdownItem key={name} onClick={() => handleSelect(name)}>
            {name}
          </DropdownItem>
        ))}
      </DropdownContent>
    </DropdownContainer>
  );
};

export default Dropdown;
