import s from './header.module.scss'

export function Header({ style, text }) {
  return (
    <h2 className={s.header} style={style}>
      {text}
    </h2>
  )
}
