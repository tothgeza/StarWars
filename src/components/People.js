import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PostsPeople from "./PostsPeople";

function People() {
	const [people, setPeople] = useState({
		results: [],
	});
	const [loading, setLoading] = useState(false);
	const [totalPosts, setTotalPosts] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		fetchPeople();
	}, []);

	const fetchPeople = async (url) => {
		setLoading(true);
		let newUrl = "";
		if (url === undefined) {
			newUrl = "https://swapi.dev/api/people/";
			setCurrentPage(1);
		} else {
			newUrl = "https://swapi.dev/api/people/?page=" + url;
			setCurrentPage(url);
		}
		const dataJson = await fetch(newUrl);
		const data = await dataJson.json();
		setPeople(data);
		setTotalPosts(data.count);
		setLoading(false);
	};

	const paginate = (pageNumber) => fetchPeople(pageNumber);

	return (
		<div className="top-level mt-3">
			<Pagination
				postPerPage={postsPerPage}
				totalPosts={totalPosts}
				paginate={paginate}
				currentPage={currentPage}
			/>
			<PostsPeople posts={people} loading={loading} />
		</div>
	);
}
export default People;
