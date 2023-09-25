import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Test1 from './Test1';
import reportWebVitals from './reportWebVitals';
import Test2 from './Test2';
import Test3 from './Test3';
import Test4 from './Test4';
import Test5 from './Test5';
import Test6 from './Test6';
import Test7 from './Test7';
import Test8 from './Test8';
import Test9 from './Test9';
//3. 컴포넌트 추가
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />
    <Test1 />
    <Test2 />
    <Test3 /> */}
    {/* <Test4 />
    <Test5 irum="김천재"age="20"addr="가산동"/>
    <Test5 age="20"addr="가산동"/>
    <Test5 irum="김기태"age="41"addr="가산동"/>
    <Test6 irum="박진권" age="39" addr="가경동"/>
    <Test7 irum="김이호" age="23" addr="구로동"/>
    <Test8 /> */}
    <Test9 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
