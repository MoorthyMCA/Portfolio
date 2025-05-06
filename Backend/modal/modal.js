const mongoose=require("mongoose")
const Schema=mongoose.Schema

const Structure=new Schema({

firstname:{
    type:String,
    required:true
},
secondname:{
    type:String,
    required:true
},
mail:{
    type:String,
    reqired:true
},
phonenumber:{
    type:Number,
    reqired:true
},
textarea:{
    type:String,
    required:true
}



})


const modal=new mongoose.model("datas",Structure)

module.exports=modal