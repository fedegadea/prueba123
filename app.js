const express = require("express");
const app = express();
const path= require("path");
const publicPath= path.resolve(__dirname, "./public");
app.use(express.estatic(publicPath));


console.log("Servidor corriendo")
app.listen(process.env.PORT || 3090,() => { 
})
app.get("/",(req,res)=> {
    res.sendFile(path.join(__dirname,"/proyectom/home.html"))
})

