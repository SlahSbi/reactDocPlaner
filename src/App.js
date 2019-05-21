import React from 'react';
import Navdoc from './navdoc';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';
import Section5 from './section5';
import Section6 from './section6';
import Section7 from './section7';
import Footer from './footer';
import './App.css';






function App() {
  return (<div>
    <div className="container">
      <Navdoc />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </div>
    <div className="container-fluid">
      <Section5 />
    </div>
    <div className="container">
      <Section6 />
      <Section7 />
    </div>
    <div>
    <Footer />
    </div>
    


  </div>

  )
}

export default App;
