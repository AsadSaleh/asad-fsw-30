// APA ITU ARRAY?
// Array adalah struktur data untuk menyimpan "kumpulan data". Bayangkan array sebagai suatu
// kotak kaset, dimana kita bisa mengumpulkan kaset-kaset di dalamnya.

// CONTOH ARRAY DI JAVASCRIPT
// suatu array kosong
const contohArray = [];

// array dengan elemen yang berbeda-beda:
const contohArrayBedaBeda = [0, "As'ad", 100, Symbol("semua"), undefined];

// array dengan 3 element, dimanya semuanya adalah number
const contohArray2 = [1, 2, 3];

// array dengan 3 element, dimana semuanya adalah string
const contohArray3 = ["kucing", "kambing", "monyet"];

// array dengan 3 element, dimana ketiga element tersebut adalah object dengan properti nama, harga, dan lokasi.
// array of objects
const contohArray4 = [
  { nama: "Sepatu Adidas Pureboost 2.0", harga: 2000000, lokasi: "Jakarta" }, // i = 0
  { nama: "Sepatu Nike React", harga: 1700000, lokasi: "Bandung" }, // i = 1
  { nama: "Hoodie Supreme", harga: 20000000, lokasi: "Lampung" }, // i = 2
];

// MENGAKSES ELEMENT DALAM ARRAY
// perhatikan bahwa index dimulai dari 0, bukan dari 1.
const elementPertama = contohArray3[0]; // "kucing"
const elementKedua = contohArray3[1]; // "kambing"

// CONTOH MEMANFAATKAN DATA DI DALAM ARRAY:
// untuk di print ke console
for (let i = 0; i < contohArray4.length; i++) {
  const element = contohArray4[i];
  // console.log("CONTOH 1", element);
}

contohArray4.forEach(function (element, index, array) {
  // console.log("CONTOH 2", element);
});

// untuk di tampilkan ke DOM
// for (let i = 0; i < contohArray4.length; i++) {
//   const element = contohArray4[i]; // { nama, harga, lokasi }

//   // get parent element
//   const parentNode = document.getElementById("container"); // <div>

//   // create 3 elements
//   const nameText = document.createElement("p").innerHTML(element.nama); // <p>Sepatu Adidas Pureboost 2.0</p>
//   const priceText = document.createElement("p").innerHTML(element.harga);
//   const locationText = document.createElement("p").innerHTML(element.lokasi);

//   // append the elements to parent element:
//   parentNode.appendChild(nameText);
//   parentNode.appendChild(priceText);
//   parentNode.appendChild(locationText);
// }

// Contoh mengubah konten di dalam array
// contohArray4[2].name = "Hoodie Supreme Commander";
// console.log(contohArray4);

// Array .map()
// const contohArray4 = [
//   { nama: "Sepatu Adidas Pureboost 2.0", harga: 2000000, lokasi: "Jakarta" }, // i = 0
//   { nama: "Sepatu Nike React", harga: 1700000, lokasi: "Bandung" }, // i = 1
//   { nama: "Hoodie Supreme", harga: 20000000, lokasi: "Lampung" }, // i = 2
// ];

// cara 1
// looping (rawan error)
// harus ada array baru sebagai penampung
// const arrayBaru = [];

// for (let i = 0; i < contohArray4.length; i++) {
//   const el = contohArray4[i];
//   el.harga = el.harga - el.harga * 0.2;
//   console.log(el.harga);
//   arrayBaru.push(el);
// }

// console.log("arrayBaru", arrayBaru);

const arrayBaru2 = contohArray4
  .filter(function (el, idx, arr) {
    if (el.harga >= 400_000 && el.harga <= 600_000) {
      return false;
    } else {
      return true;
    }
  })
  .map(function (el, idx, arr) {
    return {
      nama: el.nama,
      lokasi: el.lokasi,
      harga: el.harga - el.harga * 0.2,
    };
  });

console.log("arrayBaru2", arrayBaru2);

[1, 2, 3].map(function (x) {
  return x + 10;
});

[1, 2, 3].map((x) => x + 10)

f(x) = x + 10
f(1) = 11
f(10) = 20

arrayBaru = arrayAsal.map(f)

[11, 12, 13];




function substract(a, b) {
  return a - b
}
substract(10, 5)
substract("kucing", "sapi")