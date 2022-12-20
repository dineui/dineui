import { useTheme } from '@emotion/react'
// eslint-disable-next-line import/no-unresolved
import { ClickToComponent } from 'click-to-react-component'
import * as dineui from 'dineui'

const HomePage = () => {
  const theme = useTheme()

  console.log('theme', theme, dineui)

  return (
    <div>
      h1
      <ClickToComponent />
    </div>
  )
}

export default HomePage
