const mongoose = require("mongoose");
const dbConexion = async() => {
    try{
        await mongoose.connect(process.env.MONGOURI);
        console.log("Se conecto a la base de datos");
    }catch (error){
        console.log(error);
        throw new Error("no se conecto a la base de datos")
    }
}
module.exports=dbConexion;