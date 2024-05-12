import { Header } from '../header'
import { Paragraph } from '../paragraph'
import s from './team.module.scss'
export function Team({}) {
  return (
    <div className={s.team}>
      <div className={s.section}>
        <div className={s.image}>
          <img
            width={48}
            height={48}
            alt="image"
            src={
              'https://res.cloudinary.com/seunsanyaa/image/upload/v1715542051/Image_1_pjp7i6.png'
            }
          />
        </div>
        <div className={s.container}>
          <div className={s.left}>
            <Header
              text={'John Okon'}
              style={{
                color: '#CECFD2',
                fontSize: '1.8rem',
                fontWeight: '500',
                lineHeight: ' 126.667%',
                textAlign: 'left',
              }}
            />{' '}
            <Paragraph
              text={`Founder & CEO`}
              style={{
                color: '#94969C',
                fontSize: '1.1rem',
                fontWeight: '400',
                lineHeight: '155.556%',
                paddingTop: '1rem',
                textAlign: 'left',
              }}
            />
          </div>
          <div>
            <svg
              width="24"
              height="31"
              viewBox="0 0 24 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 23.8206L17 13.8206M17 13.8206H7M17 13.8206V23.8206"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={s.section}>
        <div className={s.image}>
          <img
            width={48}
            height={48}
            alt="image"
            src={
              'https://res.cloudinary.com/seunsanyaa/image/upload/v1715542048/Image_2_iges26.png'
            }
          />
        </div>
        <div className={s.container}>
          <div className={s.left}>
            <Header
              text={'Temitope Odeyemi'}
              style={{
                color: '#CECFD2',
                fontSize: '1.7rem',
                fontWeight: '500',
                lineHeight: ' 126.667%',
                textAlign: 'left',
              }}
            />{' '}
            <Paragraph
              text={`UX/UI Designer`}
              style={{
                color: '#94969C',
                fontSize: '1.1rem',
                fontWeight: '400',
                lineHeight: '155.556%',
                paddingTop: '1rem',
                textAlign: 'left',
              }}
            />
          </div>
          <div>
            <svg
              width="24"
              height="31"
              viewBox="0 0 24 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 23.8206L17 13.8206M17 13.8206H7M17 13.8206V23.8206"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className={s.section}>
        <div className={s.image}>
          <img
            width={48}
            height={48}
            alt="image"
            src={
              'https://res.cloudinary.com/seunsanyaa/image/upload/v1715542902/punk1757_1_betbpn.png'
            }
          />
        </div>
        <div className={s.container}>
          <div className={s.left}>
            <Header
              text={'Seunsanyaa'}
              style={{
                color: '#CECFD2',
                fontSize: '1.8rem',
                fontWeight: '500',
                lineHeight: ' 126.667%',
                textAlign: 'left',
              }}
            />{' '}
            <Paragraph
              text={`Software Engineer`}
              style={{
                color: '#94969C',
                textAlign: 'left',
                fontSize: '1.1rem',
                fontWeight: '400',
                lineHeight: '155.556%',
                paddingTop: '1rem',
              }}
            />
          </div>
          <div>
            <svg
              width="24"
              height="31"
              viewBox="0 0 24 31"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 23.8206L17 13.8206M17 13.8206H7M17 13.8206V23.8206"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}
