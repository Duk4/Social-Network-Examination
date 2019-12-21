import male from "../../images/male.png";
import female from "../../images/female.png";

const getGender = (gender) => {
    return (gender === 'male') ? male : female;
};

export default getGender;