import React, { useState, useEffect } from 'react'
import LoadingScreen from '../ui-components/loading-screen/LoadingScreen';
import UsersSection from './UsersSection';

const ViewContainer = () => {

    const [users, setUsers] = useState(null);
    const [todos, setTodos] = useState(null);
    const [activeUserId, setActiveUserId] = useState(null);
    const [error, setError] = useState(false);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then( res => res.json())
        .then( data => {
            setUsers(data);
            setError(false);
        })
        .catch( error => setError(true));
    }, []);

    useEffect( () => {
        let active = true;
        if(activeUserId){
            setTodos(null);
            fetch(`https://jsonplaceholder.typicode.com/todos?userId=${activeUserId}`)
            .then( res => res.json())
            .then( data => {
                if(active){
                setTodos(data);
                }
            })
            .catch( error => console.log('display error pop up view'));
        }
        return () => {
            active = false;
        }
    }, [activeUserId])

    return (
        <div className='view-container'>
            { users ?
            <UsersSection users={users} setActiveUser={setActiveUserId} activeUserId={activeUserId}/>
            :
            <LoadingScreen />
            }
        </div>
    )
}


export default ViewContainer;