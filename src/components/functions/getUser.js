import users from '../../data.json';

const getUser = (uid) => users.find(el => el.id == uid);

export default getUser;