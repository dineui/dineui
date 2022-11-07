import { FC, ReactNode } from 'react'

export interface InputProps {
  children?: ReactNode
}

export const Input: FC<InputProps> = (props) => {
  const { children } = props

  return <div>Input {children}</div>
}
