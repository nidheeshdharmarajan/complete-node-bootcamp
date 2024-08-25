const fs = require("fs")

const textIn = fs.readFileSync("./txt/input.txt", "utf-8")
const hello = "just hallo"
console.log(textIn)

const textOut = `" this is all  we know about avacado:${textIn}. \n Created on ${Date.now()}`
fs.writeFileSync("./txt/output.txt", textOut)
