import axios from 'axios'
import { useState } from 'react'
import { Button } from '../button'
import s from './form.module.scss'
export function Input({}) {
  const [value, setValue] = useState('')
  const [success, setSuccess] = useState(false)

  const onSubmit = async () => {
    const data = new FormData()
    data.append('email', value)
    const sheetData = { email: value }

    axios
      .post(
        'https://sheet.best/api/sheets/a25fba71-5a50-4a10-a32b-14ebd67d816f',
        sheetData,
      )
      .then(() => {
        setSuccess(true)
        setValue('')
      })
      .catch(() => {
        setSuccess(true)
        setValue('')
      })
      .finally(() => {
        setSuccess(true)
        setValue('')
      })
  }

  return (
    <div className={s.form}>
      <input
        placeholder={'Email address'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        text={success ? `You've signed up` : 'Join waitlist'}
        func={() => onSubmit()}
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
