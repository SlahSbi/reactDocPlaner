import React, { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { item } = this.props
        return (<div className="img_but row col-lg-4">
            <div className=" row col-lg-12">
                <img src={item.src}/>
            </div>
            <div className="section_7_btn col-lg-12  justify-content-around row">
                <button type="button" className=" btn_1  col-lg-4 btn  btn-small">{item.btn_1}</button>
                <button type="button" className=" btn_2   col-lg-5 btn  btn-small">{item.btn_2}</button>
            </div>
        </div>)
    }
}
export default Item;

