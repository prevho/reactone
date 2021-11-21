import React from 'react'
import '../style/Style.css';

function Contact(props) {
    return (
        <div>
            <h1>My Person</h1>
            <img src={props.image} alt="" />
          <p>Name : {props.name}</p>
          <p>Post : {props.post}</p>

        </div>

        
    )
}

export default Contact
