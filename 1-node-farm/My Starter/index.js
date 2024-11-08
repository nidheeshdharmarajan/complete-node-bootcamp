const fs = require("fs")
// const { CLIENT_RENEG_LIMIT } = require("tls")

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8")
// const hello = "just hallo"
// console.log(textIn)

// const textOut = `" this is all  we know about avacado:${textIn}. \n Created on ${Date.now()}`
// fs.writeFileSync("./txt/outputt.txt", textOut)

// console.log(textOut);

fs.readFile('./txt/star5t.txt','utf-8',(err,data1)=>{
    if(err){return console.log('ayyooo');}
    fs.readFile(`./txt/${data1}.txt`,'utf8',(err,data2)=>{
        console.log(data2);
        fs.readFile(`./txt/append.txt`,'utf8',(err,data3)=>{
            console.log(data3);
            fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
                console.log("writen on the file");
            })
        })    
    })
})
console.log('will read the file');