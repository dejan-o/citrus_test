import React from 'react';
import './UsersSection.scss';
import UserBox from '../ui-components/user-box/UserBox';

const UsersSection = ({users, setActiveUser, activeUserId}) => {
    return (
        <div className="users-section">
            <div className="row">
           <div className="users-section__header">
               <h2 className="users-section__header__title">Pick a user</h2>
           </div>
            <div className="users-section__list">
                {users.map( user => {
                    return ( 
                        <UserBox key={user.id} handleClick={setActiveUser} id={user.id} isActive={user.id === activeUserId} >
                            {user.name}
                        </UserBox>
                    );
                })}
            </div>
            </div>
        </div>
    )
}

export default UsersSection;
