const Capitulo = require("../models/Capitulo");
const obtenerCapitulos = async(req, res) =>{
    try{
        const capitulo = await Capitulo.find({});
        if (capitulo.length === 0) {
            return res.status(404).json({
                ok: false,
                msg: "No existen capitulos en la base de datos"
            })
        }
        return res.json({
            ok: true,
            msg: "Capitulos obtenidos satisfactoriamente",
            capitulo: capitulo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const agregarCapitulos = async(req, res) => {
    try {
        const capitulo = req.body
        const nuevoCapitulo = new Capitulo(capitulo)
        await nuevoCapitulo.save();
        return res.json({
            ok: true,
            msg: "Se ha agregado el capitulo correctamente",
            capitulo: nuevoCapitulo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const actualizarCapitulos = async(req, res) => {
    try {
        const id = req.params.id;
        const capitulo = await Capitulo.findById(id);
        if (!capitulo) {
            return res.status(404).json({
                ok: false,
                msg: 'El capitulo no existe'
            })
        }
        const capituloActualizado = await Capitulo.findByIdAndUpdate(id, req.body);
        return res.json({
            ok: true,
            msg : "Capitulo actualizado",
            capitulo: capituloActualizado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const eliminarCapitulos = async(req, res) => {
    try {
        const id = req.params.id;
        const capitulo = await Capitulo.findById(id);
        if (!capitulo) {
            return res.status(404).json({
                ok: false,
                msg: 'El capitulo no existe'
            })
        }
        const capituloEliminado = await Capitulo.findByIdAndDelete(id);
        return res.json({
            ok: true,
            msg : "Capitulo eliminado",
            capitulo: capituloEliminado
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
const obtenerCapituloPorId = async(req, res) => {
    try {
        const id = req.params.id;
        const capitulo = await Capitulo.findById(id);
        if (!capitulo) {
            return res.status(404).json({
                ok: false,
                msg: 'El capitulo no existe',
            })
        }
        return res.json({
            ok: true,
            msg : "Capitulo encontrado",
            capitulo: capitulo
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: "Error en el servidor"
        })
    }
}
module.exports = {obtenerCapitulos, agregarCapitulos, actualizarCapitulos, eliminarCapitulos, obtenerCapituloPorId}