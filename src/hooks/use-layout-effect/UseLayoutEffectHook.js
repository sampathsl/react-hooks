import {useEffect, useLayoutEffect, useRef} from "react";

const UseLayoutEffectHook = () => {

    const inputRef = useRef(null);

    useEffect(() => {
        console.log('useEffect')
    }, []);
    useLayoutEffect(() => {
        inputRef.current.value = 'hello';
        console.log('useLayoutEffect')
    }, []);
    return (
      <div>
          <input ref={inputRef} value="sample"/>
      </div>
    );
}

export default UseLayoutEffectHook;
