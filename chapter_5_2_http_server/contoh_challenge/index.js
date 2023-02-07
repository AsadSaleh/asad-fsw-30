const http = require("http");
const fs = require("fs");

http
  .createServer((req, res) => {
    console.log("apa isi req.body", req.body);
    if (req.url === "/login" && req.method.toLowerCase() === "post") {
      fs.readFile(
        "./chapter_5_2_http_server/contoh_challenge/users.json",
        (err, data) => {
          if (err) {
            // handle error
            res.writeHead(500);
            res.write("gagal membaca data");
            res.end();
          } else {
            // return data
            const dataHasilParse = JSON.parse(data);
            const matchFound = dataHasilParse.find(
              (data) =>
                data.email === req.body.email &&
                data.password === req.body.password
            );
            if (matchFound) {
              res.setHeader("Content-Type", "application/json");
              res.writeHead(200);
              res.write("berhasil login");
              res.end();
            } else {
              res.writeHead(400);
              res.write("email atau password salah");
              res.end();
            }
          }
        }
      );
    }
    if (req.url === "/users") {
      fs.readFile(
        "./chapter_5_2_http_server/contoh_challenge/users.json",
        (err, data) => {
          if (err) {
            // handle error
            res.writeHead(500);
            res.write("gagal membaca data");
            res.end();
          } else {
            // return data
            const dataHasilParse = JSON.parse(data);
            const dataTanpaPassword = dataHasilParse.map((data) => ({
              name: data.name,
              job: data.job,
              email: data.email,
            }));
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.write(JSON.stringify(dataTanpaPassword));
            res.end();
          }
        }
      );
    }
  })
  .listen(3000, () => {
    console.error("running bos!!!!!!");
  });
