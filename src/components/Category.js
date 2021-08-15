import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import Cards from "./Cards";

function Category({ typeOfCategory }) {
	const [dataOfCategory, setDataOfCategory] = useState({
		results: [],
	});
	const [loading, setLoading] = useState(false);
	const [totalPosts, setTotalPosts] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		fetchCategory();
	}, []);

	const fetchCategory = async (url) => {
		setLoading(true);
		let newUrl = "";
		if (url === undefined) {
			newUrl = `https://swapi.dev/api/${typeOfCategory}/`;
			setCurrentPage(1);
		} else {
			newUrl = `https://swapi.dev/api/${typeOfCategory}/?page=` + url;
			setCurrentPage(url);
		}
		const dataJson = await fetch(newUrl);
		const data = await dataJson.json();
		setDataOfCategory(data);
		setTotalPosts(data.count);
		setLoading(false);
	};

	const paginate = (pageNumber) => fetchCategory(pageNumber);

	return (
		<div className="top-level mt-3">
			<Pagination
				postPerPage={postsPerPage}
				totalPosts={totalPosts}
				paginate={paginate}
				currentPage={currentPage}
			/>
			<Cards
				posts={dataOfCategory}
				loading={loading}
				typeOfCategory={typeOfCategory}
				rowNumber={8}
			/>
		</div>
	);
}
export default Category;
