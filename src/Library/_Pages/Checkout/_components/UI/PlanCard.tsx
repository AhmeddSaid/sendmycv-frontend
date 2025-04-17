"use client";
import styled from "styled-components";
import MostPopular from "./MostPopular";

const Card = styled.div<{ selected: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    gap: 3rem;
    opacity: ${({selected}) => (selected ? 1 : 0.5)};
    background-color: ${({selected}) => (selected ? "#0e0822" : "#140e27")};
    padding: 0 2rem;
    cursor: pointer;
    transition: border-color 0.3s ease;
    width: 33rem;
    height: 9.25rem;
    border-radius: 0.75rem;
    margin-bottom: 2rem;
    border: 3px solid ${({selected}) => (selected ? "#5959ff" : "transparent")};

    &:hover {
        border-color: #5a5aff;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 0 1rem;
        height: 7rem;
        gap: 1rem;
        margin-bottom: 1rem;
    }
`;

const PlanInfo = styled.div<{ selected: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: 768px) {
        gap: 0.5rem;
    }
`;

const PlanName = styled.div`
    color: #fff;
    font-weight: 400;
    font-size: 1.375rem;
    font-family: Inter, sans-serif;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const PlanPrice = styled.h3<{ selected: boolean }>`
    font-size: 2.125rem;
    color: #fff;
    transition: all 0.3s ease;
    font-weight: ${({selected}) => (selected ? 700 : 400)};

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const OuterCircle = styled.div`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 4px solid #5a5aff;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: border-color 0.3s ease;

    @media (max-width: 768px) {
        width: 24px;
        height: 24px;
    }
`;

const InnerCircle = styled.div<{ selected: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${({selected}) => (selected ? "#5a5aff" : "transparent")};
    transition: background-color 0.3s ease;

    @media (max-width: 768px) {
        width: 12px;
        height: 12px;
    }
`;

export default function PlanCard({
                                     name,
                                     popular,
                                     price,
                                     selected,
                                     onSelect,
                                 }: {
    name: string;
    popular: boolean;
    price: string;
    selected: boolean;
    onSelect: () => void;
}) {
    return (
        <Card selected={selected} onClick={onSelect}>
            <OuterCircle>
                <InnerCircle selected={selected}/>
            </OuterCircle>
            <PlanInfo selected={selected}>
                <PlanPrice selected={selected}>${price}/mo</PlanPrice>
                <PlanName>{name}</PlanName>
            </PlanInfo>
            {popular && <MostPopular/>}
        </Card>
    );
}
