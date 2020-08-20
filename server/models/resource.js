const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ResourceSchema = new Schema({
  
    "logo":{
      type:String,
      required:true
    },
    "name":{
      type:String,
      required:true
    },
    "category":{
      type:String,
      required:true
    },
    "website":{
      type:String,
      required:true
    }

    
  
})

module.exports = Resource = mongoose.model("resources", ResourceSchema);