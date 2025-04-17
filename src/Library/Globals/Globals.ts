"use client";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        scroll-behavior: smooth;
    }

    body {
        color: #fff;
        background: #0e0822;
        font-family: var(--font-lexend-exa), Arial, Helvetica, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: rgb(116, 83, 224);
        border-radius: 4px;
    }

    ::-webkit-scrollbar-track {
        background: #130d26;
    }

    .displayNone {
        display: none
    }


    .cvsection {
        display: grid;
        overflow: hidden;
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;


        &.visible {
            visibility: visible;

        }

        &.invisible {
            visibility: hidden;
        }
    }


    .displayNone {
        display: none !important;
        visibility: hidden !important;
        height: 0 !important;
        width: 0 !important;
        opacity: 0 !important;
    }

`;

export const PageContainer = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100dvh;
`;

export const Main = styled.main`
	text-align: center;
	display: flex;
	flex-direction: column;
	gap: 3rem;
	justify-content: center;
	align-items: center;
	flex-grow: 1;
	padding: 4rem;
`;

export const Title = styled.h1`
	font-size: 1.875rem;
	line-height: 2.25rem;
	font-weight: 600;
`;

export const ErrorStack = styled.pre`
	white-space: pre-wrap;
	text-align: left;
	background: transparent;
	padding: 1rem;
	border-radius: 8px;
	color: #e74c3c;
	max-width: 100%;
	overflow-x: auto;
	margin-top: 1.5rem;
	font-size: 1rem;
`;

export const CSS_VARIABLES = {
	"--top-nav-bar-height": "3.5rem",
	"--resume-control-bar-height": "3rem",
	"--resume-padding": "1.5rem",
} as const;
