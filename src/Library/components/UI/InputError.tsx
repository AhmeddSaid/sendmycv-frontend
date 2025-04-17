"use client";
import React from "react";
import styled from "styled-components";

const Error = styled.p<{ big: boolean }>`
	font-size: ${({ big }) => (big ? "1rem" : "0.875rem")};
	font-weight: ${({ big }) => (big ? "600" : "400")};
	line-height: ${({ big }) => (big ? "1.5rem" : "1rem")};
	//margin: 0.25rem 0 0;
	color: #d41a1a;
	display: inline-block;
	max-width: 300px;
`;

const InputError = ({
	message,
	className,
	id,
	big = false,
}: {
	message: string | boolean;
	className?: string;
	id?: string;
	big?: boolean;
}) => {
	return (
		<>
			<Error big={big} className={className} id={id}>
				{message}
			</Error>
		</>
	);
};

export default InputError;
