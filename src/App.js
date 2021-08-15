import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "../src/style.scss";
import People from "./components/People";
import Planets from "./components/Planets";
import Films from "./components/Films"
import Species from "./components/Species";
import Vehicles from "./components/Vehicles";
import Starships from "./components/Starships";

function App() {
	return (
		<Router>
			<div>
				<div class="twinkling"> </div>
				<div class="clouds"> </div>
				<div className="container-sm page-container">
					<div className="content-wrapper">
						<Nav />
						<Switch>
							<Route path="/people" component={People} />
							<Route path="/planets" component={Planets} />
							<Route path="/films" component={Films} />
							<Route path="/species" component={Species} />
							<Route path="/vehicles" component={Vehicles} />
							<Route path="/starships" component={Starships} />
						</Switch>
					</div>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
