import React from 'react';
import ListUser from './ListUser';

const GroupList = ({ users }) => {
    return (
        <div className="list">
            {
                users.map(el => {
                    return <ListUser key={el.id} user={el} />
                })
            }
        </div>
    )
}

export default GroupList;