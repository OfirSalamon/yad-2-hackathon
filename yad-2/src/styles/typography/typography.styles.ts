import styled, { css } from "styled-components";

interface TextProps {
  s?: number;
  w?: string;
  c?: string;
  mb?: number;
  lh?: number;
}

const Text = styled.span<TextProps>`
  max-width: 100%;
  vertical-align: middle;
  ${({ theme, s, w, c, mb, lh }) => css`
    font-size: ${s ? theme.typography.fontSize[s] : "inherit"};
    line-height: ${lh ? theme.sizes[lh] : "inherit"};
    margin-bottom: ${mb ? theme.sizes[mb] : "unset"};
    font-weight: ${w
      ? theme.typography.fontWeight[w]
      : theme.typography.fontWeight.regular};
    color: ${c ? theme.colors[c] : "inherit"};
  `}
`;

const Link = styled(Text)`
  cursor: pointer;
`;

export { Text, Link };
