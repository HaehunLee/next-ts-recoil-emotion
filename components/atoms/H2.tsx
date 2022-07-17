import { css, SerializedStyles } from '@emotion/react';
import styled from '@emotion/styled';
import {
  // color,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  // ColorProps,
  ShadowProps,
  shadow,
  border,
  BorderProps,
  typography,
  TypographyProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  BackgroundProps,
  background,
  compose,
} from 'styled-system';

import { ColorProps, color } from '#/interfaces/styled';

export interface H2Props
  extends SpaceProps,
    LayoutProps,
    ColorProps,
    ShadowProps,
    BorderProps,
    TypographyProps,
    FlexboxProps,
    PositionProps,
    BackgroundProps {
  // styled-system에 없는 스타일 타입 정의
  gap?: string;
  // emotion/css 타입 정의
  css?: SerializedStyles;
}

const H2 = styled.h2<H2Props>`
  font-size: 24px;
  line-height: 32px;
  font-weight: 800;
  word-break: keep-all;

  ${({ gap }) =>
    gap &&
    css`
      gap: ${gap};
    `}

  ${compose(
    space,
    layout,
    color,
    shadow,
    border,
    typography,
    flexbox,
    position,
    background,
  )}
`;

export default H2;
