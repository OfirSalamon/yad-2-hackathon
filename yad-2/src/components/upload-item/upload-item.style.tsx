import { Row } from "@/styles/container/container.styles";
import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.sizes[40]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes[48]};
`;

export const Label = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.sizes[18]};
  font-size: ${({ theme }) => theme.typography.fontSize[24]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none !important;
    border-color: ${({ theme }) => theme.colors.brand};
  }
`;

export const Textarea = styled.textarea`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  &:focus {
    outline: none !important;
    border-color: ${({ theme }) => theme.colors.brand};
  }
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.grayTurquoise};
  border: 2px dashed #ccc;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mutedText};
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d0d0d0;
  }
`;

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.brand};
  border-radius: ${({ theme }) => theme.borderRadius[26]};
  margin-top: ${({ theme }) => theme.sizes[20]};
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
`;

export const RadioButtonLabel = styled.label<{ checked: boolean }>`
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s;

  ${({ checked, theme }) =>
    css`
      background-color: ${checked
        ? theme.colors.brandOpacity
        : theme.colors.background};
      color: ${checked ? theme.colors.brand : "black"};
      border: 1px solid ${checked ? theme.colors.brand : "#aaa"};
      padding: ${theme.sizes[14]};
      border-radius: ${theme.borderRadius.sm};
      &:hover {
        background-color: ${theme.colors.brandOpacity};
        border-color: ${theme.colors.brand};
        color: ${theme.colors.brand};
      }
    `}
`;

export const ItemImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const ItemImage = styled(Image)`
  height: 200px;
  width: 100%;
  object-fit: contain;
`;

export const RadioButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.sizes[16]};
`;

export const RadioInput = styled.input`
  display: none;
`;

export const PriceRadioButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
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

  &:hover {
    background-color: #f0f0f0;
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

export const PriceRadioButtonLabelContainer = styled(Row)`
  background-color: ${({ theme }) => theme.colors.grayTurquoise};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;
