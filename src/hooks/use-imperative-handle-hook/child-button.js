import {forwardRef, useImperativeHandle, useState} from "react";

const ChildButton = forwardRef((props, ref) => {
    const [toggle, setToggle] = useState(false);

    useImperativeHandle(ref, () => ({
        alterToggle(){
            setToggle(!toggle);
        }
    }));

    return (
        <div>
            <button>Child Button</button>
            <br/>
            {toggle && <span>Toggle</span>}
        </div>
    );
});

export default ChildButton;