import React from 'react'

// function Destructuring(props) {
//     const{name, age} = props;
//     return (
//         <div>
//             <h1>Destructuring</h1>
//             <h2>{name}</h2>
//             <h2>{age} Years</h2>
//         </div>
//     )
// }

// export default Destructuring

class Destructuring extends React.Component {

    state = {
        message: 'You are great',
        age: "50"
    };

    changeMe = () => {
        this.setState({
            message: 'Thank You',
            age: "Not sure"
        })
    }

    render() {
        const {name, age} = this.props;

        return (
            <div>
                <h1 style= {{ color : 'blue' }}>{this.state.age}</h1>
                <h1 style= {{ color : 'blue' }}>{this.state.message}</h1>
            <h1>Destructuring</h1>
             <h2>{name}</h2>
             <h2>{age} Years</h2>

             <button onClick = {this.changeMe}>Change State</button>
            </div>
        )
    }
}

export default Destructuring;
