const {Router} = require ("express");
const { obtenerCapitulos, obtenerCapituloPorId, agregarCapitulos, actualizarCapitulos, eliminarCapitulos } = require("../controllers/capitulo");
const router= Router();
router.get("/",  obtenerCapitulos)
router.get("/busqueda/:id" , obtenerCapituloPorId)
router.post("/", agregarCapitulos)
router.put("/:id", actualizarCapitulos)
router.delete("/:id", eliminarCapitulos)
module.exports = router;