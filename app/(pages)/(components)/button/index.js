import s from './button.module.scss'

export function Button({ style, text }) {
  return (
    <button className={s.button} style={style}>
      {text}
    </button>
  )
}
