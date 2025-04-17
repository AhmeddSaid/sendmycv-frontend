"use client";
import Image from "next/image";
import styled from "styled-components";

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #9f9e9e;
  background-image: linear-gradient(
    to bottom,
    rgba(217, 217, 217, 0.3),
    #7373734d
  );
`;

export default function SocialHolder({
                                         src,
                                         alt,
                                     }: {
    src: string;
    alt: string;
}) {
    return (
        <Circle>
            <Image src={src} alt={alt}/>
        </Circle>
    );
}
