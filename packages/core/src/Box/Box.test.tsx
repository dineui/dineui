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

  // test('style', () => {
  //   render(
  //     <Box
  //       xs={{
  //         width: 100,
  //       }}>
  //       box
  //     </Box>,
  //   )
  // })
})
