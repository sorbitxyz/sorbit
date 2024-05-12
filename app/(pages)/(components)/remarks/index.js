import Image from 'next/image'
import { Header } from '../header'
import { Paragraph } from '../paragraph'
import s from './remarks.module.scss'
export function Remarks({}) {
  const arr = [1, 2, 3, 4, 5]
  return (
    <div className={s.section}>
      <div className={s.container}>
        <div className={s.left}>
          <div className={s.stars}>
            {arr.map((item, index) => (
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                key={index}
              >
                <g clip-path="url(#clip0_14_1511)">
                  <path
                    d="M9.53834 2.43052C9.70914 2.01987 10.2909 2.01987 10.4617 2.43052L12.5278 7.398C12.5998 7.57112 12.7626 7.6894 12.9495 7.70439L18.3123 8.13432C18.7556 8.16986 18.9354 8.72311 18.5976 9.01245L14.5117 12.5125C14.3693 12.6344 14.3071 12.8258 14.3506 13.0082L15.5989 18.2414C15.7021 18.674 15.2315 19.0159 14.8519 18.7841L10.2606 15.9797C10.1006 15.882 9.89938 15.882 9.73937 15.9797L5.14806 18.7841C4.76851 19.0159 4.29788 18.674 4.40108 18.2414L5.64939 13.0082C5.69289 12.8258 5.6307 12.6344 5.48831 12.5125L1.40241 9.01245C1.06464 8.72311 1.24441 8.16986 1.68773 8.13432L7.05054 7.70439C7.23744 7.6894 7.40024 7.57112 7.47225 7.398L9.53834 2.43052Z"
                    fill="#FDB022"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_14_1511">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.820557)"
                    />
                  </clipPath>
                </defs>
              </svg>
            ))}
          </div>
          <Header
            text={
              'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it. '
            }
            style={{
              color: 'var(--colors-text-text-primary-900, #F5F5F6)',
              fontSize: '2.2rem',
              fontWeight: '500',
              lineHeight: '122.222%',
              letterSpacing: '-0.72px',
              paddingTop: '0.4rem',
              maxWidth: '38rem',
              // paddingRight: '5rem',
            }}
          />{' '}
          <Paragraph
            text={'— Renee Wells'}
            style={{
              color: '#F5F5F6',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: '600',
              lineHeight: '155.556%',
              paddingTop: '2rem',
            }}
          />
          <Paragraph
            text={'Product Designer, Quotient            '}
            style={{
              color: '#94969C',
              textAlign: 'left',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '150%',
              paddingTop: '0.2rem',
            }}
          />
          <div className={s.pager}>
            <svg
              width="62"
              height="11"
              viewBox="0 0 62 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 5.82056C0 3.05913 2.23858 0.820557 5 0.820557C7.76142 0.820557 10 3.05913 10 5.82056C10 8.58198 7.76142 10.8206 5 10.8206C2.23858 10.8206 0 8.58198 0 5.82056Z"
                fill="white"
              />
              <path
                d="M26 5.82056C26 3.05913 28.2386 0.820557 31 0.820557C33.7614 0.820557 36 3.05913 36 5.82056C36 8.58198 33.7614 10.8206 31 10.8206C28.2386 10.8206 26 8.58198 26 5.82056Z"
                fill="#9E77ED"
              />
              <path
                d="M52 5.82056C52 3.05913 54.2386 0.820557 57 0.820557C59.7614 0.820557 62 3.05913 62 5.82056C62 8.58198 59.7614 10.8206 57 10.8206C54.2386 10.8206 52 8.58198 52 5.82056Z"
                fill="#9E77ED"
              />
            </svg>
          </div>
        </div>

        <div className={s.image}>
          <Image
            src={
              'https://res.cloudinary.com/seunsanyaa/image/upload/v1715389243/Image_bwhf2l.png'
            }
            width={480}
            height={448}
            alt="image"
          />
        </div>
      </div>
    </div>
  )
}
