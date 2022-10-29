import { MutableRefObject, RefCallback } from 'react'

export function mergeRefs<T = unknown>(...refs: MutableRefObject<T | null>[]): RefCallback<T> {
  return (value) => {
    for (let index = 0; index < refs.length; index++) {
      const ref = refs[index]

      ref.current = value

      // if (typeof ref === 'function') {
      //   ref(value)
      // } else if (ref !== null && typeof ref !== 'string') {
      //   ref.current = value
      // }
    }
  }
}
