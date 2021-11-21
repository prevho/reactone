import React from "react";
import '../style/Style.css';
import image1 from '../assets/images/image1.jpg';

//They extend component class
//They must contain render method
//Use of THIS keyword
//Maintain there own private data state

class Classy extends React.Component {

    render() {
        const image2 = '../assets/images/image2.jpg';
        return (
            <div>
            <img src={image1} className="image1" alt="" />
            <img src={image2} className="image1" alt="" />
            <h2>Europe</h2>
            <h2 className="edit">Africa</h2>
            <h2 style = {{ color: 'blue', fontSize : '90px' }}>Asia</h2>
            <h2>Middle East</h2>
            </div>
        );
    }
}

export default Classy;