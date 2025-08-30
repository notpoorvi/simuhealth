const { users } = require("../config/db.js")

const login = (req, res) => {
    const { username, password } = req.body;

    const userIdx = users.findIndex((userObj) => (userObj.username === username && userObj.password === password));

    if (userIdx === -1) {
        res.status(401).send({ error: "username or password invalid." });
        return;
    }
    const authToken = String(users[userIdx].id);
    res.json({ token: authToken });
}

module.exports = {
    login,
};