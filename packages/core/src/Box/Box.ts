import { jsx } from '@emotion/react'
import { useBox, UseBoxParams } from './useBox'

export interface BoxProps extends UseBoxParams {
  id: string
}

export const Box = () => {
  const props = useBox({})

  return jsx('div', {
    ...props,
  })
}
