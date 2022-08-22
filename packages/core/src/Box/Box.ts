import { jsx } from '@emotion/react'
import { FC, ReactNode } from 'react'
import { useBox, UseBoxParams } from './useBox'

export interface BoxProps extends UseBoxParams {
  children?: ReactNode | string
  as?: string
}

export const Box: FC<BoxProps> = (props) => {
  const { as = 'div', ...useBoxProps } = props
  const { boxProps, otherProps } = useBox(useBoxProps)

  return jsx(as, {
    ...boxProps,
    ...otherProps,
  })
}
