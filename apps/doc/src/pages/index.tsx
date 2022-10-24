import { Box } from 'dineui'
import { useTheme } from '@emotion/react'
import { ClickToComponent } from 'click-to-react-component'

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
