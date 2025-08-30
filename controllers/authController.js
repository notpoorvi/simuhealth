const { users } = require("../config/db.js")

const login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userIdx = users.findIndex((userObj) => (userObj.username === username && userObj.password === password));

    if (userIdx === -1) {
        res.status(401).send({ error: "username or password invalid." });
        return;
    }
    const authToken = String(users[userIdx].id) + users[userIdx].username;
    return authToken;
}

module.exports = {
    login,
};