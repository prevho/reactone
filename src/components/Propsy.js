import React from 'react';


//Props are passed automatically in class component
class Propsy extends React.Component {
  render() {

    return (
      <div> 
        <h1>I love {this.props.name}</h1>
      </div>
    );
  }
}

export default Propsy

// function Propsy(props) {
//   // console.log(props)
//   return (
//     <div>
//       <h1>I love {props.name}</h1>
//     </div>
//   )
// }



// export default Propsy;