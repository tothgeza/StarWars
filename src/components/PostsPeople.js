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
								<h5 class="card-title">{post.name}</h5>
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
			))}
		</div>
	);
}
