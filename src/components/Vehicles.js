import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import PostsVehicles from "./PostsVehicles";

function Vehicles() {
	const [vehicles, setVehicles] = useState({
		results: [],
	});
	const [loading, setLoading] = useState(false);
	const [totalPosts, setTotalPosts] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);

	useEffect(() => {
		fetchVehicles();
	}, []);

	const fetchVehicles = async (url) => {
		setLoading(true);
		let newUrl = "";
		if (url === undefined) {
			newUrl = "https://swapi.dev/api/vehicles/";
			setCurrentPage(1);
		} else {
			newUrl = "https://swapi.dev/api/vehicles/?page=" + url;
			setCurrentPage(url);
		}
		const dataJson = await fetch(newUrl);
		const data = await dataJson.json();
		setVehicles(data);
		setTotalPosts(data.count);
		setLoading(false);
	};

	const paginate = (pageNumber) => fetchVehicles(pageNumber);

	return (
		<div className="top-level mt-3">
			<Pagination
				postPerPage={postsPerPage}
				totalPosts={totalPosts}
				paginate={paginate}
				currentPage={currentPage}
			/>
			<PostsVehicles posts={vehicles} loading={loading} />
		</div>
	);
}
export default Vehicles;
