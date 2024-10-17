// 🛢️ Barrel.
import Header from './Header.astro'
import Footer from './Footer.astro'

import BadgeWork from './Badges/BadgeWork.astro'
import BadgeSocial from './Badges/BadgeSocial.astro'
import TimeLine from './JobExperience/TimeLine.astro'
import SectionContainer from './Section.astro'

// Export 🐶.
export * from './'
export {
  Header,
  Footer,

  SectionContainer,

  TimeLine,

  BadgeWork,
  BadgeSocial,
}