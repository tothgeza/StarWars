import React from "react";
import Loader from "../utils/Loader";

export default function PostsPeople({ posts, loading }) {
	const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

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
												<strong>Height: </strong>
												<em>{post.height} cm</em>
											</p>
											<p className="mb-0">
												<strong>Mass: </strong> <em>{post.mass} Kg</em>
											</p>
											<p className="mb-0">
												<strong>Hair Color: </strong> <em>{post.hair_color}</em>
											</p>
											<p className="mb-0">
												<strong>Eye: </strong> <em>{post.eye_color}</em>
											</p>
											<p className="mb-0">
												<strong>Gender: </strong> <em>{post.gender}</em>
											</p>
											<p className="mb-0">
												<strong>Birth Year: </strong> <em>{post.birth_year}</em>
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
