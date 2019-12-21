import getName from "./getName";
import getUser from "./getUser";

const getFriends = (id) => {
    const user = getUser(id);
    let array = user.friends;
    let farray = [];

    for (let i = 0; i < array.length; i++) {
        let friend = getUser(array[i]);
        farray.push(friend);
    }

    const friends = farray.map(el => {
        return { name: getName(el.firstName, el.surname), id: el.id };
    });

    return friends;
};

export default getFriends;