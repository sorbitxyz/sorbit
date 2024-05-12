'use client'
import { useDeviceDetection } from 'hooks/use-device-detection'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Header } from '../header'
import { Paragraph } from '../paragraph'
import s from './powered.module.scss'
export function PoweredBy({}) {
  const { isMobile } = useDeviceDetection()

  return (
    <div className={s.container}>
      {isMobile ? (
        <>
          <Carousel
            autoPlay={true}
            showThumbs={false}
            showIndicators={false}
            infiniteLoop={true}
            showArrows={false}
            showStatus={false}
            className={s.maincorousel}
          >
            <div className={s.cor}>
              <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1715540685/Twitch-TikTok_5_rpropz.png" />
            </div>
            <div className={s.cor}>
              <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1715540439/Twitch-TikTok_2_acbxed.png" />
            </div>
            <div className={s.cor}>
              <img src="https://res.cloudinary.com/seunsanyaa/image/upload/v1715540198/Twitch-TikTok_1_dv5b9q.png" />
            </div>
          </Carousel>
          <svg
            width="65"
            height="65"
            viewBox="0 0 65 65"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_26_2276)">
              <rect
                x="7.36275"
                y="4.14711"
                width="50.2745"
                height="50.2745"
                rx="13.9651"
                stroke="url(#paint0_linear_26_2276)"
                stroke-width="0.798008"
                shape-rendering="crispEdges"
              />
              <g filter="url(#filter1_dd_26_2276)">
                <path
                  d="M28.031 7.07979H36.9687C40.0995 7.07979 42.4392 7.0799 44.2952 7.23154C46.1495 7.38304 47.5087 7.68512 48.6806 8.28226C50.7565 9.33998 52.4442 11.0277 53.502 13.1036C54.0991 14.2756 54.4012 15.6347 54.5527 17.4891C54.7043 19.345 54.7044 21.6847 54.7044 24.8155V33.7532C54.7044 36.884 54.7043 39.2237 54.5527 41.0797C54.4012 42.934 54.0991 44.2932 53.502 45.4651C52.4442 47.541 50.7565 49.2287 48.6806 50.2865C47.5087 50.8836 46.1495 51.1857 44.2952 51.3372C42.4392 51.4888 40.0995 51.4889 36.9687 51.4889H28.031C24.9002 51.4889 22.5605 51.4888 20.7046 51.3372C18.8502 51.1857 17.4911 50.8836 16.3191 50.2865C14.2432 49.2287 12.5555 47.541 11.4978 45.4651C10.9006 44.2932 10.5985 42.934 10.447 41.0797C10.2954 39.2237 10.2953 36.884 10.2953 33.7532V24.8155C10.2953 21.6847 10.2954 19.345 10.447 17.4891C10.5985 15.6347 10.9006 14.2756 11.4978 13.1036C12.5555 11.0277 14.2432 9.33998 16.3191 8.28226C17.4911 7.68512 18.8502 7.38304 20.7046 7.23154C22.5605 7.0799 24.9002 7.07979 28.031 7.07979Z"
                  fill="white"
                />
                <path
                  d="M28.031 7.07979H36.9687C40.0995 7.07979 42.4392 7.0799 44.2952 7.23154C46.1495 7.38304 47.5087 7.68512 48.6806 8.28226C50.7565 9.33998 52.4442 11.0277 53.502 13.1036C54.0991 14.2756 54.4012 15.6347 54.5527 17.4891C54.7043 19.345 54.7044 21.6847 54.7044 24.8155V33.7532C54.7044 36.884 54.7043 39.2237 54.5527 41.0797C54.4012 42.934 54.0991 44.2932 53.502 45.4651C52.4442 47.541 50.7565 49.2287 48.6806 50.2865C47.5087 50.8836 46.1495 51.1857 44.2952 51.3372C42.4392 51.4888 40.0995 51.4889 36.9687 51.4889H28.031C24.9002 51.4889 22.5605 51.4888 20.7046 51.3372C18.8502 51.1857 17.4911 50.8836 16.3191 50.2865C14.2432 49.2287 12.5555 47.541 11.4978 45.4651C10.9006 44.2932 10.5985 42.934 10.447 41.0797C10.2954 39.2237 10.2953 36.884 10.2953 33.7532V24.8155C10.2953 21.6847 10.2954 19.345 10.447 17.4891C10.5985 15.6347 10.9006 14.2756 11.4978 13.1036C12.5555 11.0277 14.2432 9.33998 16.3191 8.28226C17.4911 7.68512 18.8502 7.38304 20.7046 7.23154C22.5605 7.0799 24.9002 7.07979 28.031 7.07979Z"
                  fill="url(#paint1_linear_26_2276)"
                />
                <path
                  d="M28.031 7.07979H36.9687C40.0995 7.07979 42.4392 7.0799 44.2952 7.23154C46.1495 7.38304 47.5087 7.68512 48.6806 8.28226C50.7565 9.33998 52.4442 11.0277 53.502 13.1036C54.0991 14.2756 54.4012 15.6347 54.5527 17.4891C54.7043 19.345 54.7044 21.6847 54.7044 24.8155V33.7532C54.7044 36.884 54.7043 39.2237 54.5527 41.0797C54.4012 42.934 54.0991 44.2932 53.502 45.4651C52.4442 47.541 50.7565 49.2287 48.6806 50.2865C47.5087 50.8836 46.1495 51.1857 44.2952 51.3372C42.4392 51.4888 40.0995 51.4889 36.9687 51.4889H28.031C24.9002 51.4889 22.5605 51.4888 20.7046 51.3372C18.8502 51.1857 17.4911 50.8836 16.3191 50.2865C14.2432 49.2287 12.5555 47.541 11.4978 45.4651C10.9006 44.2932 10.5985 42.934 10.447 41.0797C10.2954 39.2237 10.2953 36.884 10.2953 33.7532V24.8155C10.2953 21.6847 10.2954 19.345 10.447 17.4891C10.5985 15.6347 10.9006 14.2756 11.4978 13.1036C12.5555 11.0277 14.2432 9.33998 16.3191 8.28226C17.4911 7.68512 18.8502 7.38304 20.7046 7.23154C22.5605 7.0799 24.9002 7.07979 28.031 7.07979Z"
                  stroke="#D0D5DD"
                  stroke-width="0.279303"
                />
                <path
                  d="M27.3124 32.3144L40.0128 41.5326C37.1318 43.1763 32.9475 43.0343 30.2916 41.1067L21.2698 34.5585C20.4161 33.9388 20.4161 32.9341 21.2698 32.3144C22.9384 31.1033 25.6438 31.1033 27.3124 32.3144Z"
                  fill="#0C111D"
                  stroke="#0C111D"
                  stroke-width="1.54184"
                />
                <path
                  d="M34.7077 17.4619L43.7295 24.0102C44.5833 24.6298 44.5833 25.6345 43.7295 26.2542C42.0609 27.4653 39.3555 27.4653 37.6869 26.2542L24.9866 17.036C27.8675 15.3923 32.0519 15.5343 34.7077 17.4619Z"
                  fill="#0C111D"
                  stroke="#0C111D"
                  stroke-width="1.54184"
                />
                <path
                  d="M41.9471 39.4643L23.5037 26.0777C20.8479 24.1501 20.6523 21.113 22.9169 19.0219L41.3603 32.4085C44.0161 34.3361 44.2117 37.3733 41.9471 39.4643Z"
                  fill="#0C111D"
                  stroke="#0C111D"
                  stroke-width="1.54184"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_d_26_2276"
                x="0.579681"
                y="0.556076"
                width="63.8406"
                height="63.8406"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="3.19203" />
                <feGaussianBlur stdDeviation="3.19203" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.298039 0 0 0 0 0.168627 0 0 0 0 0.631373 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_26_2276"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_26_2276"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_dd_26_2276"
                x="5.9661"
                y="4.14711"
                width="53.0676"
                height="53.0675"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.39651" />
                <feGaussianBlur stdDeviation="1.39651" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.06 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_26_2276"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="1.39651" />
                <feGaussianBlur stdDeviation="2.09477" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
                />
                <feBlend
                  mode="normal"
                  in2="effect1_dropShadow_26_2276"
                  result="effect2_dropShadow_26_2276"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_26_2276"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_26_2276"
                x1="32.5"
                y1="3.74811"
                x2="32.5"
                y2="54.8206"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#C0A4FF" />
                <stop offset="1" stop-color="#432E73" stop-opacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_26_2276"
                x1="32.4999"
                y1="6.94014"
                x2="32.4999"
                y2="51.6286"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="#D0D5DD" />
              </linearGradient>
            </defs>
          </svg>
        </>
      ) : (
        <Image
          src="https://res.cloudinary.com/seunsanyaa/image/upload/v1715534828/Frame_18_nfrupv.png"
          width={1280}
          height={700}
          alt="image"
        />
      )}

      <Header
        text={'Powered on Soroban'}
        style={{
          fontSize: '2rem',
          fontWeight: 500,
          lineHeight: '122.222%',
          letterSpacing: '-0.72px',
          color: 'white',
          paddingTop: '1rem',
        }}
      />

      <Paragraph
        text={
          'Creators will earn $ORB rewards for hosting events and video chats on Sorbit.'
        }
        style={{
          fontSize: '1.1rem',
          fontWeight: 400,
          lineHeight: '155.556%',
          letterSpacing: '-0.72px',
          color: '#94969C',
          maxWidth: '20rem',
          padding: '1rem 0rem',
        }}
      />
    </div>
  )
}
