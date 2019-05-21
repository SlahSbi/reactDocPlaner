import React from 'react'

const Card = (props) => {
  return (props.yas.map((item, index) =>
    <div className={item.classe} data-aos="fade-up">
      <img src={item.src} />
        <h1>{item.title}</h1>
        <p>{item.para}</p>
    </div>
    ))
  
  
    
  }
  
export default Card;