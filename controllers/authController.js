const { users } = require("../config/db.js")

const login = (request, response) => {
    const { username, password } = request.body;

    // first find if the given username, password combo exists in the database
    const userIdx = users.findIndex((userObj) => (userObj.username === username && userObj.password === password));

    // if not, then send status code 401
    if (userIdx === -1) {
        response.status(401).send({ error: "username or password invalid." });
        return;
    }
    // else, send (a simeple) authentication token, user exists
    const authToken = String(users[userIdx].id);
    response.json({ token: authToken });
}

module.exports = {
    login,
};