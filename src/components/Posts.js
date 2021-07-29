import React from "react";
import Loader from "../utils/Loader";

export default function Posts({ posts, loading }) {
	const imgURL = "https://starwars-visualguide.com/assets/img/characters/";

	function getId(url) {
		return url.split("/")[url.split("/").length - 2];
	}

	if (loading) {
		return <Loader />;
	}

	return (
		<div className=" my-auto bdr">
			<table className="table row-effect align-middle">
				<thead>
					<tr>
						<th> </th> <th> Name </th> <th scope="col"> Height </th>
						<th scope="col"> Mass </th> <th scope="col"> Birth </th>
						<th scope="col"> Gender </th>
					</tr>
				</thead>
				<tbody>
					{posts.results.map((person) => (
						<tr className="">
							<th>
								<div
									className="img"
									style={{
										backgroundImage: `url(${imgURL + getId(person.url)}.jpg)`,
									}}
								/>
							</th>
							<th> {person.name} </th>
							<th>
								{person.height} <span> cm </span>
							</th>
							<th>
								{person.mass} <span> Kg </span>
							</th>
							<th> {person.birth_year} </th>
							<th> {person.gender} </th>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
