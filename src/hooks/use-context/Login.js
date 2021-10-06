import {AppContext} from './UseContextHook'
import {useContext} from "react";

const Login = () => {
    const {setUserName} = useContext(AppContext);

    return (
        <div>
            <input onChange={(event) => {
                setUserName(event.target.value)
            }}/>
        </div>
    );
}

export default Login;