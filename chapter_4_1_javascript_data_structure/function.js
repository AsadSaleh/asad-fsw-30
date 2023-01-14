// 1. apa itu fungsi?
// Suatu bagian code yang eksekusinya ditunda hingga ia dipanggil.
// Berguna agar code kita "reusable"

// 2. bagaimana cara menulis fungsi?
function namaFungsi() {
  // lakukan apa saja di sini
}

// 3. bagaimana cara menggunakan fungsi yang sudah dibuat?
function kerjakanSesuatu() {
  // sesuatu....
}
kerjakanSesuatu();

// 4. bagaimana cara passing parameter ke dalam fungsi?
function sayHello(namaOrang) {
  console.log("Hallo " + namaOrang + "! Apa kabar?");
}
sayHello("John McCaine");
sayHello("Fawwaz");
sayHello("Kurnia");

console.log("Hallo " + "John McCaine" + "! Apa kabar?");
console.log("Hallo " + "Fawwaz" + "! Apa kabar?");
console.log("Hallo " + "Kurnia" + "! Apa kabar?");

// 5. fungsi yang menghasilkan suatu value (return value):
// 5.1 Contoh return value:
function bikinTahu() {
  return "tahu";
}
console.log(bikinTahu());

// 5.2 Contoh return value yang tidak sesuai keiinginan:
function jumlah2AngkaBohongan(angka1, angka2) {
  const hasilPenjumlahan = angka1 + angka2;
  return 0;
}
console.log(jumlah2AngkaBohongan(10, 11));

// 5.3 Contoh return value yang sesuai keinginan:
function jumlah2Angka(angka1, angka2) {
  const hasilPenjumlahan = angka1 + angka2;
  return hasilPenjumlahan;
}
console.log(jumlah2Angka(10, 11));

// cara nulis function:

//1
function namaFungsi(a, b, c) {
  return a * b - c;
}

// 2
const namaFungsi = function (a, b, c) {
  return a * b - c;
};

// 3
const namaFungsi = (a, b, c) => a * b - c;
