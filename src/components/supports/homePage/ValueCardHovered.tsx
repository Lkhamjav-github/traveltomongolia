import React, { ReactElement, useState } from 'react'


interface Props {
    hoveredSvg: ReactElement
    notHoveredSvg: ReactElement
}


export const ValueCardHovered = ({ hoveredSvg, notHoveredSvg }: Props) => {
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        if (window.innerWidth > 768) {
            setIsHovered(true);
        };
    }
    const handleMouseLeave = () => {
        if (window.innerWidth > 768) {
            setIsHovered(false);
        };
    }
    return (
        <div className='text-center lg:w-[264px] lg:h-[230px]' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered
                ? hoveredSvg
                : notHoveredSvg
            }
        </div>
    )
}
