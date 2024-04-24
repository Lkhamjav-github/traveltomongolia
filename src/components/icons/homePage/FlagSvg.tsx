import React from 'react'

export const FlagSvg = ({ stroke = "#4997D3" }) => {
    return (
        <svg width="123" height="123" viewBox="0 0 123 123" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_64_344)">
                <mask id="mask0_64_344" style={{ maskType: "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="123" height="123">
                    <path d="M-6.44769e-05 25.882L96.5925 0.000142427L122.474 96.5927L25.8818 122.475L-6.44769e-05 25.882Z" fill="white" />
                </mask>
                <g mask="url(#mask0_64_344)">
                    <path d="M15.7125 24.7048L40.0779 115.638" stroke={stroke} stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M58.3655 26.2707C57.0198 21.2487 51.8581 18.2682 46.8355 19.614L16.5246 27.7358L27.083 67.1401L57.3938 59.0184C62.4164 57.6725 67.5782 60.653 68.9238 65.675L58.3655 26.2707Z" stroke={stroke} stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M68.9239 65.6751C67.5783 60.653 62.4166 57.6726 57.3939 59.0184L51.3318 60.6427L56.2048 78.8291L62.267 77.2048C67.2896 75.859 70.2696 70.6969 68.9239 65.6751Z" stroke={stroke} stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M59.1776 29.3021L68.9238 65.6754C70.2694 70.6973 67.2895 75.8593 62.2668 77.2051L98.6402 67.4589L86.4575 21.9925L59.1776 29.3021Z" stroke={stroke} stroke-width="5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </g>
            <defs>
                <clipPath id="clip0_64_344">
                    <rect width="100" height="100" fill="white" transform="translate(0 25.8818) rotate(-15)" />
                </clipPath>
            </defs>
        </svg>


    )
}
