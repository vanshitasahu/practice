var express = require("express");
var routes = express.Router();
 
routes.get("/", (req, res)=>{
    res.render("home/index");
});

 routes.post("/save",(req,res)=>{
     console.log(req.body); 

 })

module.exports = routes; 