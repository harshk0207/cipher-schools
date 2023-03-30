import React from 'react'
import AboutMe from './AboutMe'
import Intrests from './Intrests'
import OnTheWeb from './OnTheWeb'
import PasswordSecurity from './PasswordSecurity'
import ProfessionalInformation from './ProfessionalInformation'

const Details = () => {
  return (
    <div className="userDetailsWrapper">
        <AboutMe />
        <OnTheWeb />
        <ProfessionalInformation />
        <PasswordSecurity />
        <Intrests/>
    </div>
  )
}

export default Details