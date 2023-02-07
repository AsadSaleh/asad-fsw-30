const users = require("./database_boongan");

// const http = require("http");

// // Server sederhana menggunakan module http.
// http
//   // controller: callback function => logic utama yang menentukan request - response:
//   .createServer((req, res) => {
//     console.log("masuk ke fungsi create server");

//     if (req.url === "/test" && req.method === "POST") {
//       res.on("data", function (chunk) {
//         console.log("BODY: " + chunk);
//       });

//       res.end("halo basic http server!");
//     }
//     if (req.url === "/user" && req.method === "GET") {
//       res.setHeader("Content-Type", "application/json");
//       res.writeHead(200);
//       res.write(JSON.stringify(users));
//       res.end();
//     }
//   })
//   // untuk menyalakan servernya:
//   .listen(3090, () => {
//     console.log("Running web server menggunakan module http");
//   });

// Server sederhana menggunakan ExpressJS
const express = require("express");
const app = express();

// middleware
app.use(express.json());

// controller: logic utama yang menentukan request - response:
app.post("/test", (req, res) => {
  console.log("ini bodynya 👉", req.body);
  res.send("halo ExpressJS!");
});
app.get("/user", (req, res) => {
  res.json(users);
});

// nyalain servernya:
app.listen(3011, () => {
  console.log("Running web server menggunakan module ExpressJS");
});
