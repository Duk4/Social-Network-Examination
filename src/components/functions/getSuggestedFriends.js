import users from "../../data.json";
import getUser from "./getUser";
import getName from "./getName";

const getSuggestedFriends = (id) => {
    const user = getUser(id);
    const friends = user.friends;
    const suggested = [];

    if (friends.length >= 2) {
        for (let i = 0; i < users.length; i++) {
            let intersection = friends.filter(x => users[i].friends.includes(x));
            if (intersection.length >= 2 && user !== users[i]) suggested.push(users[i]);
        }
    }

    const suggestedFriends = suggested.map(el => {
        return { name: getName(el.firstName, el.surname), id: el.id };
    });

    return suggestedFriends;
};

export default getSuggestedFriends;