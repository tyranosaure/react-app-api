import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import * as AuthDatat from "./services/index";

ReactDOM.render(
	<BrowserRouter>
		<Auth0Provider domain={AuthDatat.domain} clientId={AuthDatat.clientID} redirectUri={window.location.origin}>
			<App />
		</Auth0Provider>
	</BrowserRouter>,
	document.getElementById("root")
);
