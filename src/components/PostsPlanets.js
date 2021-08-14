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
		<div className="container-xxl mb-5">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
				{posts.results.map((post) => (
					<div className="col-auto mb-2 d-flex justify-content-center">
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
										<h6 class="card-title">{post.name}</h6>
									</div>
								</div>
								<div className="flip-card-back">
									<div
										className="card-body d-flex flex-column align-content-stretch flex-wrap"
										style={{ height: "300px" }}
									>
										<h6 className="card-title text-center mx-auto">{post.name}</h6>
										<div className="card-text mt-4">
											<p className="mb-0">
												<strong>Diameter: </strong>
												<em>
													{parseInt(post.diameter)
														.toLocaleString("en-US")
														.toString()} Km</em>
											</p>
											<p className="mb-0">
												<strong>Climate:</strong> <em>{post.climate}</em>
											</p>
											<p className="mb-0">
												<strong>Gravity:</strong> <em>{post.gravity}</em>
											</p>
											<p className="mb-0">
												<strong>Terrain:</strong> <em>{post.terrain}</em>
											</p>
											<p className="mb-0">
												<strong>Surface Water:</strong>{" "}
												<em>{post.surface_water}%</em>
											</p>
											<p className="mb-0">
												<strong>Population: </strong>
												<em>
													{parseInt(post.population)
														.toLocaleString("en-US")
														.toString()}
												</em>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
