"use client";
import styled from "styled-components";
import ArrowDown from "@/Library/components/IconGraphy/ArrowDown/ArrowDown";
// import arrowDown from "../../../../public/icons/arrow-down";


const DropdownWrapper = styled.div`
    position: relative;
    width: 110px;
    display: flex;
    align-items: center;

    & img {
        position: absolute;
        right: 1.5rem;
        cursor: pointer;
        pointer-events: none;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const DropdownSelect = styled.select`
    width: 100%;
    padding: 0.5rem;
    font-size: 1.125rem;
    border-radius: 5px;
    border: 1px solid transparent;
    background-color: transparent;
    font-weight: 200;
    color: #fff;
    appearance: none;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
`;

export default function LanguageSelect() {
    return (
        <DropdownWrapper>
            <DropdownSelect>
                =
                <option value={"English"}>English</option>
                <option value={"Arabic"}>Arabic</option>
            </DropdownSelect>
            <ArrowDown/>
        </DropdownWrapper>
    );
}
