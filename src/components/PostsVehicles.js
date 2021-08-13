import React from "react";
import Loader from "../utils/Loader";
import TruncateMarkup from "react-truncate-markup";

export default function PostsVechicles({ posts, loading }) {
	const imgURL = "https://starwars-visualguide.com/assets/img/vehicles/";

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
									<div
										className="img"
										style={{
											backgroundImage: `url(${imgURL + getId(post.url)}.jpg)`,
										}}
									/>
									<div class="card-body text-center">
										<TruncateMarkup lines={1}>
											<h6 class="card-title">{post.name}</h6>
										</TruncateMarkup>
									</div>
								</div>
								<div className="flip-card-back">
									<div class="card-body">
										<h5 class="card-title text-center">{post.name}</h5>
										<p class="card-text mt-2">
											<TruncateMarkup lines={2}>
												<p className="mb-0">
													<strong>Model:</strong> <em>{post.model}</em>
												</p>
											</TruncateMarkup>
											<TruncateMarkup lines={3}>
												<p className="mb-0">
													<strong>Manufacturer:</strong> <em>{post.manufacturer}</em>
												</p>
											</TruncateMarkup>
											<p className="mb-0">
												<strong>Cost In Credits:</strong> <em>{post.cost_in_credits}</em>
											</p>
											<p className="mb-0">
												<strong>Length:</strong> <em>{post.length} m</em>
											</p>
											<p className="mb-0">
												<strong>Max Speed:</strong>	<em>{post.max_atmosphering_speed} Km/h</em>
											</p>
											<p className="mb-0">
												<strong>Crew:</strong> <em>{post.crew}</em>
											</p>
											<p className="mb-0">
												<strong>Passengers:</strong> <em>{post.passengers}</em>
											</p>
											<p className="mb-0">
												<strong>Vehicle Class:</strong>	<em>{post.vehicle_class}</em>
											</p>
										</p>
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
