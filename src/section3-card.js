import React from 'react';
import { Button } from 'reactstrap';


const Card = (props) => {

    return (props.remp.map((item, index) =>

        <div className={item.classe} data-aos="fade-up" >
            <div className="row">
                <div className=" col-lg-12" data-aos="fade-left">
                    <h2 >{item.title1}</h2>
                </div>
            </div>
            <div className="row">
                <div className=" col-lg-12" data-aos="fade-left">
                    <h1 >{item.title2}</h1>
                </div>
            </div>
            <div className="row overflow-hidden" data-aos="fade-left">
                {item.bol ? <div className="dropdown col-lg-4">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> CHOOSE COUNTRY</button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item" href="#">ARGENTINA</a>
                        <a className="dropdown-item" href="#">AUSTRALIA</a>
                        <a className="dropdown-item" href="#">BRAZIL</a>
                        <a className="dropdown-item" href="#">CHILE</a>
                        <a className="dropdown-item" href="#">COLOMBIA</a>
                        <a className="dropdown-item" href="#">CZECH</a>
                        <a className="dropdown-item" href="#">FRANCE</a>
                        <a className="dropdown-item" href="#">ITALY</a>
                        <a className="dropdown-item" href="#">MEXICO</a>
                        <a className="dropdown-item" href="#">PERU</a>
                        <a className="dropdown-item" href="#">POLAND</a>
                        <a className="dropdown-item" href="#">PORTUGAL</a>
                        <a className="dropdown-item" href="#">SPAIN</a>
                        <a className="dropdown-item" href="#">TURKEY</a>
                        <a className="dropdown-item" href="#">UK</a>
                    </div>
                </div> : <div></div>}
            </div>
            <div className="row  offset-md-4 col-lg-6 " data-aos="fade-left">
                <img src={item.src} alt="" />
            </div>
        </div>

    )

    )


}

export default Card;

