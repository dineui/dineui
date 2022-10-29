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
        background: '#111111',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        width: 1200,
        height: 630,
        padding: 100,
        position: 'relative',
      }}>
      <svg
        width='95'
        height='87'
        viewBox='0 0 95 87'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M21.0643 67.8046C21.4246 67.8101 21.781 67.8101 22.1335 67.8046C22.8837 67.7928 23.6164 67.756 24.3317 67.6942C29.9969 67.2049 34.5712 65.1521 38.1212 61.6021C42.33 57.3933 44.4344 51.1908 44.4344 42.9946C44.4344 35.02 42.33 28.8175 38.232 24.6086C34.7652 21.0481 30.1094 19.0729 24.3317 18.5489C23.2797 18.4534 22.1904 18.4061 21.0643 18.4061H20.1783V67.8046H21.0643ZM24.3317 63.5234C28.9849 63.055 32.495 61.3544 35.1843 58.6652C38.3583 55.4911 40.281 50.5133 40.281 42.9946C40.281 35.7158 38.3667 30.7008 35.2561 27.5062C32.703 24.884 29.1646 23.2234 24.3317 22.721V63.5234ZM0.629318 0.629333H20.289C26.881 0.629333 33.0116 1.5705 38.5158 3.52755L37.1244 7.441C32.1402 5.66886 26.4915 4.78279 20.289 4.78279H4.78278V81.4279H20.289C26.4915 81.4279 32.1402 80.5419 37.1244 78.7697C41.9978 76.9976 46.2066 74.3394 49.7509 71.0166C53.1844 67.6938 55.8426 63.7065 57.7255 58.9439C59.4977 54.292 60.4945 48.9756 60.4945 42.9946C60.4945 37.0136 59.4977 31.6972 57.7255 26.9346C55.8426 22.2827 53.1844 18.2954 49.7509 14.9726C46.3174 11.6498 42.1085 9.21315 37.1244 7.441L38.5158 3.52755C43.9437 5.45748 48.6986 8.17435 52.6393 11.9879C56.5102 15.734 59.4863 20.2146 61.5756 25.3762L61.5977 25.4309L61.6182 25.4861C63.5701 30.7317 64.6479 36.5404 64.6479 42.9946C64.6479 49.4424 63.5721 55.2637 61.6069 60.4225L61.5976 60.4468L61.5881 60.4709C59.497 65.7602 56.515 70.2506 52.6393 74.0013L52.6156 74.0242L52.5916 74.0467C48.6495 77.7424 43.9604 80.7034 38.5438 82.6731L38.5159 82.6833C33.0116 84.6403 26.881 85.5814 20.289 85.5814H0.629318V0.629333ZM90.4283 82.7696C87.7756 85.5619 84.3177 86.7997 80.6907 86.7997C77.0636 86.7997 73.6058 85.5619 70.953 82.7696C68.3472 80.1393 67.1227 76.7336 67.1227 73.121C67.1227 69.488 68.3611 66.0641 70.9974 63.4278C73.5284 60.8968 76.792 59.4423 80.6907 59.4423C84.4526 59.4423 87.8344 60.8782 90.3839 63.4278C93.0202 66.0641 94.2586 69.488 94.2586 73.121C94.2586 76.7336 93.0341 80.1393 90.4283 82.7696ZM73.9344 79.8773C72.1622 78.1052 71.2762 75.7792 71.2762 73.121C71.2762 70.4628 72.1622 68.1369 73.9344 66.3647C75.7065 64.5926 77.9217 63.5958 80.6907 63.5958C83.3489 63.5958 85.6748 64.5926 87.447 66.3647C89.2191 68.1369 90.1052 70.4628 90.1052 73.121C90.1052 75.7792 89.2191 78.1052 87.447 79.8773C85.6748 81.7602 83.3489 82.6463 80.6907 82.6463C78.0325 82.6463 75.7065 81.7602 73.9344 79.8773Z'
          fill='white'
        />
      </svg>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          position: 'absolute',
          left: 0,
          bottom: 0,
        }}>
        <div
          style={{
            fontSize: 100,
            display: 'flex',
            color: 'white',
          }}>
          Product Name
        </div>

        <div
          style={{
            fontSize: 100,
            display: 'flex',
            color: 'white',
            fontWeight: 'bold',
          }}>
          Product Name
        </div>
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

        document.getElementById('svg-preview').innerHTML = svgString
      })
    })
  }, [])

  return (
    <div style={{ padding: '2rem', display: 'grid', gridGap: 80 }}>
      {content}

      <div id='svg-preview' />

      <div style={{ width: 120 }}>
        <button onClick={() => copy(svgString)}>copy</button>
      </div>

      <ClickToComponent />
    </div>
  )
}

export default HomePage
