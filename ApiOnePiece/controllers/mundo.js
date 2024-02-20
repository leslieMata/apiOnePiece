const Mundo = require("../models/Mundo");
const obtenerMundo = async(req, res) =>{
    try{
        const mundo = await Mundo.find({});
        if (mundo.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "No existen mundos en la base de datos"
            })
        }
        return res.json({
            ok: true,
            msg: "Mundos obtenidos satisfactoriamente",
            mundo: mundo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const agregarMundos = async(req, res) => {
    try {
        const mundo = req.body
        const nuevoMundo = new Mundo(mundo)
        await nuevoMundo.save();
        return res.json({
            ok: true,
            msg: "Se ha agregado el mundo correctamente",
            mundo: nuevoMundo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const actualizarMundos = async(req, res) => {
    try {
        const id = req.params.id;
        const mundo = await Mundo.findById(id);
        if (!mundo) {
            return res.status(404).json({
                ok: false,
                msg: 'El mundo no existe'
            })
        }
        const mundoActualizado = await Mundo.findByIdAndUpdate(id, req.body);
        return res.json({
            ok: true,
            msg : "Mundo actualizado",
            mundo: mundoActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const eliminarMundos = async(req, res) => {
    try {
        const id = req.params.id;
        const mundo = await Mundo.findById(id);
        if (!mundo) {
            return res.status(404).json({
                ok: false,
                msg: 'El mundo no existe'
            })
        }
        const mundoEliminado = await Mundo.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg : "Mundo eliminado",
            mundo: mundoEliminado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const obtenerMundoPorId = async(req, res) => {
    try {
        const id = req.params.id;
        const mundo = await Mundo.findById(id);
        if (!mundo) {
            return res.status(404).json({
                ok: false,
                msg: 'El mundo no existe',
            })
        }
        return res.json({
            ok: true,
            msg : "Mundo encontrado",
            mundo: mundo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
module.exports = {obtenerMundo, agregarMundos, actualizarMundos, eliminarMundos, obtenerMundoPorId}