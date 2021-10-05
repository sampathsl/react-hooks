import {useEffect, useState} from "react";

const UseEffectHook = () => {
    const [data, setData] = useState("");
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0].package.name);
                setData(data.results[0].package.name);
                setCount(count);
            });
    }, [count]);

    return (
        <div>
            <h1>Hello World</h1>
            <div>{data}</div>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1)
            }}>Click Here</button>
        </div>
    )

}

export default UseEffectHook;
