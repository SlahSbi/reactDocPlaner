import React from 'react'
import Card from './section3-card'

const tab = [
  {
    classe: 'service_for_patient row col-lg-6 col-md-12 rounded',
    title1: 'For patients',
    title2: 'Find a doctor, book a visit and solve any health-related doubt',
    src: 'https://www.docplanner.com/img/screen-marketplace@2x.png',
    bol: true
  },
  {
    classe: 'service_for_doctor row col-lg-6 col-sm-12 rounded justify-content-between',
    title1: 'For doctors',
    title2: 'Find a doctor, book a visit and solve any health-related doubt',
    src: 'https://www.docplanner.com/img/screen-saas@2x.png',
    bol: false
  }
]
function Section3() {
  return (<div className=" section_3 row justify-content-between ">
    <Card remp={tab} />
  </div>

  )
}

export default Section3;