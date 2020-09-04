import React from "react";
import ReactDOM from "react-dom";
import APP from "./App";
import "antd/dist/antd.css";
import "./assests/scss/base.scss";

import "@quasar/extras/ionicons-v4/ionicons-v4.css";
ReactDOM.render(
	// <React.StrictMode>
	<APP />,
	// </React.StrictMode>,
	document.getElementById("root")
);
