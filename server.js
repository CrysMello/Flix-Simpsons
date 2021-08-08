const express = require("express")
const app = express()
const PORT = 8080


//conctando database

const db = require("./src/data/database.js")

db.connect()



app.get("/",(req, res) => {
    res.status(200).send();
})

app.use(express.json())

app.listen(PORT, ()=> console.log("Servidor conectado!"))