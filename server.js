require('dotenv').config()
const express = require("express")
const app = express()
const todoRoutes = require("./routes/todoRoutes.js")
const authRoutes = require("./routes/authRoutes.js")

// use json middleware
app.use(express.json());

// mount todo routes
app.use("/todos", todoRoutes)
// mount auth routes
app.use("/login", authRoutes)

app.get('/', (req, res) => {
    res.send("<h1>This is a simple Todo application</h1>")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})