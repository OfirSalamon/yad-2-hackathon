import { Col } from "@/styles/container/container.styles";
import styled, { css } from "styled-components";

export const Container = styled(Col)`
  position: fixed;
  top: 20px;
  right: 0;
  width: 100%;
  height: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    padding: ${theme.sizes[30]};
    padding-top: ${theme.sizes[40]};
  `}
`;

export const UploadImageContainer = styled(Col)`
  height: 130px;
`;

export const MainContainer = styled(Col)`
  width: 100%;
  text-align: center;
`;

export const ContentContainer = styled(Col)`
  width: 100%;
  text-align: center;

  ${({ theme }) => css`
    padding: ${theme.sizes[40]};
    padding-top: unset;
  `}
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
