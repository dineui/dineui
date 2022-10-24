import { Box } from 'dineui'
import { useTheme } from '@emotion/react'

const HomePage = () => {
  const theme = useTheme()

  console.log('theme', theme)

  return (
    <Box
      xs={{
        color: 'red',
      }}>
      h1
    </Box>
  )
}

export default HomePage
