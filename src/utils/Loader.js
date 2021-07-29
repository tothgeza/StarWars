import React from "react";
import styled, { keyframes } from "styled-components";

import { ReactComponent as LoaderLogo } from "../img/loader.svg";

import { COLOR_YELLOW } from "../img/colors";

const loaderSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const LoaderStyle = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	min-height: 40vh;
	.loader-logo {
		animation: ${loaderSpin} infinite 2.5s linear;
		height: 8rem;
		fill: ${COLOR_YELLOW};
	}
`;

const Loader = () => (
	<LoaderStyle data-testid="loader">
		<LoaderLogo className="loader-logo">
			<filter id="shadow" color-interpolation-filters="sRGB">
				<feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.5" />
			</filter>
		</LoaderLogo>
	</LoaderStyle>
);

export default Loader;
