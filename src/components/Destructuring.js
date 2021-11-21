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

    render() {
        const {name, age} = this.props;

        return (
            <div>
                <h1>Destructuring</h1>
             <h2>{name}</h2>
             <h2>{age} Years</h2>
            </div>
        )
    }
}

export default Destructuring;
