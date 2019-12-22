import getFriends from './getFriends';

const getFriendOfAFriend = (id) => {
    const friends = getFriends(id);
    let ffList = [];

    for (let i = 0; i < friends.length; i++) {
        let f_friends = getFriends(friends[i].id);
        ffList = [...ffList, ...f_friends];
    }

    let unique = Array.from(new Set(ffList.map(el => el.id)))
        .map(id => {
            return ffList.find(el => el.id === id)
        });

    return unique.filter((el) => {
        return el.id != id;
    });
};

export default getFriendOfAFriend;