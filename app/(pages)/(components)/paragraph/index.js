import s from './paragraph.module.scss'

export function Paragraph({ style, text }) {
  return (
    <p className={s.paragraph} style={style}>
      {text}
    </p>
  )
}
