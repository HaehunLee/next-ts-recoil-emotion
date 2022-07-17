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

export interface ButtonProps
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

const Button = styled.button<ButtonProps>`
  word-break: keep-all;
  line-height: 1.2;

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

export default Button;
