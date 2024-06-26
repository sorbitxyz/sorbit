import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 192,
  height: 192,
}
export const contentType = 'image/png'

// Image generation
// function can receive {params} prop to access dynamic route params
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,

          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img
          alt="image"
          width={40}
          height={40}
          src="https://res.cloudinary.com/seunsanyaa/image/upload/v1715544221/Logomark_annwgn.png"
        />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
