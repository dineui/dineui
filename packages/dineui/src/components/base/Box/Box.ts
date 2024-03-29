import { DetailedHTMLProps, HTMLAttributes, ReactNode, forwardRef } from 'react'

import { jsx } from '@emotion/react'

import { UseBoxParams, useBox } from './useBox'

type Div = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export interface BoxProps extends UseBoxParams, Div {
  children?: ReactNode | string
  as?: string
}

export const Box = forwardRef<HTMLElement, BoxProps>((props, ref) => {
  const { as = 'div', ...useBoxProps } = props
  const { boxProps, otherProps } = useBox(useBoxProps)

  return jsx(as, {
    ref,
    ...boxProps,
    ...otherProps,
  })
})
