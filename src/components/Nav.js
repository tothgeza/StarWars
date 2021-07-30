import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as StarWars } from "../img/sw_logo4.svg";

export default function Nav() {
	return (
		<header className="top-level">
			<nav className="navbar navbar-expand-md navbar-dark bg-dark">
				<div className="container own-nav ">
					{/* <a className="navbar-brand d-md-none d-inline" href="#">
            Star Wars
          </a> */}
					<div></div>
					<button
						className="navbar-toggler coll "
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarTogglerDemo02"
						aria-controls="navbarTogglerDemo02"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse justify-content-center"
						id="navbarTogglerDemo02"
					>
						<ul className="navbar-nav mb-2 mb-lg-0">
							{/* <li className="nav-item">
								<div className="nav-logo"></div>
							</li> */}
							<Link className="nav-item" to="/people">
								<button className="btn-nav btn-nav-frst">People</button>
							</Link>
							<Link className="nav-item" to="/planets">
								<button className="btn-nav">Planets</button>
							</Link>
							<Link className="nav-item" to="/films">
								<button className="btn-nav">Films</button>
							</Link>
							<Link className="nav-item ">
								<button className="btn-nav">Species</button>
							</Link>
							<Link className="nav-item">
								<button className="btn-nav">Vechicles</button>
							</Link>
							<Link className="nav-item">
								<button className="btn-nav btn-nav-last">Starships</button>
							</Link>
						</ul>
					</div>
				</div>
			</nav>
			<div className="text-center">
				<StarWars fill="ffc500" alt="React Logo" />
			</div>
		</header>
	);
}
