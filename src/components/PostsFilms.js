import React from "react";
import Loader from "../utils/Loader";
import TruncateMarkup from "react-truncate-markup";

export default function PostsPeople({ posts, loading }) {
	const imgURL = "https://starwars-visualguide.com/assets/img/films/";

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
								<h6 class="card-title text-warning">{post.title}</h6>
							</div>
						</div>
						<div className="flip-card-back">
							<div class="card-body">
								<p class="card-text mt-4">
									<p className="mb-0">Dirtector: {post.director}</p>
									<p className="mb-0">Producer: {post.producer}</p>
									<p className="mb-0">Release Date: {post.release_date}</p>
									<br />
									<p className="mb-0">
										<TruncateMarkup lines={8}>
											<div>{post.opening_crawl}</div>
										</TruncateMarkup>
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
