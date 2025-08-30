const { users } = require("../config/db.js")

const login = (request, response) => {
    const { username, password } = request.body;

    const userIdx = users.findIndex((userObj) => (userObj.username === username && userObj.password === password));

    if (userIdx === -1) {
        response.status(401).send({ error: "username or password invalid." });
        return;
    }
    const authToken = String(users[userIdx].id);
    response.json({ token: authToken });
}

module.exports = {
    login,
};