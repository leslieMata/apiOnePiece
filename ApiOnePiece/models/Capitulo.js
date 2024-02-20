const {model, Schema} = require("mongoose");
const CapituloSchema = new  Schema({
    NumeroEpisodio:{
        type: Number,
        require: true,
        unique: true
    },
    NombreEpisodio:{
        type: String,
        require: true,
    },
    descripcion:{
        type:String,
        require: true,
    },
    duracion:{
        type:Number,
        require:true,
    },
    url:{
        type:String,
        require:true,
    }
})
module.exports= model('capitulo', CapituloSchema);