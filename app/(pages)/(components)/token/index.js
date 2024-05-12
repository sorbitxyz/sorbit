'use client'
import { useDeviceDetection } from 'hooks/use-device-detection'
import Image from 'next/image'
import { Header } from '../header'
import { Paragraph } from '../paragraph'
import s from './token.module.scss'
export function Token({}) {
  const { isMobile } = useDeviceDetection()
  return (
    <div className={s.container}>
      {isMobile ? (
        <div className={s.bgimage}>
          <Image
            width={606}
            height={677}
            alt="image"
            src={
              'https://res.cloudinary.com/seunsanyaa/image/upload/v1715541160/Group_10_fn67xs.png'
            }
          />
        </div>
      ) : null}

      <div className={s.left}>
        <Paragraph
          text={'Native token'}
          style={{
            color: 'var(--colors-text-text-brand-secondary-700, #CECFD2)',

            fontSize: '1rem',
            fontWeight: '600',
            lineHeight: '150%',
          }}
        />
        <Header
          text={'ORB Token'}
          style={{
            color: 'var(--colors-text-text-primary-900, #F5F5F6)',
            fontSize: isMobile ? '2rem' : '2.2rem',
            fontWeight: '500',
            lineHeight: '122.222%',
            letterSpacing: '-0.72px',
            paddingTop: '0.4rem',
          }}
        />

        <Paragraph
          text={
            'Creators will earn $ORB rewards for hosting events and video chats on Sorbit.'
          }
          style={{
            color: 'var(--colors-text-text-tertiary-600, #94969C)',
            textAlign: isMobile ? 'center' : 'left',
            fontSize: '1rem',
            fontWeight: '500',
            lineHeight: '155.556%',
            paddingTop: '0.6rem',
            maxWidth: '21rem',
          }}
        />
      </div>

      {isMobile ? null : (
        <div className={s.image}>
          <Image
            width={606}
            height={677}
            alt="image"
            src={
              'https://res.cloudinary.com/seunsanyaa/image/upload/v1715388327/Group_8_y1mq0j.png'
            }
          />
        </div>
      )}
    </div>
  )
}
