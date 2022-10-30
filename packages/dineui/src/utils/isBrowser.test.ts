import { isBrowser } from './isBrowser'

test('isBrowserResult', () => {
  expect(isBrowser()).toEqual(true)
})
