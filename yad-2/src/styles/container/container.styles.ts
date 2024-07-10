import styled, { css } from "styled-components";

interface FlexContainerProps {
  $gap?: string | number;
  $wrp?: boolean;
  $aic?: boolean;
  $aife?: boolean;
  $aifs?: boolean;
  $jcsb?: boolean;
  $jcc?: boolean;
  $jce?: boolean;
  $oxs?: boolean;
  $oys?: boolean;
  $fw?: boolean;
  $fh?: boolean;
  $gr?: boolean;
}

const Row = styled.div<FlexContainerProps>`
  display: flex;
  ${({
    theme,
    $gap,
    $wrp,
    $aic,
    $aife,
    $aifs,
    $jcsb,
    $jcc,
    $jce,
    $oxs,
    $oys,
    $fw,
    $fh,
    $gr,
  }) => css`
    ${$gap && `gap: ${theme.sizes[$gap]};`}
    ${$wrp && `flex-wrap: wrap;`}
    ${$aic && `align-items: center;`}
    ${$aife && `align-items: flex-end;`}
    ${$aifs && `align-items: flex-start;`}
    ${$jcsb && `justify-content: space-between;`}
    ${$jcc && `justify-content: center;`}
    ${$jce && `justify-content: end;`}
    ${$oxs && `overflow-x: scroll;`}
    ${$oys && `overflow-y: scroll;`}
    ${$fw && `width: 100%;`}
    ${$fh && `height: 100%;`}
    ${$gr && `flex: 1;`}
  `}
`;

const Col = styled(Row)`
  flex-direction: column;
`;

export { Col, Row };
