import { render, screen } from '@testing-library/react'
import { Box } from './Box'

describe('useBoolean()', () => {
  test('should use boolean', () => {
    render(<Box>box</Box>)

    expect(screen.getByText(/box/i)).toBeDefined()
  })
})
