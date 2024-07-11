import { Input } from "@components/upload-item/upload-item.style";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  gap: 10px;
`;

export const DimensionLabel = styled.label`
  margin-bottom: 5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedText};
  display: block;
  margin-bottom: ${({ theme }) => theme.sizes[6]};
  font-size: ${({ theme }) => theme.typography.fontSize[18]};
  font-weight: ${({ theme }) => theme.typography.fontWeight.bold};
`;

export const DimensionInput = styled(Input)`
  width: 80px;
`;
