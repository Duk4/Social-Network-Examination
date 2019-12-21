import getFriends from './getFriends';

const getFriendOfAFriend = (id) => {
    const friends = getFriends(id);
    const ffList = [];

    for (let i = 0; i < friends.length; i++) {
        let f_friends = getFriends(friends[i].id);
        for (let j = 0; j < f_friends.length; j++) {
            ffList.push(f_friends[j]);
        }
    }

    let unique = Array.from(new Set(ffList.map(a => a.id)))
        .map(id => {
            return ffList.find(a => a.id === id)
        })

    return unique.filter((el) => {
        return el.id != id;
    });
};

export default getFriendOfAFriend;