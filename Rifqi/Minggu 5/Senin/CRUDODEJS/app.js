const express = require("express");
const app = express();

app.get('/', (req,res) => res.send("respon nodejs berhasil"));


app.listen(9000, () => console.log("port berjalan"))