import s from './button.module.scss'

export function Button({ func, style, text }) {
  return (
    <button className={s.button} style={style} onClick={func}>
      {text}
    </button>
  )
}
