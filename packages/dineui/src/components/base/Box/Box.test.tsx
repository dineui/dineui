import renderer from 'react-test-renderer'

import { Box } from './Box'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

describe('Box component', () => {
  test('general usage', () => {
    const component = renderer.create(<Box>box</Box>)

    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('xs props', () => {
    const component = renderer.create(<Box xs={{ width: 100 }}>box</Box>)

    const tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('responsive props', () => {
    const component = renderer.create(
      <Box
        xs={{ width: 1 }}
        s={{ width: 2 }}
        m={{ width: 3 }}
        l={{ width: 4 }}
        xl={{ width: 5 }}
        xxl={{ width: 6 }}
        xxxl={{ width: 7 }}>
        box
      </Box>,
    )

    const tree = toJson(component)

    expect(tree).toMatchSnapshot()
  })

  test('click props', () => {
    const component = renderer.create(
      <Box
        onClick={() => {
          console.log('ok')
        }}>
        box
      </Box>,
    )

    const tree = toJson(component)

    expect(tree).toMatchSnapshot()
  })
})
