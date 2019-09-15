// https://www.valentinog.com/blog/babel/

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";

const root = (
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>
);

const wrapper = document.getElementById("js-potlood-en-penseel-root");
wrapper ? ReactDOM.render(root, wrapper) : false;
