const {model, Schema} = require("mongoose");
const MundoSchema = new  Schema({
    lugar:{
        type: String,
        require: true,
        unique: true
    },
    descripcion:{
        type:String,
        require: true,
    },
})
module.exports= model('Mundo', MundoSchema);