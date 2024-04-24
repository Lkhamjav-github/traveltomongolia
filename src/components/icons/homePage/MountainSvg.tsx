import React from 'react'

export const MountainSvg = ({ stroke = "#4997D3" }) => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="mask0_64_316" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                <path d="M0 7.62939e-06H100V100H0V7.62939e-06Z" fill="white" />
            </mask>
            <g mask="url(#mask0_64_316)">
                <path d="M96.0937 62.1084L83.3984 49.4131L70.7031 62.1084" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M96.0937 83.7881L83.3984 71.0928L70.7031 83.7881" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M83.3984 52.5391V96.0938" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <path d="M55.0781 62.1084L42.3828 49.4131L29.6875 62.1084" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M55.0781 83.7881L42.3828 71.0928L29.6875 83.7881" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            <mask id="mask1_64_316" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                <path d="M0 7.62939e-06H100V100H0V7.62939e-06Z" fill="white" />
            </mask>
            <g mask="url(#mask1_64_316)">
                <path d="M42.3828 52.5391V96.0938" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M96.0937 41.2109L75.885 10.3516L65.8203 25.7813" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M34.1797 27.8971C52.2598 27.8971 50.3906 38.8672 72.4609 38.8672L49.8535 3.90313L3.90625 74.2188" stroke={stroke} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
        </svg>


    )
}
