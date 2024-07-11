import { Row } from "@/styles/container/container.styles";
import styled from "styled-components";

export const PriceRadioButtonLabelContainer = styled(Row)`
  background-color: ${({ theme }) => theme.colors.grayTurquoise};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.sizes[18]};
`;

export const PriceRadioButtonLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  cursor: pointer;
  flex: 1;
  text-align: center;
  transition: background-color 0.2s;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  white-space: pre-wrap;

  &:hover {
    background-color: ${({ theme }) => theme.colors.grayTurquoiseHover};
  }
`;

export const PriceRadioInput = styled.input`
  position: absolute;
  display: none;

  &:checked + ${PriceRadioButtonLabel} {
    background-color: ${({ theme }) => theme.colors.brand};
    color: white;
  }
`;
