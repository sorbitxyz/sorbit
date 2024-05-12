import { Button } from '../button'
import { Header } from '../header'
import { Paragraph } from '../paragraph'
import s from './hiring.module.scss'
export function Hiring({}) {
  return (
    <div className={s.section}>
      <div className={s.container}>
        <Paragraph
          text={'We’re hiring!'}
          style={{
            color: '#CECFD2',
            fontSize: '1rem',
            fontWeight: '600',
            lineHeight: '150%',
            textAlign: 'center',
            // paddingRight: '5rem',
          }}
        />{' '}
        <Header
          text={'Meet our team'}
          style={{
            color: '#F5F5F6',
            fontSize: '2rem',
            fontWeight: '600',
            lineHeight: '122.22%',
            letterSpacing: '-0.72px',
            paddingTop: '1rem',
            textAlign: 'center',
          }}
        />
        <Paragraph
          text={`Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.`}
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
          text={'Join Sorbit'}
          style={{
            border: '1px solid #C0A4FF',
            background: '#431F8C',
            boxShadow: '0px 0px 9px 0px #4C2BA1',
          }}
        />
      </div>
    </div>
  )
}
