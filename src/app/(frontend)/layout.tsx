
import React from 'react'
import './styles.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'aos/dist/aos.css'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'
import './components/site-layout.css'

import AnimationProvider from './AnimationProvider'

export const metadata = {
  title: {
    default: 'NeuroCare | Advanced Neurological Care',
    template: '%s | NeuroCare',
  },
  description:
    'Expert neurological care with a compassionate, personalised approach.',
}

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
  <html lang="en">
    <body>
      <AnimationProvider />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </body>
  </html>
)
}
