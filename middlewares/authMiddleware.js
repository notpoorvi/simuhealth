const { users } = require("../config/db.js")

const authMiddleware = (request, response, next) => {
    const authHeaderToken = request.headers["authorization"];

    if (!authHeaderToken) {
        return response.status(401).json({ error: "auth token is missing" });
    }
    const userId = Number(authHeaderToken);
    const userObj = users.find(user => user.id === userId);
    // if no such user exists, it means token is invalid
    if (!userObj) {
        response.status(401).json({ error: "auth token is invalid" });
    }
    request.user = userObj;
    next();
}

module.exports = authMiddleware;