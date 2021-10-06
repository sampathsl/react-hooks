import {useRef} from "react";
import ChildButton from "./child-button";

const UseImperativeHandleHook = () => {
    const buttonRef = useRef(null);
    return (
        <div>
            <button onClick={() => {
                buttonRef.current.alterToggle();
            }}>Parent Button</button>
            <ChildButton ref={buttonRef}/>
        </div>
    );
}

export default UseImperativeHandleHook;
