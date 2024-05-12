import { Hero } from '../(components)/hero'
import { Hiring } from '../(components)/hiring'
import { PoweredBy } from '../(components)/powered/powered'
import { Question } from '../(components)/question'
import { Team } from '../(components)/team'
import { Token } from '../(components)/token'
import { Wrapper } from '../(components)/wrapper'
import s from './home.module.scss'

export default function Page() {
  return (
    <Wrapper theme="light" className={s.page}>
      {/* <Header text={'SEUN'} /> */}

      <Hero />

      <PoweredBy />

      <Token />

      <Hiring />
      <Team />
      <Question />
    </Wrapper>
  )
}
