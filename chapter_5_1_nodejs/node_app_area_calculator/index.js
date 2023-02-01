const promptSync = require("prompt-sync")({ sigint: true });

const calculateArea = require("./calculateArea");

const fs = require("fs");

// function add(a, b) {
//   return a + b;
// }

// const input1 = promptSync("Berapa tambah berapa nih? ");
// const number1 = Number(input1);
// const input2 = promptSync(" Tambah berapa? ");
// const number2 = Number(input2);

// console.log(add(number1, number2));

const bentuk = promptSync("Mau menghitung luas dari bentuk apa? ");
const panjang = Number(promptSync("Berapa panjangnya? "));

let area = 0;

if (bentuk === "persegi" || bentuk === "lingkaran") {
  area = calculateArea(bentuk, panjang);
  // console.log("Hasilnya adalah: ", area);
} else {
  const lebar = Number(promptSync("Berapa lebarnya? "));
  area = calculateArea(bentuk, panjang, lebar);
  // console.log("Hasilnya adalah: ", area);
}

// writeFile function with filename, content and callback function
fs.writeFile(
  "hasil_perhitungan.txt",
  `Luas Area untuk bentuk ${bentuk} adalah = ${area}`,
  function (err) {
    if (err) throw err;
    console.log("File is created successfully.");
  }
);
