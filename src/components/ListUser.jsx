import React from 'react';
import getName from "./functions/getName";
import getGender from "./functions/getGender";
import getAge from "./functions/getAge";

const ListUser = ({ user }) => {
    const name = getName(user.firstName, user.surname);
    const avatar = getGender(user.gender);
    const age = getAge(user.age);

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