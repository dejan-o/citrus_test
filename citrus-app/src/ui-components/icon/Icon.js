import React from 'react'
import './Icon.scss';

const Icon = ({iconName}) => {
    return (
        <div className={`icon ${iconName}`}/>
    )
}

export default Icon;
