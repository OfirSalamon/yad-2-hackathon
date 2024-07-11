import { Col, Row } from "@/styles/container/container.styles";
import styled, { css } from "styled-components";

const SpinnerOverlay = styled(Row)`
  z-index: 2;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

interface SpinnerContainerProps {
  size?: number;
}

const SpinnerContainer = styled.div<SpinnerContainerProps>`
  position: absolute;
  top: 50%;
  display: inline-block;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  width: 5rem;
  height: 5rem;
  ${({ theme, size = 2 }) => css`
    border: ${size * 2.5}px solid ${theme.colors.safetyOrange};
    border-top-color: ${theme.colors.linen};
  `}

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

const TextContainer = styled(Col)`
  position: absolute;
  top: 58%;
`;

export { SpinnerOverlay, SpinnerContainer, TextContainer };
