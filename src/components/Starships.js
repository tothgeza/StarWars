import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Cards from "./Cards";

function Starships() {
	const [starships, setStarships] = useState({
		results: [],
	});
	const [loading, setLoading] = useState(false);
	const [totalPosts, setTotalPosts] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		fetchStarships();
	}, []);

	const fetchStarships = async (url) => {
		setLoading(true);
		let newUrl = "";
		if (url === undefined) {
			newUrl = "https://swapi.dev/api/starships/";
			setCurrentPage(1);
		} else {
			newUrl = "https://swapi.dev/api/starships/?page=" + url;
			setCurrentPage(url);
		}
		const dataJson = await fetch(newUrl);
		const data = await dataJson.json();
		setStarships(data);
		setTotalPosts(data.count);
		setLoading(false);
	};

	const paginate = (pageNumber) => fetchStarships(pageNumber);

	return (
		<div className="top-level mt-3">
			<Pagination
				postPerPage={postsPerPage}
				totalPosts={totalPosts}
				paginate={paginate}
				currentPage={currentPage}
			/>
			<Cards posts={starships} loading={loading} type="starships" />
		</div>
	);
}
export default Starships;
