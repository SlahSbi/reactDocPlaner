import React from 'react';
import Item from './section7-item'

const Liste=(props)=>{
    return(<div className="  col-lg-12  d-flex flex-direction-row flex-wrap align-items-around">
{props.cart.map((el,index)=><Item item={el} key={index} />)}
    </div>)
}
export default Liste