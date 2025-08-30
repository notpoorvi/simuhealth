require('dotenv').config()
const express = require("express")
const app = express()

const loggerMiddleware = require("./middlewares/loggerMiddleware.js");
app.use(loggerMiddleware);

// use json middleware
app.use(express.json());

const authRoutes = require("./routes/authRoutes.js")
const todoRoutes = require("./routes/todoRoutes.js")

// mount auth routes
app.use("/auth", authRoutes)
// mount todo routes
app.use("/todos", todoRoutes)

app.get('/', (req, res) => {
    res.send("<h1>This is a simple Todo application</h1>")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})