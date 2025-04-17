"use client";

import Image, {StaticImageData} from "next/image";
import styled from "styled-components";
import {Flex} from "@/Library/Grids/Grids";

const CardHolder = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 0.75rem;
    max-width: 24.25rem;
    height: 17.75rem;
    border-radius: 1.5rem;
    border: 1px solid #9f9e9e81;
    background: linear-gradient(
            180deg,
            rgba(217, 217, 217, 0.1) 0%,
            rgba(115, 115, 115, 0.1) 100%
    );
    backdrop-filter: blur(6px);

    @media screen and (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 1rem;
        margin: 0 auto;

        & h3 {
            font-size: 1rem;
        }

        & p {
            font-size: 0.875rem;
        }
    }
`;

const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4.625rem;
    height: 4.625rem;
    background: #ffffff;
    border-radius: 50%;
    margin: 0 auto;

    @media screen and (max-width: 768px) {
        width: 3.5rem;
        height: 3.5rem;

        & img {
            width: 2.5rem;
            height: 2.5rem;
        }
    }
`;

const Title = styled.h3`
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    text-underline-position: from-font;
    text-decoration-skip-ink: none;
`;
const Text = styled.p`
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.25rem;
    color: #d8d8d8;
`;

export default function FeatureCard({
                                        icon,
                                        title,
                                        text,
                                    }: {
    icon: StaticImageData;
    title: string;
    text: string;
}) {
    return (
        <CardHolder>
            <Icon>
                <Image src={icon} alt=""/>
            </Icon>
            <Flex $direction="column" $gap="1rem">
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Flex>
        </CardHolder>
    );
}
