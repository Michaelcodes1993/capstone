import React from "react";
import Navigation from "./components/navigation";
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from "react-router-dom";
import PageRenderer from "./page-render";
import Home from "./pages/home";
import PrivateRoute from './Utils/PrivateRoute'
import PublicOnlyRoute from './Utils/PublicOnlyRout'
import LoginPage from './pages/LoginPage'
import registration from './pages/registration'
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
					<PublicOnlyRoute path={'/login'} component={LoginPage} />
					<PublicOnlyRoute path={'/register'} component={registration} />
					<Route component={() => 404} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
