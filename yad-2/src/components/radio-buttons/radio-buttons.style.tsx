import styled, { css } from "styled-components";

export const RadioButtonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.sizes[16]};
`;

export const RadioInput = styled.input`
  display: none;
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
