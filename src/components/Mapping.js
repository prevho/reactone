import React from 'react';

class Mapping extends React.Component {
  render() {
    const employees = [
        'Anthony',
        'Bello',
        'Precious',
        'Abu',
        'Peter',
        'Joy',
        'Samuel'
    ]

    

    const mystaff = employees.map((staff, key) => {
            return  <h2>{key + 1} : {staff}</h2>
        })
        
        
    return (
      <div> 
          <h1>Mapping</h1>
          {/* <h2>{employees[3]}</h2> */}

          <h2>
              {

              employees.map((staff, key) => {
                  return  <h2>{key + 1} : {staff}</h2>
              })
              
              }

              {/* {employees.map((staff, key)=>{
                  return  <h2>{key + 1} : {staff}</h2>
              })} */}
              
            </h2>

            {mystaff}


      </div>
    );
  }
}

export default Mapping;
