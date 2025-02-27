import Hero from '../blog/Hero'
import React from 'react'
import Welcome from './Welcome'
import AboutTeam from './AboutTeam'
import OurServices from './OurServices'
import OurGoal from './OurGoal'
import OurValue from './OurValue'
import VisMis from './VisMis'
import AboutClient from './AboutClient'
import ThreeBG from '../ThreeBG'

export default function page() {
  return (
    <div className="w-full min-h-screen relative">
      <ThreeBG />
        <Hero title="About Us" />
        <Welcome />
        <AboutTeam />
        {/* <OurServices /> */}
        {/* <OurGoal /> */}
        <OurValue />
        <VisMis />
        <AboutClient />
    </div>
  )
}
