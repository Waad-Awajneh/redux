import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store2 from "./store/store2";
import Test from "./Test";
import App2 from "./App2";
import UseMemoTest from "./useMemoTest";
import CallBackTest from "./useCallBackTest";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store2}>
    {/* <App /> */}
    {/* <Test/> */}
    {/* <App2 /> */}
    {/* <UseMemoTest /> */}
    <CallBackTest />
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
