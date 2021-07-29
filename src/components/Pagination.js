import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
	const pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
		pageNumber.push(i);
	}
	return (
		<nav aria-label="Page navigation">
			<ul className="pagination pagination-lg justify-content-center mb-3">
				{pageNumber.map((number) => (
					<li key={number} className="page-item">
						<a
							onClick={() => paginate(number)}
							className="page-link page-link-shadow"
							href="#"
						>
							{number}
						</a>
					</li>
				))}
				{/* <li className="page-item">
					<a
						className="page-link page-link-shadow"
						href="#"
						aria-label="Previous"
						// onClick={() => fetchPeople(people.previous)}
					>
						<span aria-hidden="true">&laquo;</span>
					</a>
				</li>
				<li className="page-item">
					<a
						className="page-link page-link-shadow"
						href="#"
						onClick={() => fetchPeople(people.next)}
					>
						<span aria-hidden="true">&raquo;</span>
					</a>
				</li> */}
			</ul>
		</nav>
	);
};

export default Pagination;
