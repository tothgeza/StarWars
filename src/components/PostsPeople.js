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
		// <div className="conatiner-md row d-flex justify-content-evenly mb-5">
		<div className="container-xxl">
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
										<h6 class="card-title text-warning">{post.name}</h6>
									</div>
								</div>
								<div className="flip-card-back">
									<div class="card-body">
										<h5 class="card-title text-center">{post.name}</h5>
										<p class="card-text mt-4">
											<p className="mb-0">Height: {post.height} cm</p>
											<p className="mb-0">Mass: {post.mass} Kg</p>
											<p className="mb-0">Hair Color: {post.hair_color}</p>
											<p className="mb-0">Eye: {post.eye_color}</p>
											<p className="mb-0">Gender: {post.gender}</p>
											<p className="mb-0">Birth Year: {post.birth_year}</p>
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
