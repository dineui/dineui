// eslint-disable-next-line import/no-unresolved
import { ClickToComponent } from 'click-to-react-component'
import { useEffect, useState } from 'react'
import copy from 'copy-to-clipboard'
import satori, { SatoriOptions } from 'satori'

async function init() {
  const font = await fetch('/inter-latin-ext-400-normal.woff').then((res) => res.arrayBuffer())

  return [
    {
      name: 'Inter',
      data: font,
      weight: 400,
      style: 'normal',
    },
  ] as SatoriOptions['fonts']
}

const HomePage = () => {
  const [svgString, setSvgString] = useState('')

  const content = (
    <div
      style={{
        background: 'white',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: 1200,
        height: 630,
      }}>
      <div
        style={{
          fontSize: 128,
          display: 'flex',
          color: 'black',
        }}>
        Dine
      </div>
    </div>
  )

  useEffect(() => {
    init().then((fonts) => {
      satori(content, {
        height: 630,
        width: 1200,
        fonts,
        embedFont: false,
      }).then((svg) => {
        setSvgString(svg)
      })
    })
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Content</h1>
      {content}
      <button onClick={() => copy(svgString)}>copy</button>
      <ClickToComponent />
    </div>
  )
}

export default HomePage
