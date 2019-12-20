import React from 'react';
import male from "../images/male.png";
import female from "../images/female.png";
import users from '../data.json';

const UserProfile = () => {
    const id = window.location.pathname.slice(7);
    const user = users[id - 1];
    console.log(user);

    return (
        <section className="user">
            <h3>User</h3>
            <div className="user-profile">
                {id}
            </div>
        </section>
    );
}

export default UserProfile;