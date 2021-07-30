import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "../src/style.scss";
import People from "./components/People";
import Planets from "./components/Planets";
import Films from "./components/Films";

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
						</Switch>
					</div>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
