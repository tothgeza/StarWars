import React from "react";
import Loader from "../utils/Loader";

export default function PostsPlanets({ posts, loading }) {
	const imgURL = "https://starwars-visualguide.com/assets/img/planets/";

	function getId(url) {
		return url.split("/")[url.split("/").length - 2];
	}

	if (loading) {
		return <Loader />;
	}

	return (
		<div className="conatiner-md row d-flex justify-content-evenly mb-5">
			{posts.results.map((post) => (
				<div className="flip-card">
					<div className="flip-card-inner">
						<div className="flip-card-front">
							<div>
								<div
									className="img"
									style={{
										backgroundImage: `url(${imgURL + getId(post.url)}.jpg)`,
									}}
								/>
							</div>
							<div class="card-body text-center">
								<h6 class="card-title text-warning">{post.name}</h6>
							</div>
						</div>
						<div className="flip-card-back">
							<div class="card-body">
								<h5 class="card-title text-center">{post.name}</h5>
								<p class="card-text mt-4">
									<p className="mb-0">
										Diameter:{" "}
										{parseInt(post.diameter).toLocaleString("en-US").toString()}{" "}
										Km
									</p>
									<p className="mb-0">Climate: {post.climate}</p>
									<p className="mb-0">Gravity: {post.gravity}</p>
									<p className="mb-0">Terrain: {post.terrain}</p>
									<p className="mb-0">Surface Water: {post.surface_water}%</p>
									<p className="mb-0">
										Population:{" "}
										{parseInt(post.population)
											.toLocaleString("en-US")
											.toString()}
									</p>
								</p>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
