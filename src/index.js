// https://www.valentinog.com/blog/babel/

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = (
    <App/>
);

const wrapper = document.getElementById("js-potlood-en-penseel-root");
wrapper ? ReactDOM.render(root, wrapper) : false;
