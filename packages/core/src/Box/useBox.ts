import { ReactNode } from 'react'

export interface UseBoxParams {
  xs?: {}
  s?: {}
  m?: {}
  l?: {}
  xl?: {}
  xxl?: {}
  xxxl?: {}
  children?: ReactNode | string
}

export function useBox(params?: UseBoxParams) {
  return {
    css: {},
    ...params,
  }
}
