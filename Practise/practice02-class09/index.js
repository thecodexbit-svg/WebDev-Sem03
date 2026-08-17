let express = require("express")
let app = express()

app.use((req , res , next)=>{
    console.log(req.method , req.url)
    next()
})

app.get('/',(req , res)=>{
    res.send(" Navigating to the '/' file path")
})

app.get('/about',(req , res)=>{
    res.send(" Navigating to the '/about' file path")
})

app.get('/services',(req , res)=>{
    res.send(" Navigating to the '/services' file path")
})

app.get('/contact',(req , res)=>{
    res.send(" Navigating to the '/contact' file path")
})

app.listen(3001 , ()=>{
    console.log("Server Running.......")
})