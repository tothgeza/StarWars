import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Cards from "./Cards";

function Films() {
	const [films, setFilms] = useState({
		results: [],
	});
	const [loading, setLoading] = useState(false);
	const [totalPosts, setTotalPosts] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		fetchFilms();
	}, []);

	const fetchFilms = async (url) => {
		setLoading(true);
		let newUrl = "";
		if (url === undefined) {
			newUrl = "https://swapi.dev/api/films/";
			setCurrentPage(1);
		} else {
			newUrl = "https://swapi.dev/api/films/?page=" + url;
			setCurrentPage(url);
		}
		const dataJson = await fetch(newUrl);
		const data = await dataJson.json();
		setFilms(data);
		setTotalPosts(data.count);
		setLoading(false);
	};

	const paginate = (pageNumber) => fetchFilms(pageNumber);

	return (
		<div className="top-level mt-3">
			<Pagination
				postPerPage={postsPerPage}
				totalPosts={totalPosts}
				paginate={paginate}
				currentPage={currentPage}
			/>
			<Cards posts={films} loading={loading} type="films" />
		</div>
	);
}
export default Films;
