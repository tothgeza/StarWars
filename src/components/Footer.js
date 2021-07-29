import React from "react";

export default function Footer() {
	return (
		<div className="container text-end my-footer ">
			<footer className="py-2 px-5 mt-auto">
				<div className="footer-card text-center align-middle">
					<span> </span>
					<div class="row align-items-center">
						<div class="col-9 copyright">
							<span className="text-muted fs-7">
								&copy; {new Date().getFullYear()}
							</span>
							<span className="text-warning"> SWAPI</span>
							<span className="text-muted fst-italic fs-7"> by Géza Tóth </span>
						</div>
						<div class="col-1">
							<a
								href="https://www.linkedin.com/in/gezatoth"
								target="_blank"
								rel="noreferrer"
							>
								<i class="fab fa-linkedin fs-5 text-primary"></i>
							</a>
						</div>
						<div class="col-1">
							<a
								href="https://github.com/tothgeza"
								target="_blank"
								rel="noreferrer"
							>
								<i className="fab fa-github text-white fs-5"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
