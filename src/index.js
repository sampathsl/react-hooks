import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import UseState from "./hooks/use-state/use-state";
import UseReducer from "./hooks/use-reducer/use-reducer";
import UseEffectHook from "./hooks/use-effect/use-effect-hook";
import UseRefHook from "./hooks/use-ref-hook/use-ref-hook";
import UseLayoutEffectHook from "./hooks/use-layout-effect/UseLayoutEffectHook";
import UseImperativeHandleHook from "./hooks/use-imperative-handle-hook/use-imperative-handle-hook";
import UseContextHook from "./hooks/use-context/UseContextHook";
import UseMemoHook from "./hooks/use-memo-hook/UseMemoHook";
import UseCallBackHook from "./hooks/use-callback-hook/UseCallBackHook";

ReactDOM.render(
    <React.StrictMode>
        {/*<UseState />*/}
        {/*<UseReducer />*/}
        {/*<UseEffectHook/>*/}
        {/*<UseRefHook/>*/}
        {/*<UseLayoutEffectHook/>*/}
        {/*<UseImperativeHandleHook/>*/}
        {/*<UseContextHook/>*/}
        {/*<UseMemoHook/>*/}
        <UseCallBackHook/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
