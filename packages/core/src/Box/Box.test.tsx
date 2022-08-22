import { Box } from './Box'
import renderer from 'react-test-renderer'

function toJson(component: renderer.ReactTestRenderer) {
  const result = component.toJSON()
  expect(result).toBeDefined()
  expect(result).not.toBeInstanceOf(Array)
  return result as renderer.ReactTestRendererJSON
}

describe('Box component', () => {
  test('general usage', () => {
    const component = renderer.create(<Box>box</Box>)

    let tree = toJson(component)
    expect(tree).toMatchSnapshot()
  })

  test('xs props', () => {
    const component = renderer.create(<Box xs={{ width: 100 }}>box</Box>)

    let tree = toJson(component)
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
})
