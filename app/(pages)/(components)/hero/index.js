'use client'

import { useDeviceDetection } from 'hooks/use-device-detection'
import Image from 'next/image'
import { Input } from '../form/input'
import { Header } from '../header'
import { Notify } from '../notify'
import { Paragraph } from '../paragraph'
import s from './hero.module.scss'
import { Particular } from '../particles'

export function Hero({}) {
  const { isMobile } = useDeviceDetection()

  return (
    <div className={s.container}>
      <Particular />
      <Notify />
      <div
        style={{
          maxWidth: isMobile ? null : '50rem',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Header
          text={'Sorbit the Web3 space for creators to earn'}
          style={{
            fontSize: isMobile ? '2.5rem' : '4.5rem',
            background: `var(--Gradient-Linear-Color-09, linear-gradient(45deg, #A6C0FE 0%, #FFEAF6 100%))`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textAlign: 'center',
            lineHeight: '111.111%',
            letterSpacing: '-1.44px',
            paddingTop: '0.8rem',
          }}
        />

        <Paragraph
          text={'Create engaging content & earn on the go.'}
          style={{ paddingTop: '1.5rem', maxWidth: '15rem' }}
        />

        <Input />
      </div>

      <div className={s.circleSvg}>
        <svg
          width="1440"
          height="664"
          viewBox="0 0 1440 664"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_0_14783)">
            <rect
              x="-201.5"
              y="479"
              width="1896"
              height="1884"
              rx="942"
              fill="#040917"
              fill-opacity="0.22"
              shape-rendering="crispEdges"
            />
            <rect
              x="-200.733"
              y="479.767"
              width="1894.47"
              height="1882.47"
              rx="941.233"
              stroke="url(#paint0_linear_0_14783)"
              stroke-width="1.5346"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter1_d_0_14783)">
            <rect
              x="-136.5"
              y="544"
              width="1766"
              height="1754"
              rx="877"
              fill="#040917"
              fill-opacity="0.22"
              shape-rendering="crispEdges"
            />
            <rect
              x="-135.733"
              y="544.767"
              width="1764.47"
              height="1752.47"
              rx="876.233"
              stroke="url(#paint1_linear_0_14783)"
              stroke-width="1.5346"
              shape-rendering="crispEdges"
            />
          </g>
          <g filter="url(#filter2_d_0_14783)">
            <rect
              x="-63.5"
              y="616"
              width="1620"
              height="1610"
              rx="805"
              fill="#040917"
              fill-opacity="0.22"
              shape-rendering="crispEdges"
            />
            <rect
              x="-62.7327"
              y="616.767"
              width="1618.47"
              height="1608.47"
              rx="804.233"
              stroke="url(#paint2_linear_0_14783)"
              stroke-width="1.5346"
              shape-rendering="crispEdges"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_14783"
              x="-251.5"
              y="429"
              width="1996"
              height="1984"
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
              <feOffset />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.496409 0 0 0 0 0.338412 0 0 0 0 0.849824 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_14783"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_14783"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_0_14783"
              x="-186.5"
              y="494"
              width="1866"
              height="1854"
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
              <feOffset />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.734378 0 0 0 0 0.644968 0 0 0 0 0.934375 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_14783"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_14783"
                result="shape"
              />
            </filter>
            <filter
              id="filter2_d_0_14783"
              x="-113.5"
              y="566"
              width="1720"
              height="1710"
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
              <feOffset />
              <feGaussianBlur stdDeviation="25" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_14783"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_14783"
                result="shape"
              />
            </filter>
            <linearGradient
              id="paint0_linear_0_14783"
              x1="746.5"
              y1="479"
              x2="746.5"
              y2="2363"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#48238F" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_0_14783"
              x1="746.5"
              y1="544"
              x2="746.5"
              y2="2298"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#48238F" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_0_14783"
              x1="746.5"
              y1="616"
              x2="746.5"
              y2="2226"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop offset="1" stop-color="#48238F" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className={s.gradient}>
        <Image
          width={1280}
          height={720}
          alt="image"
          src="https://res.cloudinary.com/seunsanyaa/image/upload/v1715376050/Light_accent_zqh4jd.png"
        />
      </div>
    </div>
  )
}
