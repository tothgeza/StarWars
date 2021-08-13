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
									<div class="card-body text-center">
										<h6 class="card-title">{post.name}</h6>
									</div>
								</div>
								<div className="flip-card-back">
									<div class="card-body">
										<h5 class="card-title text-center">{post.name}</h5>
										<p class="card-text mt-4">
											<p className="mb-0">
												Classification: {post.classification}
											</p>
											<p className="mb-0">Designation: {post.designation}</p>
											<p className="mb-0">
												Avarage Height: {post.average_height} cm
											</p>
											<p className="mb-0">Skin Colors: {post.skin_colors}</p>
											<p className="mb-0">Hair Colors: {post.hair_colors}</p>
											<p className="mb-0">Eye Colors: {post.eye_colors}</p>
											<p className="mb-0">
												Avarage Lifespan: {post.average_lifespan !== 'unknown' ? post.average_lifespan + ' years' : 'unknown'}											</p>
											<p className="mb-0">Language: {post.language}</p>
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
