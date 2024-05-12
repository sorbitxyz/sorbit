import { Button } from '../button'
import s from './form.module.scss'
export function Input({}) {
  return (
    <div className={s.form}>
      <input placeholder={'Email address'} />
      <Button
        text={'Join waitlist'}
        style={{
          borderRadius: '999px',
          border: '1px solid #C0A4FF',
          background: '#431F8C',
          boxShadow: '0px 0px 9px 0px #4C2BA1',
          whiteSpace: 'nowrap',
        }}
      />
    </div>
  )
}
