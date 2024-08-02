const express = require ("express")
const verify = require("../Middlewares")
const router = express.Router()

router.get("/Accueil", verify,(req,res)=>{
    res.render("Accueil")
})

router.get("/services", verify,(req,res)=>{
    res.render("Nos services")
})

router.get("/contacts", verify,(req,res)=>{
    res.render("Contactez nous")
})

module.exports = router

