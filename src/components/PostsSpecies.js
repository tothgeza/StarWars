import React from "react";
import Loader from "../utils/Loader";

export default function PostsSpecies({ posts, loading }) {
	const imgURL = "https://starwars-visualguide.com/assets/img/species/";

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
									<div className="card-body text-center">
										<h6 className="card-title">{post.name}</h6>
									</div>
								</div>
								<div className="flip-card-back">
									<div
										className="card-body d-flex align-content-start flex-wrap"
										style={{ height: "300px" }}
									>
										<h6
											className="card-title text-center mx-auto"
											style={{ minWidth: "150px" }}
										>
											{post.name}
										</h6>
										<div className="card-text">
											<p className="mb-0">
												<strong>Classification: </strong>
												<em>{post.classification}</em>
											</p>
											<p className="mb-0">
												<strong>Designation: </strong>
												<em>{post.designation}</em>
											</p>
											<p className="mb-0">
												<strong>Avarage Height: </strong>
												<em>{post.average_height} cm</em>
											</p>
											<p className="mb-0">
												<strong>Skin Colors: </strong>
												<em>{post.skin_colors}</em>
											</p>
											<p className="mb-0">
												<strong>Hair Colors: </strong>{" "}
												<em>{post.hair_colors}</em>
											</p>
											<p className="mb-0">
												<strong>Eye Colors: </strong> <em>{post.eye_colors}</em>
											</p>
											<p className="mb-0">
												<strong>Avarage Lifespan: </strong>
												<em>
													{post.average_lifespan !== "unknown"
														? post.average_lifespan + " years"
														: "unknown"}
												</em>
											</p>
											<p className="mb-0">
												<strong>Language: </strong> <em>{post.language}</em>
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
