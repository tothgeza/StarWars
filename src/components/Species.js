import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PostsSpecies from "./PostsSpecies";

function Species() {
	const [species, setSpecies] = useState({
		results: [],
	});
	const [loading, setLoading] = useState(false);
	const [totalPosts, setTotalPosts] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		fetchSpecies();
	}, []);

	const fetchSpecies = async (url) => {
		setLoading(true);
		let newUrl = "";
		if (url === undefined) {
			newUrl = "https://swapi.dev/api/species/";
			setCurrentPage(1);
		} else {
			newUrl = "https://swapi.dev/api/species/?page=" + url;
			setCurrentPage(url);
		}
		const dataJson = await fetch(newUrl);
		const data = await dataJson.json();
		setSpecies(data);
		setTotalPosts(data.count);
		setLoading(false);
	};

	const paginate = (pageNumber) => fetchSpecies(pageNumber);

	return (
		<div className="top-level mt-3">
			<Pagination
				postPerPage={postsPerPage}
				totalPosts={totalPosts}
				paginate={paginate}
				currentPage={currentPage}
			/>
			<PostsSpecies posts={species} loading={loading} />
		</div>
	);
}
export default Species;
