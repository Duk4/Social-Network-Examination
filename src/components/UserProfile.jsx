import React from 'react';
import getUser from "./functions/getUser";
import getName from "./functions/getName";
import getGender from "./functions/getGender";
import getAge from "./functions/getAge";
import getFriends from "./functions/getFriends";
import getFriendOfAFriend from "./functions/getFriendOfAFriend";
import getSuggestedFriends from "./functions/getSuggestedFriends";
import Network from './Network';

const UserProfile = () => {
    const uid = window.location.pathname.slice(7);
    const user = getUser(uid);
    const name = getName(user.firstName, user.surname);
    const avatar = getGender(user.gender);
    const age = getAge(user.age);
    const friends = getFriends(uid);
    const foaf = getFriendOfAFriend(uid);
    const suggestedFriends = getSuggestedFriends(uid);

    return (
        <section className="user">
            <div className="user-profile">
                <img src={avatar} alt="male" />
                <div className="user-info">
                    <p>#{uid} {name}</p>
                    <p>{user.gender}</p>
                    <p>{age}</p>
                </div>
            </div>
            <div className="user-net">
                <div className="friends">
                    <h4>Friends:</h4>
                    <div className="network">
                        <Network data={friends} />
                    </div>
                </div>
                <div className="friends-of-a-friend">
                    <h4>Friend of a friend:</h4>
                    <div className="network">
                        <Network data={foaf} />
                    </div>
                </div>
                <div className="suggested-friends">
                    <h4>Suggested friends:</h4>
                    <div className="network">
                        <Network data={suggestedFriends} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserProfile;