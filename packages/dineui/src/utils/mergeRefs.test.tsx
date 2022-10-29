import { FC, useRef } from 'react'

import { render } from '@testing-library/react'

import { mergeRefs } from './mergeRefs'

test('mergeRefs', () => {
  const Component1: FC = () => {
    const ref1 = useRef<HTMLDivElement | null>(null)
    const ref2 = useRef<HTMLDivElement | null>(null)

    const ref = mergeRefs<HTMLDivElement | null>(ref1, ref2)

    return <div ref={ref} />
  }

  render(<Component1 />)

  //   const Dummy = forwardRef(function Dummy(_, ref) {
  //     useImperativeHandle(ref, () => 'refValue')
  //     return null
  //   })
  //   const refAsFunc: RefCallback<void> = jest.fn()
  //   const refAsObj: MutableRefObject<string | null> = { current: '' }
  //   const Example: FC<{ visible: boolean }> = ({ visible }) => {
  //     return visible ? <Dummy ref={mergeRefs<string>([refAsObj])} /> : null
  //   }
  //   const { rerender } = render(<Example visible />)
  //   expect(refAsFunc).toHaveBeenCalledTimes(1)
  //   expect(refAsFunc).toHaveBeenCalledWith('refValue')
  //   expect(refAsObj.current).toBe('refValue')
  //   rerender(<Example visible={false} />)
  //   expect(refAsFunc).toHaveBeenCalledTimes(2)
  //   expect(refAsFunc).toHaveBeenCalledWith(null)
  //   expect(refAsObj.current).toBe(null)
})
