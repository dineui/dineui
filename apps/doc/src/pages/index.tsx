import { useTheme } from '@emotion/react'
// eslint-disable-next-line import/no-unresolved
import { ClickToComponent } from 'click-to-react-component'
import { Box } from 'dineui'

const HomePage = () => {
  const theme = useTheme()

  console.log('theme', theme)

  return (
    <Box
      xs={{
        color: 'red',
      }}>
      h1
      <ClickToComponent />
    </Box>
  )
}

export default HomePage
