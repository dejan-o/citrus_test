import React from 'react';
import Icon from '../icon/Icon';
import './TodoItem.scss';

const TodoItem = ({todoItem}) => {
    return (
        <div className="todo-item">
            <div className="todo-item__check">
                {todoItem.completed &&
                <Icon iconName="check" />
                }
            </div>
            <div className={`todo-item__text ${todoItem.completed ? 'todo-item__text--completed' : null}`}>
                {todoItem.title}
            </div>
        </div>
    )
}

export default TodoItem;
