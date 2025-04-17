"use client";

import styled from "styled-components";

export const Header = styled.header`
	width: 100%;
	height: 6.25rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid #ffffff66;
	background-color: transparent;
	position: relative;
	& .nav a {
		list-style: none;
		color: #fff;
		cursor: pointer;
		font-weight: 200;
		&:first-child {
			font-weight: 600;
		}
	}
	& img {
		cursor: pointer;
	}
`;
