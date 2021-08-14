import React from "react";
import Loader from "../utils/Loader";
import Card from "./Card";

export default function PostsSpecies({ posts, loading }) {
	if (loading) {
		return <Loader />;
	}

	return (
		<div className="container-xxl mb-5">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 justify-content-center">
				{posts.results.map((post) => (
					<Card post={post} type="species" rowNumber={8} />
				))}
			</div>
		</div>
	);
}
