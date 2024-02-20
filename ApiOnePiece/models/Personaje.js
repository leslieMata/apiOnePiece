const {model, Schema} = require("mongoose");
const PersonajeSchema = new  Schema({
    nombre:{
        type: String,
        require: true,
        unique: true
    },
    edad: {
        type: String,
        required: true,
    },
    descripcion:{
        type:String,
        require: true,
    },
    raza:{
        type:String,
        require: true,
    },
    url:{
        type:String,
        require:true,
    }
})
module.exports= model('Personaje', PersonajeSchema);