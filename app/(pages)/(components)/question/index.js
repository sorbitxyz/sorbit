import { Button } from '../button'
import { Paragraph } from '../paragraph'
import s from './question.module.scss'
export function Question({}) {
  return (
    <div className={s.question}>
      <div className={s.section}>
        <div className={s.container}>
          {/* <div className={s.smallImage}>
            <Image
              width={48}
              height={48}
              alt="image"
              src={
                'https://res.cloudinary.com/seunsanyaa/image/upload/v1715393062/Avatar_group_gvzuz8.png'
              }
            />
          </div> */}
          <Paragraph
            text={'Still have questions?'}
            style={{
              color: '#CECFD2',
              fontSize: '1.1rem',
              fontWeight: '600',
              lineHeight: '150%',
              textAlign: 'center',
              // paddingRight: '5rem',
            }}
          />{' '}
          <Paragraph
            text={`Can’t find the answer you’re looking for? Please chat to our friendly team.`}
            style={{
              color: '#94969C',
              // textAlign: 'center',
              fontSize: '1rem',
              fontWeight: '400',
              lineHeight: '150%',
              paddingTop: '0.2rem',
              maxWidth: '40rem',
              paddingBottom: '2rem',
            }}
          />
          <Button
            text={'Get in touch'}
            style={{
              border: '1px solid #C0A4FF',
              background: '#431F8C',
              boxShadow: '0px 0px 9px 0px #4C2BA1',
            }}
          />
        </div>
      </div>
    </div>
  )
}
