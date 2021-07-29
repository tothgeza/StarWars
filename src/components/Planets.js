import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PostsPlanets from "./PostsPlanets";

export default function Planets() {
	const [planets, setPlanets] = useState({
		results: [],
	});
	const [loading, setLoading] = useState(false);
	const [totalPosts, setTotalPosts] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		fetchPlanets();
	}, []);

	const fetchPlanets = async (url) => {
		setLoading(true);
		let newUrl = "";
		if (url === undefined) {
			newUrl = "https://swapi.dev/api/planets/";
			setCurrentPage(1);
		} else {
			newUrl = "https://swapi.dev/api/planets/?page=" + url;
			setCurrentPage(url);
		}
		const dataJson = await fetch(newUrl);
		const data = await dataJson.json();
		setPlanets(data);
		setTotalPosts(data.count);
		setLoading(false);
	};

	const paginate = (pageNumber) => fetchPlanets(pageNumber);

	return (
		<div className="mt-auto">
			<div className="container-sm top-level my-3">
				<Pagination
					postPerPage={postsPerPage}
					totalPosts={totalPosts}
					paginate={paginate}
					currentPage={currentPage}
				/>
				<PostsPlanets posts={planets} loading={loading} />
			</div>
		</div>
	);
}
