// saya bikin calculator yang bisa ngitung fibonaci:
// pengen ada interaksi ke user melalui CLI.

const fibonacciKeN = require("./fibonaci");
const prompt = require("prompt-sync")({ sigint: true });

const n = prompt("Mau Fibonacci ke berapa? ");

const hasilPerhitungan = fibonacciKeN(n);

console.log(`Hasilnya adalah: ${hasilPerhitungan}`);
