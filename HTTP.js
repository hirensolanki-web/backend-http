const fs = require("fs");

fs.readFile("./db.js","utf-8",(err,data)=>{
      if(err){
        console.log(err);
      }
      else{
        console.log(data);
      }
})








fs.writeFile("./db.js","bhumi sharma",(err)=>{
        if(err){
            console.log(err);
           
        }
       
} )




fs.appendFile("./db.js","bhumi dharmaaaa gandhi cheeeze",(err)=>{
    if(err){
        console.log(err);
   }
})

















