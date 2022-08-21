import { jsx } from '@emotion/react'
import { FC, ReactNode } from 'react'
import { useBox, UseBoxParams } from './useBox'

export interface BoxProps extends UseBoxParams {
  children?: ReactNode | string
}

export const Box: FC<BoxProps> = (props) => {
  const boxProps = useBox(props)

  return jsx('div', {
    ...boxProps,
  })
}
