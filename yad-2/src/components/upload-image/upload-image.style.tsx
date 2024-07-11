import styled, { css } from "styled-components";

export const FileInput = styled.input`
  display: none;
`;

export const UploadImagePreview = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 150px;
  height: 60px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px dashed ${({ theme }) => theme.colors.grayTurquoiseHover};
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.mutedText};
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
  }
`;
