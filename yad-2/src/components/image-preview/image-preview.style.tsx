import Image from "next/image";
import styled from "styled-components";

export const ItemImageContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
`;

export const ItemImage = styled(Image)`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
