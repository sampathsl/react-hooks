import {useEffect} from "react";

const ChildComponent = ({returnComment}) => {
    useEffect(() => {
       console.log('FUNCTION WAS CALLED!')
    }, [returnComment]);
    return (
        <div>{returnComment('SAM')}</div>
    )
}

export default ChildComponent;