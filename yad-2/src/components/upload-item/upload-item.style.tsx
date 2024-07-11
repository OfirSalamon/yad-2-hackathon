import { Row } from "@/styles/container/container.styles";
import { Text } from "@/styles/typography/typography.styles";
import Image from "next/image";
import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.sizes[20]};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.sizes[40]};
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

export const SwitchTextContainer = styled.div`
  padding-top: 10px;
`;

export const Textarea = styled.textarea<{ height?: string }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.grayTurquoiseHover};
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  height: ${({ height }) => height && height};
  font-family: Rubik, sans-serif;
  &:focus {
    outline: none !important;
    border-color: ${({ theme }) => theme.colors.brand};
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholderText};
    font-size: ${({ theme }) => theme.typography.fontSize[18]};
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
    background-color: ${({ theme }) => theme.colors.grayTurquoiseHover};
  }
`;

export const Button = styled.button<{ $fw?: boolean }>`
  padding: 10px 15px;
  font-size: 16px;

  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-family: Rubik, sans-serif;
  ${({ theme, $fw }) => css`
    ${$fw && `width: 100%;`}
    background-color: ${theme.colors.brand};
    border-radius: ${theme.borderRadius[26]};
    margin-top: ${theme.sizes[20]};
    font-weight: ${theme.typography.fontWeight.bold};
  `}
`;

export const PriceRadioButtonsContainer = styled.div`
  display: flex;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  overflow: hidden;
`;

export const DimensionLabel = styled.label`
  margin-bottom: 5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedText};
  display: block;
  margin-bottom: ${({ theme }) => theme.sizes[6]};
  font-size: ${({ theme }) => theme.typography.fontSize[18]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const DimensionInput = styled(Input)`
  width: 80px;
`;

export const DimensionContainer = styled.div`
  display: flex;
  gap: 10px;
`;
