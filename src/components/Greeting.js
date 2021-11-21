import React from 'react'

class Greeting extends React.Component {
    render() {

        const date = new Date();
        // console.log(date);
        const current_time = date.getHours();
        // console.log(current_time);

        const customStyle = {
            color: ''
        }

        let greeting;

        if(current_time < 12) {
            greeting = "Good Morning";
            customStyle.color = 'red';
        }else if(current_time < 18){
            greeting = "Good Afternoon";
            customStyle.color = 'blue';
        }else{
            greeting = "Good Night";
            customStyle.color = 'yellow';
        }

        

        return (
            <div>
                <h1 style={customStyle}>{greeting}</h1>
            </div>
        )
    }
}


export default Greeting;
