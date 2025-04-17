"use client";
import styled from "styled-components";
import {Flex} from "../../Grids/Grids";

export const HomeContainer = styled.div`
  position: relative;
  overflow: hidden;

  & .bg {
    position: absolute;
    top: -410px;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: -1;
    background-attachment: fixed;
    opacity: 0.1;
    object-position: top;
    pointer-events: none;
  }
`;

export const SectionTitle = styled.h3`
  text-align: center;
  margin: auto;
  font-size: 2.5rem;
  color: #fff;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SectionDesc = styled.p`
  font-weight: 300;
  font-size: 1.25rem;
  line-height: 1.875rem;
  text-align: center;
  margin: 1.5rem auto;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 0 1rem 1rem;
    line-height: 1rem;
  }
`;

export const HeroSection = styled.div`
    text-align: center;
    margin: 6.25rem auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3.5rem;
    /* height: calc(100dvh - 9rem); */

    .RowStyles {


        padding-inline: 32px;


    }

    .displayFlex {


        display: flex;
        justify-content: center;

        margin-top: 32px;

    }

    @media screen and (max-width: 768px) {
        padding: 0 1rem;
    }

    & h1 {
        font-size: 5rem;
        font-weight: 700;
        background-color: #00000040;
        color: transparent;
        -webkit-background-clip: text;
        -moz-background-clip: text;
        background-clip: text;
        text-shadow: 1px 1px 1px #fff;
        filter: drop-shadow(0px 4px 4px #00000040);
    }

    & p {
        font-size: 1rem;
        font-weight: 300;
        line-height: 1.5rem;
        margin: auto;
    }

    @media screen and (max-width: 768px) {
        & h1 {
            font-size: 3rem;
        }

        & button {
            width: 100%;
        }
    }
`;

export const FeatureCardHolder = styled(Flex)`
    margin: 11.875rem auto;
    gap: 2.875rem;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        margin: 5rem auto;
    }
`;

export const HowItWorksHolder = styled(Flex)`
  @media screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;
