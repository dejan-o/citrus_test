import React from 'react'
import './Icon.scss';

const Icon = ({iconName}) => {
    return (
        <div className={`icon icon-${iconName}`}/>
    )
}

export default Icon;
