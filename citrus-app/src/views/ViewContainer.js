import React, { useState, useEffect } from 'react'
import LoadingScreen from '../ui-components/loading-screen/LoadingScreen';
import { fetchRequest } from '../utils';
import TodoSection from './TodoSection';
import UsersSection from './UsersSection';

const ViewContainer = () => {

    const [users, setUsers] = useState(null);
    const [todos, setTodos] = useState(null);
    const [activeUserId, setActiveUserId] = useState(null);

    const renderLoadScreen = !users || !(typeof users === 'object') || !Object.values(users).length;
    
    useEffect(() => {
        fetchRequest('https://jsonplaceholder.typicode.com/users', (data) => {
            const usersData = data.reduce( (usersMap, current) => {
                usersMap[current.id] = current;
                return usersMap;
            }, {});
            setUsers(usersData);
        }, 
        console.log('show pop up error view')
        )
    }, []);

    useEffect( () => {
        let active = true;
        if(activeUserId){
            fetchRequest(`https://jsonplaceholder.typicode.com/todos?userId=${activeUserId}`, (data)=> {
                if(active){
                    setTodos(data);
                }
            },
            console.log('show pop up error view')
        ) 
        }
        return () => {
            active = false;
        }
    }, [activeUserId])

    return (
        <div className='view-container'>
            { !renderLoadScreen ?
            <UsersSection users={Object.values(users)} setActiveUser={setActiveUserId} activeUserId={activeUserId}/>
            :
            <LoadingScreen />
            }
            { todos && !!todos.length &&
            <TodoSection todos={todos} user={users[activeUserId]} />
            }
        </div>
    )
}


export default ViewContainer;
