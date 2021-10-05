import {useReducer} from "react";

const reducer = (state,action) => {
    switch (action.type) {
        case "INCREMENT":
            return {count: state.count + 1, showText: state.showText}
        case "TOGGLE_TEXT":
            return { count: state.count, showText: !state.showText }
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0, showText: true})
    return (
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={() => {
                dispatch({type: "INCREMENT"});
                dispatch({type: "TOGGLE_TEXT"});
            }}>Click Here</button>
            <div>{state.showText && state.count !== 0 ? <h1>Even Count</h1> : state.count !== 0 && <h1>Odd Count</h1>}</div>
        </div>
    )
}

export default UseReducer;
