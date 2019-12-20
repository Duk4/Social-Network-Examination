import React from 'react';
import male from "../images/male.png";
import female from "../images/female.png";

const ListUser = ({ user }) => {
    let name, avatar, age;

    if (user.firstName && user.surname) {
        name = user.firstName + ' ' + user.surname;
    } else if (!user.firstName) {
        name = user.surname;
    } else if (!user.surname) {
        name = user.firstName;
    };

    (user.gender === 'male') ? (avatar = male) : (avatar = female);
    (user.age) ? (age = user.age + ' years old') : (age = 'age unknown');

    return (
        <div className="list-user">
            <img src={avatar} alt="male" />
            <p>{name}</p>
            <p>{user.gender}</p>
            <p>{age}</p>
        </div>
    );
}

export default ListUser;