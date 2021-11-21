import React from "react";
// import ReactDOM from "react-dom";

// import Functional from "./components/Functional";
// import Classy from "./components/Classy";
// import Greeting from "./components/Greeting";
// import Propsy from "./components/Propsy";
// import Contact from "./components/Contact";
import Destructuring from "./components/Destructuring";

// All components
// ReactDOM.render(<Functional />, document.getElementById('root'));

// ReactDOM.render(<Classy />, document.getElementById('root'));

// ReactDOM.render(<Greeting />, document.getElementById('root'));

// ReactDOM.render(<Propsy />, document.getElementById('root'));

class Control extends React.Component {
  render() {
    return (
      <div> 
          {/* <Propsy name = 'Apple'/>
          <Propsy name = 'Banana'/>
          <Propsy name = 'Mango'/>
          <Propsy name = 'Guava'/>
          <Propsy name = 'Papaya'/> */}

          {/* <Contact name="Jenny" post="Admin" image="https://via.placeholder.com/300"/>

          <Contact name="Precious" post="Manager" image="https://via.placeholder.com/500"/> */}

          <Destructuring name ="Walex" age = "40"/>
          
     </div>
    );
  }
}

export default Control;
