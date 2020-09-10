import React from "react";
import ReactDOM from "react-dom";
import APP from "./App";
import "antd/dist/antd.css";
import "./assests/scss/base.scss";
import { BrowserRouter } from 'react-router-dom'

import "@quasar/extras/ionicons-v4/ionicons-v4.css";
ReactDOM.render(
	<BrowserRouter>

		<APP />

	</BrowserRouter>,
	document.getElementById("root")
);
