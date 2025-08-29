require('dotenv').config()
const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.send("<h1>Hello World!</h1>")
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})