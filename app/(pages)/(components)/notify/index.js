import s from './notify.module.scss'

export function Notify({}) {
  return (
    <div className={s.container}>
      <div className={s.icon}></div>

      <h2 className={s.text}>Beta launch is coming soon</h2>
    </div>
  )
}
