let express = require('express')
let app = express()

app.get('/',(req , res)=>{
    res.send("Hello Ji")
})

app.get('/new/:id',(req ,res)=>{
    let {id} = req.params
    console.log(id)
    res.send(id)
})

app.post('/data',(req , res)=>{
    let data = JSON.stringify(req.body)
    console.log(data)
    res.send("hellooooooo")
})

//http://localhost:3000/search?firstName=Anugrah&lastName=pal (query parameter)
app.get('/search',(req , res)=>{
    console.log(req.query,"heehhhee")
    res.send("Query parameter")
})

app.listen('3000',()=>{
    console.log("NASA's Server Running.............")
    console.log("NASA's Server Hacked.............")
    console.log("Fetching DATA from NASA's Database")
})
