"use client";
import React from "react";
import styled from "styled-components";

const StepHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background-color: #1b1449;
    font-size: 1.5rem;
    font-weight: 600;
    color: #ffffff66;
    transition: all 500ms ease;

    &.active {
        background-image: linear-gradient(to right, #5a5aff, #000099);
        color: #fff;
        filter: drop-shadow(0 0 20px #675fff99);
    }

    @media (max-width: 768px) {
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
    }
`;

export default function Step({
                                 step,
                                 active,
                             }: {
    step: number;
    active: boolean;
}) {
    return <StepHolder className={active ? "active" : ""}>{step}</StepHolder>;
}
