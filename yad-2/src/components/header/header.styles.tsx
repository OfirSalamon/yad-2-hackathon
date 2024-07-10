import styled, { css } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  ${({ theme }) => css`
    background: ${theme.colors.white};
    box-shadow: ${theme.boxShadow[2]};
  `}
`;

export { Container };
