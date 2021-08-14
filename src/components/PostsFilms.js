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
		<div className="container-xxl mb-5">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 justify-content-center">
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
									<div className="card-body text-center">
										<h6 className="card-title">{post.title}</h6>
									</div>
								</div>
								<div className="flip-card-back">
									<div
										className="card-body d-flex align-content-stretch flex-wrap"
										style={{ height: "300px" }}
									>
										<div className="card-text">
											<p className="mb-0">
												<strong>Dirtector:</strong> <em>{post.director}</em>
											</p>
											<p className="mb-0">
												<strong>Producer:</strong> <em>{post.producer}</em>
											</p>
											<p className="mb-0">
												<strong>Release Date:</strong>{" "}
												<em>{post.release_date}</em>
											</p>
											<br />
											<p className="mb-0">
												<TruncateMarkup lines={7}>
													<p>{post.opening_crawl}</p>
												</TruncateMarkup>
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
