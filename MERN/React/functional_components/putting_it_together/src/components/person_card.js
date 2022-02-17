import React, { useState } from 'react';

const PersonCard = (props) => {
    const {firstName, lastName, age, hairColor} = props
    const [stateAge, setStateAge] = useState(age);
    return (
        <div className="card">
            <h2>{lastName}, {firstName}</h2>
            <p>Hair Color: {hairColor}</p>
            <p>Age: {stateAge}</p>
            <button onClick={() => setStateAge(stateAge + 1)}>
                Birthday Button for {firstName} {lastName}
            </button>
        </div>
    )
}

export default PersonCard;