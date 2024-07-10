import { Col, Row } from "@/styles/container/container.styles";
import styled, { css } from "styled-components";

const Container = styled(Row)`
  justify-content: space-between;
  width: 100%;
  align-items: center;
  height: 5rem;
  ${({ theme }) => css`
    padding: ${theme.sizes[25]};
    background: ${theme.colors.white};
    box-shadow: ${theme.boxShadow[2]};
  `}
`;

const Circle = styled(Row)`
  border-radius: 999px;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  ${({ theme }) => css`
    padding: ${theme.sizes[1]};
    background: ${theme.colors.linen};
    border: 1px solid ${theme.colors.safetyOrange};
  `};
`;

export { Container, Circle };
