require('dotenv').config()
const express = require("express")
const app = express()
const todoRoutes = require("./routes/todoRoutes.js")

// use json middleware
app.use(express.json());

// mount todo routes
app.use("/todos", todoRoutes)

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})