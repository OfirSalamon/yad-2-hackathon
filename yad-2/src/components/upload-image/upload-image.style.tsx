import styled, { css } from "styled-components";

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
