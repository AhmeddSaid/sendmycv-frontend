"use client";

import styled from "styled-components";
export const UserMenuContainer = styled.div`
	position: absolute;
	top: 88px;
	right: 0;
	z-index: 10;
`;
export const UserMenuWrapper = styled.div`
	width: 17.25rem;
	border-radius: 11px;
	background: #ffffff;
	box-shadow: 0px 4px 33.3px 0px #00000040;

	display: flex;
	flex-direction: column;
	& a {
		border-bottom: 1px solid #000;
		&:last-child {
			border: none;
		}
	}
`;

export const MenuItem = styled.div`
	color: #20173a;
	width: 100%;
	display: flex;
	justify-content: space-between;
	padding: 1rem 1.5rem;
	user-select: none;
	border-bottom: 1px solid #000;
	font-weight: 300;
	cursor: pointer;
	&:last-child {
		border: none;
	}
`;
