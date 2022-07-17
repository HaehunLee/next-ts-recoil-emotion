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

export interface DivProps
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

const Div = styled.div<DivProps>`
  word-break: keep-all;
  line-height: 1.2;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

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

export default Div;
