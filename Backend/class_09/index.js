// /************************************ OS Modules *************************************************/ 

// // let os = require('os')
// // console.log(os.totalmem()/1024/1024/1024) // total RAM available in GB
// // console.log(os.freemem()/1024/1024/1024) // Free RAM available
// // console.log(os.cpus()) //
// // console.log(os.arch()) // tells architure
// // console.log(os.uptime()/3600) // for how much time system was on.



// /******************************************* HTTP Modules ******************************************************/ 

// // npm i -g nodemon {}

// let http = require("http")

// let server = http.createServer((req,res)=>{ // Creation of a server

//     // console.log(req.url, "requested URL - gives adress of the request")
//     // res.write("write method ") // Do not ends the cycle
//     // res.end("res.end") // .end means it stops the request and response cycle


//     // routing
//     if(req.url=='/'){
//         res.end("Initial Page url is /")
//     }else if(req.url=='/about'){
//         res.end("Page url is /about")
//     }


// })

// server.listen(3000,()=>{ // Create a Port no. for local host
//     console.log("Server Running.....")
// })



/******************************* server in EXPRESS *************************************************/ 

let express = require('express')
let app = express()

app.use((req ,res ,next )=>{
    console.log(".use Not allow the sever to respond - like a bodyGuard of the server")
    next() // this allows the request to go to server
})

app.get('/',(req ,res)=>{
    res.send(".send in the express")
})

app.get('/about',(req ,res)=>{
    res.send(".send in the express opening about page")
})

// post
app.post('/',(req,res)=>{
    res.send("request through Post")
})

app.listen(3000,()=>{ // callback is just to check if the server is running or not
    console.log("Server running..")
})
