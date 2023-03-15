const fs = require("node:fs");

const data = fs.readFileSync("my_file.txt");

console.log("hasil: ", data);

console.log("halo!");
