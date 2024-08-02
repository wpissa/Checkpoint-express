const express = require("express");
const router = require("./Routes");
const app = express()
const port = 5001

app.set('views', './views'); 
app.set('view engine', 'jade')
app.use(router)

app.get("/", (req, res)=>{
    res.send("hello")
})
app.listen(port, ()=>{
    console.log ("http://localhost:"+port)


})