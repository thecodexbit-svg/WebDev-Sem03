const fs = require('fs')

// creating the file
fs.writeFileSync("notes.txt" , "Anuruddha Pratap Singh Kushwah")

// read the file
let data = fs.readFileSync("notes.txt")
console.log(data.toString())

// append data
fs.appendFileSync("notes.txt", " My City is Kanpur") 
let data1 = fs.readFileSync("notes.txt")
console.log(data1.toString())

// delete the file
// fs.unlinkSync("notes.txt")

// ALL THE CRUD OPERATIONS ARE DONE.