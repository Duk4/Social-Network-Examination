import React from 'react';
import { Link } from 'react-router-dom';
import ListUser from './ListUser';
import users from '../data.json';

const GroupList = () => {
    return (
        <section className="group">
            <h3>My Group</h3>
            <section className="list">
                {
                    users.map(el => {
                        return (
                            <Link to={'/users/' + el.id} key={el.id}>
                                <ListUser user={el} />
                            </Link>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default GroupList;