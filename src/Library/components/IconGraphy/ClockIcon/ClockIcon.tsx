import React from 'react';

const ClockIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                  stroke="url(#paint0_linear_6_1072)" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
                  stroke="url(#paint1_linear_6_1072)" strokeWidth="1.5" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <defs>
                <linearGradient id="paint0_linear_6_1072" x1="7.19084" y1="-13.3846" x2="-1.59649" y2="-12.4303"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCC46"/>
                    <stop offset="1" stop-color="#9B6700"/>
                </linearGradient>
                <linearGradient id="paint1_linear_6_1072" x1="12.6889" y1="1.61001" x2="10.8812" y2="1.71444"
                                gradientUnits="userSpaceOnUse">
                    <stop stop-color="#FFCC46"/>
                    <stop offset="1" stop-color="#9B6700"/>
                </linearGradient>
            </defs>
        </svg>
    );
};

export default ClockIcon;