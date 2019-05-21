import React, { Component } from 'react';
import Liste from './section7-list'
import './App.css';
const tab = [
    {
        src:'https://www.docplanner.com/images/warsaw.png',
        btn_1: 'Warsaw',
        btn_2: 'SEE OPENINGS'
    },
    {
        src:'https://www.docplanner.com/images/barcelona.png',
        btn_1: 'Barcelona',
        btn_2: 'SEE OPENINGS'
    },
    {
        src:'https://www.docplanner.com/images/istanbul.png',
        btn_1: 'Istanbul',
        btn_2: 'SEE OPENINGS'
    },
    {
        src:'https://www.docplanner.com/images/rome.png',
        btn_1: 'Rome',
        btn_2: 'SEE OPENINGS'
    },
    {
        src:'https://www.docplanner.com/images/mexico-city.png',
        btn_1: 'Mexico city',
        btn_2: 'SEE OPENINGS'
    },
    {
        src:'https://www.docplanner.com/images/curitiba.png',
        btn_1: 'Curitiba',
        btn_2: 'SEE OPENINGS'
    }

]
class Section7 extends Component {
    render() {
        return (<div className="section_7_1 row">
            <Liste cart={tab} />
            </div>
                
          
        );
    }
}
export default Section7;
