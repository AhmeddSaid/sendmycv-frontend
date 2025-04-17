"use client"

import styled from "styled-components";
import {Flex} from "@/Library/Grids/Grids";

export const ResumeDetailsCvWrapper = styled.div`
    width: 55.6875rem;
    border-radius: 1.625rem 1.625rem 0 0;
    background: rgba(255, 255, 255, 0.10);
    position: relative;

    img {
        width: 100%;
        border-radius: 22px;
    }
`
export const ResumeDetailsCvImageContainer = styled.div`
    padding: 2rem;
    /* height: 80dvh; */
    overflow: auto;
`

export const EyeIconContainer = styled.div`
    width: 5.25rem;
    height: 3rem;
    border-radius: 1rem 1rem 0 0;
    background: #33214D;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
`

export const ResumeDetailsCvFooter = styled(Flex)`
    flex-shrink: 0;
    border-radius: 1.625rem 1.625rem 0 0;
    background: linear-gradient(80deg, #5A5AFF 3.28%, #009 212.72%);
    backdrop-filter: blur(67.4000015258789px);
    position: sticky;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1rem 2rem;

    p {
        color: #FFF;
        font-size: 0.75rem;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
    }

`