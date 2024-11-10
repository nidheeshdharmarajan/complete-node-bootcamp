const fs = require("fs");
// const { CLIENT_RENEG_LIMIT } = require("tls")

// const textIn = fs.readFileSync("./txt/input.txt", "utf-8")
// const hello = "just hallo"
// console.log(textIn)

// const textOut = `" this is all  we know about avacado:${textIn}. \n Created on ${Date.now()}`
// fs.writeFileSync("./txt/outputt.txt", textOut)

// console.log(textOut);

// fs.readFile('./txt/star5t.txt','utf-8',(err,data1)=>{
//     if(err){return console.log('ayyooo');}
//     fs.readFile(`./txt/${data1}.txt`,'utf8',(err,data2)=>{
//         console.log(data2);
//         fs.readFile(`./txt/append.txt`,'utf8',(err,data3)=>{
//             console.log(data3);
//             fs.writeFile('./txt/final.txt',`${data2}\n${data3}`,'utf-8',err=>{
//                 console.log("writen on the file");
//             })
//         })
//     })
// })
// console.log('will read the file');
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf8");
dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("This is over view");
    console.log(req.url);
  } else if (pathName == "/product") {
    res.end("This is product");
    console.log(req.url);
  } else if (pathName === "/api") {
    // fs.readFile(`${__dirname}/dev-data/data.json`, "utf8", (err, data) => {
    //   const productData = JSON.parse(data);
    //   console.log(productData);
    //   res.writeHead(200, { "content-type": "application/json" });
    //   res.end(data);
    // });
    // res.end("api");
    res.writeHead(200, { "content-type": "application/json" });
    res.end(data);
  } else {
    //     res.end('page not found')
    //     console.log(req.url);
    res.writeHead(404, {
      "content-type": "text/html",
      "my-own-header": "hello-world",
    });
    res.end("<h1>Page note found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("lestening to the the request on port 8000");
});
