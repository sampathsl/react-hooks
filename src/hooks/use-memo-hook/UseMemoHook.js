import {useEffect, useMemo, useState} from "react";

const UseMemoHook = () => {
    const [data, setData] = useState(null);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(data => {
                setData(data);
            });
    }, []);

    const findLongestName = (comments) => {
        if(!comments) return null;
        let longestName = '';
        for (let count = 0; count < comments.length; count ++) {
            let currentName = comments[count].name;
            if(currentName.length > longestName.length) {
                longestName = currentName;
            }
        }
        console.log('LONGEST NAME COMPUTED!');
        return longestName;
    }

    const getLongestName = useMemo(() => findLongestName(data), [data])

    return (
        <div className="App">
            <div>{getLongestName}</div>
            <button onClick={() => {
                setToggle(!toggle)
            }}>Toggle</button>
            {toggle && <h1>TOGGLE</h1>}
        </div>
    );
}

export default UseMemoHook;