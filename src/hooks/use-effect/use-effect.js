/*
import {useEffect, useState} from "react";

const UseEffect = () => {
    const [data, setData] = useState("");

    useEffect(() => {
        fetch('https://api.npms.io/v2/search?q=react')
            .then(response => response.json())
            .then(data => {
                console.log(data.results[0].package.name);
                setData(data.results[0].package.name);
            });
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            <div>{data}</div>
        </div>
    )

}

export default UseEffect;
*/
