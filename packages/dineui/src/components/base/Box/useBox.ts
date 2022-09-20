import { CSSObject } from '@emotion/react'

export interface UseBoxParams {
  xs?: CSSObject
  s?: CSSObject
  m?: CSSObject
  l?: CSSObject
  xl?: CSSObject
  xxl?: CSSObject
  xxxl?: CSSObject
}

export const mediaBreakpoints = {
  xsmall: 0,
  small: 414,
  medium: 960,
  large: 1200,
  xlarge: 1440,
  xxlarge: 1920,
  xxxlarge: 2560,
}

export const mediaQuery = (breakpoint: number) => {
  return `@media (min-width: ${breakpoint}px)`
}

export function useBox(params: UseBoxParams = {}): any {
  const { xs, s, m, l, xl, xxl, xxxl, ...otherProps } = params

  const interStyle = {
    ...xs,
    [mediaQuery(mediaBreakpoints.small)]: s,
    [mediaQuery(mediaBreakpoints.medium)]: m,
    [mediaQuery(mediaBreakpoints.large)]: l,
    [mediaQuery(mediaBreakpoints.xlarge)]: xl,
    [mediaQuery(mediaBreakpoints.xxlarge)]: xxl,
    [mediaQuery(mediaBreakpoints.xxxlarge)]: xxxl,
  }

  return {
    boxProps: {
      css: interStyle,
    },
    otherProps,
  }
}
