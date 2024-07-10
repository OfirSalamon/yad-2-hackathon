import { Row } from "@/styles/container/container.styles";
import styled, { css } from "styled-components";

const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.brand};
  `}
`;

export { Container };
