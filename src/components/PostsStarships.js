import React from "react";
import Loader from "../utils/Loader";
import TruncateMarkup from "react-truncate-markup";
import { FaCoins } from "react-icons/fa";

export default function PostsStarships({ posts, loading }) {
	const imgURL = "https://starwars-visualguide.com/assets/img/starships/";

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
										<TruncateMarkup lines={1}>
											<h6 className="card-title">{post.name}</h6>
										</TruncateMarkup>
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
												<strong>Model: </strong>
												<em>{post.model}</em>
											</p>
											<TruncateMarkup lines={2}>
												<p className="mb-0">
													<strong>Manufacturer: </strong>
													<em>{post.manufacturer}</em>
												</p>
											</TruncateMarkup>
											<p className="mb-0">
												<strong>Cost In Credits: </strong>
												{post.cost_in_credits !== "unknown" ? (
													<nobr>
														<em>
															{parseInt(post.cost_in_credits)
																.toLocaleString("en-US")
																.toString() + "  "}
														</em>
														<FaCoins
															style={{
																position: "relative",
																top: "-2px",
																left: "2px",
																color: "#ffc500",
															}}
														/>
													</nobr>
												) : (
													<em>unknown</em>
												)}
											</p>
											<p className="mb-0">
												<strong>Length: </strong>{" "}
												<em>
													{parseInt(post.length)
														.toLocaleString("en-US")
														.toString() + " m"}
												</em>
											</p>
											<p className="mb-0">
												<strong>Max Speed: </strong>
												<em>
													{post.max_atmosphering_speed !== "n/a"
														? post.max_atmosphering_speed + " Km/h"
														: "n/a"}
												</em>
											</p>
											<p className="mb-0">
												<strong>Crew: </strong> <em>{post.crew}</em>
											</p>
											<p className="mb-0">
												<strong>Passengers: </strong> <em>{post.passengers}</em>
											</p>
											<p className="mb-0">
												<strong>Hyperdrive Rating: </strong>{" "}
												<em>{post.hyperdrive_rating}</em>
											</p>
											<p className="mb-0">
												<strong>Starship Class: </strong>{" "}
												<em>{post.starship_class}</em>
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
