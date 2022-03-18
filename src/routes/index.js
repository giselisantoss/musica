const express = require("express")
const route = express.Router()

route.get("/",function(res,req){
    res.status(200).send({
        title:"Backend -senac",
        version:"1.0.0"
    })
})

module.exports=route