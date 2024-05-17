import { ImageResponse } from 'next/og'
import AppData from '../package.json'

export const runtime = 'edge'

// Image metadata
export const alt = AppData.name
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

const getFont = async () => {
  const res = await fetch(
    new URL('fonts/IBM_Plex_Mono/IBMPlexMono-Regular.ttf', import.meta.url),
  )
  return await res.arrayBuffer()
}

// Image generation
export default async function Image() {
  // Font
  const ibmPlexMono = getFont()

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'none',
          color: 'none',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '8px 48px',
          fontFamily: 'IBM_Plex_Mono',
          textTransform: 'uppercase',
        }}
      >
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            fontSize: 14,
            fontWeight: 400,
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1715941914/xxuftuicczyae924nvjb.png" />
          </div>
          <div
            style={{
              justifySelf: 'center',
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 32,
              fontWeight: 400,
            }}
          >
            {AppData.name}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          ></div>
        </div>
      </div>
    ),
    // ImageResponse options
    {
      ...size,
      fonts: [
        {
          name: 'IBM_Plex_Mono',
          data: await ibmPlexMono,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
