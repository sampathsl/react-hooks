import React from 'react';
import './use-state.css';

function UseState() {

    const [counter, setCounter] = React.useState(0);
    const [studentName, setStudentName] = React.useState("");

    const increaseCount = () => {
        setCounter(counter + 1);
    }

    const changeName = (event) => {
        const enteredValue = event.target.value;
        setStudentName(enteredValue);
    }

    return (
        <div className="center">

            <h1>Increase Count UseState Example</h1>
            <div className="content">{counter}</div>
            <div>
                <button className="button" onClick={increaseCount}>ADD COUNT</button>
            </div>

            <br/>

            <h1>Text Box UseState Example</h1>
            <input placeholder="student name" size="30" value={studentName} onChange={changeName}/>
            <div className="content">{studentName}</div>

        </div>
    );
}

export default UseState;
