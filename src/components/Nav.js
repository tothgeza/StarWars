import React from "react";
import { Link, NavLink } from "react-router-dom";
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
						<ul className="navbar-nav mb-lg-0">
							{/* <li className="nav-item">
								<div className="nav-logo"></div>
							</li> */}
							<NavLink className="nav-item btn-nav btn-nav-frst" to="/people">
								People
							</NavLink>
							<Link className="nav-item btn-nav" to="/planets">
								Planets
							</Link>
							<Link className="nav-item btn-nav" to="/films" >
								Films
							</Link>
							<Link className="nav-item btn-nav" to="/species">
								Species
							</Link>
							<Link className="nav-item btn-nav" to="/vehicles">
								Vehicles
							</Link>
							<Link className="nav-item btn-nav btn-nav-last" to="/starships">
								Starships
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
