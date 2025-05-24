import React, { useState } from "react";

function Person() {
    const [person, setPerson] = useState({ firstName: "John",lastName: "Doe", age: 100 });
  
    
    const handleIncreaseAge = () => {
      // copy the existing person object into a new object
      // while updating the age property
      const newPerson = { ...person, age: person.age + 1 };
      setPerson(newPerson);
    };

    
    return (
      <>
        <h1>{person.firstName} {person.lastName}</h1>
        <input type="text" value={person.firstName} onChange={(event)=>setPerson({...person, firstName:event.target.value})}/>
        <input type="text" value={person.lastName} onChange={(event) => setPerson({...person,lastName: event.target.value})} />
        <h2>{person.age}</h2>
        <button onClick={handleIncreaseAge}>Increase age</button>
      </>
    );
}
  

export default Person;