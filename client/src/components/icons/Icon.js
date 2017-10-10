import React from 'react';

const Icon = (props) => {
    let { fill, width, height, id } = props;

    fill = fill ? fill : 'rgba(255, 255, 255, 1)';
    width = width ? width : "24px";
    height = height ? height : "24px";
    
    return(
        <svg fill={fill} width={width} height={height}>
            <use xlinkHref={`#${id}`} />
        </svg>
    )
}

export default Icon;
