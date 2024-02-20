const Personaje = require("../models/Personaje");
const obtenerPersonajes = async(req, res) =>{
    try{
        const personaje = await Personaje.find({});
        if (personaje.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "No existen personajes en la base de datos"
            })
        }
        return res.json({
            ok: true,
            msg: "Personajes obtenidos satisfactoriamente",
            personaje: personaje
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const agregarPersonajes = async(req, res) => {
    try {
        const personaje = req.body
        const nuevoPersonaje = new Personaje(personaje)
        await nuevoPersonaje.save();
        return res.json({
            ok: true,
            msg: "Se ha agregado el personaje correctamente",
            personaje: nuevoPersonaje
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const actualizarPersonaje = async(req, res) => {
    try {
        const id = req.params.id;
        const personaje = await Personaje.findById(id);
        if (!personaje) {
            return res.status(404).json({
                ok: false,
                msg: 'El personaje no existe'
            })
        }
        const personajeActualizado = await Personaje.findByIdAndUpdate(id, req.body);
        return res.json({
            ok: true,
            msg : "Personaje actualizado",
            personaje: personajeActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const eliminarPersonaje = async(req, res) => {
    try {
        const id = req.params.id;
        const personaje = await Personaje.findById(id);
        if (!personaje) {
            return res.status(404).json({
                ok: false,
                msg: 'El personaje no existe'
            })
        }
        const personajeEliminado = await Personaje.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg : "Personaje eliminado",
            personaje: personajeEliminado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const obtenerPersonajePorId = async(req, res) => {
    try {
        const id = req.params.id;
        const personaje = await Personaje.findById(id);
        if (!personaje) {
            return res.status(404).json({
                ok: false,
                msg: 'El personaje no existe',
            })
        }
        return res.json({
            ok: true,
            msg : "Personaje encontrado",
            personaje: personaje
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
module.exports = {obtenerPersonajes, agregarPersonajes, actualizarPersonaje, eliminarPersonaje, obtenerPersonajePorId}