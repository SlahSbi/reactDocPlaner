import React from 'react'
import Section5_1 from './section5_1'
import Card from './section5-card'
const tab1 = [
    {
        classe:'box_1 row col-lg-6 text-center justify-content-center',
        src:'https://www.docplanner.com/img/flag.png',
        title: 'Leader in 10 countries',
        para: 'Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile',
    },
    {
        classe:'row box_2 col-lg-6 justify-content-center  text-center',
        src:'https://www.docplanner.com/img/visits.png',
        title: '1 million appointments',
        para: 'booked last month'
    },
    {
        classe:'row box_3 col-lg-6 justify-content-center  text-center',
        src:'https://www.docplanner.com/img/patients.png',
        title: '30 million unique patients',
        para: 'visit us every month',
    },
    {
        classe:'row box_4 col-lg-6 justify-content-center text-center ',
        src:'https://www.docplanner.com/img/doctors.png',
        title: '2 million active doctors',
        para: 'trust in our solutions'
    }
]
function Section5() {
    return (<div className=" section_5 row justify-content-between">
        <Section5_1 />
        <div className="  row col-lg-6  justify-content-center align-items-center ">
            <div className="row col-lg-12 justify-content-between text-center">
                <Card yas={tab1} />
            </div>
        </div>
    </div>)
   
}
  
export default Section5;