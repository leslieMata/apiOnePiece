require("dotenv").config();
const  express = require("express");
const dbConexion = require("./database/config");
const cors =require('cors')
dbConexion()
const app = express();
app.use(cors())
app.use(express.json()); //para que el body de las peticiones sea json
app.use("/api/personajes", require("./routes/personaje"))
app.use("/api/capitulos", require("./routes/capitulo"))
app.use("/api/mundos", require("./routes/mundo"))
// anatomia de la web va a pasar por res(respuesta) y req(requiere manda los datos)
// app.get("/", (req, res) =>{
//      res.json({
//         ok: true
//      })
// })

// poner un puerto que no uses en este caso es el 3303
app.listen(process.env.PORT, () => {
    console.log(`app escuchando en http://localhost:${process.env.PORT}`);
})
