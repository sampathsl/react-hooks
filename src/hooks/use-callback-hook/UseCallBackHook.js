import {useCallback, useState} from "react";
import ChildComponent from "./ChildComponent";

const UseCallBackHook = () => {
    const [toggle, setToggle] = useState(false);
    const [data, setData] = useState("Hallo ... ");
    
    const returnComment = useCallback((name) => {
      return data + name;
    }, [data]);

    return (
        <div className="App">
            <ChildComponent returnComment={returnComment}/>
            <button onClick={() => {
                setToggle(!toggle)
            }}>Toggle</button>
            {toggle && <h1>TOGGLE</h1>}
        </div>
    )
}

export default UseCallBackHook;