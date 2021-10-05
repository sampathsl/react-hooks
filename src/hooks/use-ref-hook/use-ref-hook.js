import {useRef} from "react";

const UseRefHook = () => {
    const inputRef = useRef(null)
    return (
        <div>
            <h1>Sample Text</h1>
            <input type="text" placeholder="Ex..." ref={inputRef}/>
            <button onClick={() => {
                inputRef.current.focus();
                console.log(inputRef.current.value)
            }}>Change Name</button>
        </div>
    )
}

export default UseRefHook;
