import React, { useState } from 'react';
import './TodoSection.scss';
import TodoItem from '../ui-components/todo-item/TodoItem';
import TodoMenuItem from '../ui-components/todo-menu-item/TodoMenuItem';

const getTitle = (name) => {
    return name.split(' ')[0] + '\'s todos';
}

const TodoSection = ({todos, user}) => {

   const [shownTodos, setShownTodos] = useState(todos);
    const [activeMenuItem, setActiveMenuItem] = useState(1);

    const allTodos = {
        id: 1,
        text: 'all',
        items: todos,
    }

    const completedTodos = {
        id: 2,
        text: 'Completed',
        items: todos.filter( todo => todo.completed),
    }

    const uncompletedTodos = {
        id: 3,
        text: 'Uncompleted',
        items: todos.filter( todo => !todo.completed),
    }

    const menuTodosArray = [allTodos, completedTodos, uncompletedTodos];

    const handleMenuItemClick = (id) => {
        setShownTodos(menuTodosArray[id-1].items);
        setActiveMenuItem(menuTodosArray[id-1].id);
    }

    return (
        <div className="todos-section">
            <div className="row">
           <div className="todos-section__header">
               <h2 className="todos-section__header__title">{getTitle(user.name)}</h2>
                <div className="todos-section__header__menu">
                    {menuTodosArray.map( menuItem => {
                        return (
                            <TodoMenuItem
                            key={menuItem.id}
                            handleClick={() => handleMenuItemClick(menuItem.id)}
                            count={menuItem.items.length}
                            text={menuItem.text}
                            isActive={menuItem.id === activeMenuItem}
                            />
                        )
                    })}
                   
                </div>
           </div>
            <div className="todos-section__list">
                {
                    shownTodos.map(todo => {
                        return ( 
                        <TodoItem key={todo.id} todoItem={todo} />
                        );
                    })
                }
            </div>
            </div>
        </div>
    )
}

export default TodoSection;