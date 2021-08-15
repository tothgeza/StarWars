import TruncateMarkup from "react-truncate-markup";
import { FaCoins } from "react-icons/fa";

const Card = ({ post, typeOfCategory, rowNumber }) => {
	if (typeOfCategory === "people") {
		typeOfCategory = "characters";
	}
	const slicedData = sliceData(post, rowNumber);

	const imgURL = `https://starwars-visualguide.com/assets/img/${typeOfCategory}/`;

	function getId(url) {
		return url.split("/")[url.split("/").length - 2];
	}

	function formatKeys(key) {
		const fKey = key.replace("average", "avg.").replaceAll("_", " ");
		return fKey.charAt(0).toUpperCase() + fKey.slice(1);
	}

	function formatNumber(number) {
		return parseInt(number).toLocaleString("en-US").toString();
	}

	function formatUnit(number, key) {
		const num = formatNumber(number.replaceAll(",", ""));
		switch (key) {
			case "height":
			case "average_height":
				return num + " cm";
			case "length":
				return num + " m";
			case "mass":
				return num + " kg";
			case "diameter":
				return num + " Km";
			case "surface_water":
				return num + " %";
			case "rotation_period":
				return num + " hours";
			case "orbital_period":
				return num + " days";
			case "average_lifespan":
				return num + " years";
			case "cost_in_credits":
				return (
					<span>
						{num + " "}
						<FaCoins />
					</span>
				);
			case "max_atmosphering_speed":
				return num + " Km/h";
			case "crew":
			case "passengers":
				return num + " persons";
			case "cargo_capacity":
				return num + " ?";
			default:
				return num;
		}
	}

	function sliceData(data, number) {
		return Object.keys(data)
			.slice(0, number)
			.reduce((result, key) => {
				result[key] = data[key];
				return result;
			}, {});
	}

	return (
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
								<h6 className="card-title">
									{typeOfCategory !== "films" ? post.name : post.title}
								</h6>
							</TruncateMarkup>
						</div>
					</div>
					<div className="flip-card-back">
						<div
							className="card-body d-flex align-content-start flex-wrap"
							style={{ height: "300px" }}
						>
							{/* Films has different data structure, so it need handled separatly */}
							{typeOfCategory === "films" ? (
								<div className="card-text">
									<p className="mb-0">
										<strong>Title: </strong>
										<em>{slicedData.title}</em>
									</p>
									<p className="mb-0">
										<strong>Director: </strong>
										<em>{slicedData.director}</em>
									</p>
									<p className="mb-0">
										<strong>Producer: </strong>
										<em>{slicedData.producer}</em>
									</p>
									<p className="mb-0">
										<strong>Release date: </strong>
										<em>{slicedData.release_date}</em>
									</p>
									<p className="mt-2">
										<TruncateMarkup lines={8}>
											<p align="justify">{post.opening_crawl}</p>
										</TruncateMarkup>
									</p>
								</div>
							) : (
								<div className="card-text">
									{Object.entries(slicedData).map(([key, value]) => (
										<p className="mb-0">
											<strong>{formatKeys(key)}: </strong>
											<em>
												{isNaN(value.replaceAll(",", ""))
													? value
													: formatUnit(value, key)}
											</em>
										</p>
									))}
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
