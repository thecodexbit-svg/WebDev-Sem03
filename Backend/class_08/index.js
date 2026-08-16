// console.log("hello");

// old way of importing file system(fs)
const fs = require('fs')

// new or traditional way of accessing file system(fs)
// import fs from 'fs' 


// Creates a file
fs.writeFileSync("index.html", "hello world") // Syncronous task {used when we want to create a small file}

// fs.writeFile("index.html", "Data Over write",()=>{
//     Console.log("Async Task")
// })


// READ FILE
// let data = fs.readFileSync("index.html")
// console.log(data.toString());



// APPEND the file
// fs.appendFile("index.html" , " Data Added through .appendFile",()=>{ // it is a async so callback is needed
//     let data = fs.readFileSync("index.html")
//     console.log(data.toString());

// })


// DELETE the file
// fs.unlinkSync("index.html") // it Delete the index.html in a syncronous manner.


// READ the data
let readData = fs.readFileSync("index.html")
console.log(readData.toString())


// CREATE the folder
// fs.mkdirSync("Folder")

// DELETE the folder
fs.rmdirSync("Folder")