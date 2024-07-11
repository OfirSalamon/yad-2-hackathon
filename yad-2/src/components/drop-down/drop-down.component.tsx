import React, { useState } from "react";
import {
  DropdownContainer,
  DropdownContent,
  DropdownHeader,
  DropdownItem,
} from "./drop-down.style";

interface DropdownProps {
  options: { id: number; name: string }[];
  onSelect: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState<string>();
  const handleSelect = (option: string) => {
    onSelect(option);
    setSelected(option);
    setShow(false);
  };

  return (
    <DropdownContainer>
      <DropdownHeader onClick={() => setShow(!show)}>
        {selected ?? "select"}
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
