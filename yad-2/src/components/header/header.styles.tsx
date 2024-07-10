import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.sizes[1]};
    background: ${theme.colors.white};
    box-shadow: ${theme.boxShadow[2]};
  `}
`;

export { Container };
