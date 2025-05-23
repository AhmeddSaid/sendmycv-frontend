"use client";

import styled from "styled-components";

export const ResumeDetailsWrapper = styled.section`
	position: relative;
	img.resumeBg {
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: -1;
		width: 100%;
		object-fit: cover;
	}
`;
