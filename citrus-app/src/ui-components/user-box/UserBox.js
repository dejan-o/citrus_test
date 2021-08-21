import React from 'react'
import './UserBox.scss'
import classNames from 'classnames';

const UserBox = ({isActive, children, handleClick, id}) => {

const userBoxClass = classNames('user-box', {
    'user-box--active': isActive,
})

    return (
        <div className={userBoxClass} onClick={() => handleClick(id)}>
            {children}
        </div>
    )
}

export default UserBox;
