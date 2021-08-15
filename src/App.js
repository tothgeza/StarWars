import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "../src/style.scss";
import Category from "./components/Category";

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
							<Route path="/people">
								<Category typeOfCategory="people" />
							</Route>
							<Route path="/planets">
								<Category typeOfCategory="planets" />
							</Route>
							<Route path="/films">
								<Category typeOfCategory="films" />
							</Route>
							<Route path="/species">
								<Category typeOfCategory="species" />
							</Route>
							<Route path="/vehicles">
								<Category typeOfCategory="vehicles" />
							</Route>
							<Route path="/starships">
								<Category typeOfCategory="starships" />
							</Route>
						</Switch>
					</div>
					<Footer />
				</div>
			</div>
		</Router>
	);
}

export default App;
