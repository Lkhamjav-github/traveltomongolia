import React from 'react'

export const TimeSvg = ({ stroke = "#4997D3" }) => {
    return (
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_64_359)">
                <mask id="mask0_64_359" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                    <path d="M100 0H0V100H100V0Z" fill="white" />
                </mask>
                <g mask="url(#mask0_64_359)">
                    <path d="M51.9531 20.7031V51.9531H30.0781" stroke={stroke} stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <mask id="mask1_64_359" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="100" height="100">
                        <path d="M0 7.62939e-06H100V100H0V7.62939e-06Z" fill="white" />
                    </mask>
                    <g mask="url(#mask1_64_359)">
                        <path d="M5.85938 12.8906H14.8437C19.1586 12.8906 22.6562 16.3885 22.6562 20.7031V29.6875" stroke={stroke} stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M55.281 82.2262L67.7458 94.3904C70.3478 96.8672 74.5111 96.5897 76.7613 93.7897L96.0937 66.7856" stroke={stroke} stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M49.0258 96.0835C24.0187 95.5649 3.90625 75.1312 3.90625 49.9999C3.90625 36.2274 9.94648 23.8657 19.5225 15.4194" stroke={stroke} stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M51.9531 3.94698C76.5041 4.97041 96.0937 25.1976 96.0937 50.0001C96.0937 50.6552 96.0801 51.3071 96.0529 51.9556" stroke={stroke} stroke-width="6" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </g>
            </g>
            <defs>
                <clipPath id="clip0_64_359">
                    <rect width="100" height="100" fill="white" />
                </clipPath>
            </defs>
        </svg>


    )
}
