"use client"
import Image from "next/image";
import React from 'react';
import arrowLeft from "./../../../.././../../public/icons/arrow-left.svg";
import {Flex} from "@/Library/Grids/Grids";
import StepsProgress from "@/Library/_Pages/Checkout/_components/UI/StepsProgress";
import {CvStepHeader} from "@/Library/_Pages/CvSteps/CvSteps.styles";


const CvStepsHeader = ({steps, setSteps}: { steps: number; setSteps: any }) => {
    return (
        <>
            <CvStepHeader>

                {steps > 1 && <Flex $gap={"8px"} onClick={() => setSteps((prev:number) => prev - 1)}>

                    <Image src={arrowLeft} alt={""}/>
                    <p>back</p>
                </Flex>}


                <StepsProgress step={steps} totalSteps={6}/>


            </CvStepHeader>
        </>
    );
};

export default CvStepsHeader;