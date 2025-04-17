"use client";


import styled from "styled-components";
import {Breakpoints, Flex, Section} from "@/Library/Grids/Grids";


export const AccountContainer = styled.section`




    min-height: 100vh;
    position: relative;
    overflow: hidden;

    .ImageShell {

        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: -5;
        right: 0;

        img {

            height: 100%;
            width: 100%;
            object-fit: cover;

        }

    }

`

export const AccountShell = styled(Section)`



    padding-block: 90px 82px;
    display: flex;
    overflow: hidden;


    @media screen and ( max-width: ${Breakpoints.lg}) {


        flex-direction: column;


    }




`


export const InformationSection = styled(Flex)`

    padding-right: 44px;
    flex-direction: column;
    gap: 46px;
    align-items: start;
    border-right: 1px solid white;
    width: 50%;

    @media screen and ( max-width: ${Breakpoints.lg}) {


        width: 100%;
        border-right: none;
        padding-right: unset;


    }


    .InformationSectionHeader {
        font-size: 26px;
        font-weight: 700;
        line-height: 50.44px;

    }

    .InputLabel {

        font-weight: 400;
        font-size: 16px;


        line-height: 31.04px;


    }

    .inputShell {

        width: 100%;

    }

    .SaveMoreShell {
        width: 100%;
        border-radius: 20px;
        border: 1px solid white;


        //border-image-slice: 1;
        padding: 33px 22px;
        z-index: 1;


    }


    .SaveMoreTitles {


        & :first-child {

            font-size: 24px;
            font-weight: 700;
            line-height: 46.56px;

        }

        & :last-child {

            font-size: 16px;
            font-weight: 300;
            line-height: 31.04px;

        }

        padding-bottom: 23px;
        border-bottom: 1px solid white;

    }


    .InformationOptions {


        padding-block: 12px;

        gap: 6px;
    }


    .marginTop20 {


        margin-top: 20px;
    }


`


export const InformationSectionEmail = styled.div`


    p {


        font-size: 14px;
        font-weight: 200;
        line-height: 27.16px;


    }

`


export const VerticalDivider = styled.div`


    width: 1px;
    height: 100%;
    background: white;


        // @media screen and ( max-width: ${Breakpoints.lg}) {
    //
    //
    //     display: none;
    //
    // }




`


export const SubscriptionSection = styled.div`

    padding-left: 36px;

    width: 50%;
    @media screen and ( max-width: ${Breakpoints.lg}) {


        width: 100%;
        padding-left: unset;


        margin-top: 50px;
    }

    .InformationSectionHeader {


        font-size: 26px;
        font-weight: 700;
        line-height: 50.44px;


    }


    .ExpiredShell {

        border: 1px white solid;

        border-radius: 20px;
        padding: 34px 21px 27px;


        .ExpiredHeaders {


            & :first-child {

                font-size: 22px;
                font-weight: 500;
                line-height: 42px;

            }

            & :last-child {

                font-size: 18px;
                font-weight: 500;
                line-height: 32px;
                text-decoration: underline;

            }


        }


        .ExpiredBody {

            font-weight: 200;
            font-size: 14px;
            line-height: 27px;
            color: #ffffff;

        }

        .ExpiredBody2 {

            font-weight: 200;
            font-size: 14px;
            line-height: 27px;
            color: #FF6A6A;

            margin-top: 50px;

        }


    }


    .ButtonShell {


        width: 100%;
        margin-top: 47px;

        button {

            width: 100% !important;

        }


    }







`
