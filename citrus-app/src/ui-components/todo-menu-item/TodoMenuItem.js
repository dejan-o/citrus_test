import React from 'react';
import classNames from 'classnames';
import './TodoMenuItem.scss';

const TodoMenuItem = ({handleClick, count, text, isActive}) => {

    const todoClass = classNames('todo-menu-item', {
        'todo-menu-item--active': isActive,
    })
    return (
        <div className={todoClass} onClick={handleClick}>
            {`${text} (${count})`}
        </div>
    )
}

export default TodoMenuItem;