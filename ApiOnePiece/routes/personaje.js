const { Router } = require("express");
const { obtenerPersonajes, obtenerPersonajePorId, agregarPersonajes, actualizarPersonaje, eliminarPersonaje } = require("../controllers/personaje");
const router = Router();
router.get("/", obtenerPersonajes)
router.get("/busqueda/:id", obtenerPersonajePorId)
router.post("/", agregarPersonajes)
router.put("/:id", actualizarPersonaje)
router.delete("/:id", eliminarPersonaje)
module.exports = router;