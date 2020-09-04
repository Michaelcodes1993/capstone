import React from "react";
import Navigation from "./components/navigation";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import PageRenderer from "./page-render";
import Home from "./pages/home";

function App() {
	const user =
	{
		firstName: 'Michael',
		lastName: 'Hoover'
	}

	console.log(user)
	return (
		<Router>
			<div className="App">
				<Navigation user={user} />
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/:page" component={PageRenderer} />

					<Route component={() => 404} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
