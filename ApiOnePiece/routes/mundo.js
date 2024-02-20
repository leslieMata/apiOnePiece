const {Router} = require ("express");
const { obtenerMundo, obtenerMundoPorId, agregarMundos, actualizarMundos, eliminarMundos } = require("../controllers/mundo");
const router= Router();
router.get("/",  obtenerMundo)
router.get("/busqueda/:id" , obtenerMundoPorId)
router.post("/", agregarMundos)
router.put("/:id", actualizarMundos)
router.delete("/:id", eliminarMundos)
module.exports = router;