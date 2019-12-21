const getName = (firstname, surname) => {
    if (firstname && surname) {
        return firstname + ' ' + surname;
    } else if (!firstname) {
        return surname;
    } else if (!surname) {
        return firstname;
    };
};

export default getName;