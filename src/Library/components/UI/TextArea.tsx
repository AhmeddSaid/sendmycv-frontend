"use client"
import React from 'react';
import styled from "styled-components";


export const TextAreaShell = styled.textarea`

     resize: none;
     height: 9rem !important;
     padding: 1rem 1rem;
     border: 1px solid #fff;
     border-radius: 0.75rem;
     color: #fff;
     background-color: transparent;
     font-size: 1rem;
     font-weight: 400;
     width: 100%;
     outline: none;
     transition: 300ms;
     margin: 0.75rem 0;


     &::placeholder {
         color: #fff;
         opacity: 0.6;
     }

     &:disabled {
         cursor: not-allowed;
         opacity: 0.6;
     }

     &:focus {
         border-color: #5a5aff;
     }
 `;


const TextArea = ({...rest}) => {
    return (
        <>
            <TextAreaShell
                {...rest} />


        </>
    );
};

export default TextArea;