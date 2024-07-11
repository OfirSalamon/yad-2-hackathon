import { Col } from "@/styles/container/container.styles";
import styled, { css } from "styled-components";

export const Container = styled(Col)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.linen};
    padding: ${theme.sizes[48]};
  `}
`;

export const ContentContainer = styled(Col)`
  width: 100%;
  text-align: center;
`;

export const ImageContainer = styled.div`
  margin-bottom: 30px;
  width: 100%;
`;
