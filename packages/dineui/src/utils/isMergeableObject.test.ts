import { isMergeableObject } from './isMergeableObject'

test('isMergeableObject', () => {
  expect(isMergeableObject({})).toEqual(true)
  expect(isMergeableObject(2)).toEqual(false)
  expect(isMergeableObject([])).toEqual(true)
  expect(isMergeableObject(/ab+c/)).toEqual(false)
  expect(isMergeableObject(new Date())).toEqual(false)
})
