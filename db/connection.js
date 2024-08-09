const mongoose = require("mongoose");
const service=require('../model/service')


const PORT = 8080;



 mongoose_connection = async(app)=>{
  mongoose
  .connect('mongodb+srv://tanishmishra97:oRP7Ul7E9EvZg72M@cluster0.gncdx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    
    console.log("db connected success");
     
    app.listen(8080,() => {
      console.log(`listening at port ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
 
 }
  module.exports = mongoose_connection;

