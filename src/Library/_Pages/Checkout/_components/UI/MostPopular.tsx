"use client";
import React from "react";
import styled from "styled-components";

const MostPopularTag = styled.div`
    width: 9rem;
    height: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff576f;
    border-radius: 0.75rem;
    color: #fff;
    font-weight: 700;
    font-size: 0.875rem;
    text-transform: uppercase;
    font-family: Inter;

    @media (max-width: 768px) {
        width: 7rem;
        height: 2rem;
        font-size: 0.75rem;
    }
`;

export default function MostPopular() {
    return <MostPopularTag>Most Popular</MostPopularTag>;
}
