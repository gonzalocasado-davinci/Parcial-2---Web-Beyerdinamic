

const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());


//Funcion que leerá datos en JSON
function readDB() {
    return JSON.parse(fs.readFileSync("./db.json","utf-8"));
}

//Funcion que Guardará datos en JSON en el servidor express

function saveDB(data) {
    fs.writeFileSync("./db.json", JSON.stringify(data, null, 2));
}


app.get("/productos", (req, res) => {
    const db = readDB();
    res.json(db.productos);
});

app.post("/productos", (res,req) => { 
    const db = readDB();
    const nuevo =req.body;
    db.producots.push(nuevo);
    saveDB(db);
    res.json({message: "Producto agregado exitosamente", producto : nuevo});
});

//Inicio servidor

app.listen(3000, () => console.log("Servidor corriendo en http://localhost:3000"));