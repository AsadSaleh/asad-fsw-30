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
const contohArray4 = [
  { nama: "Sepatu Adidas Pureboost 2.0", harga: 2000000, lokasi: "Jakarta" },
  { nama: "Sepatu Nike React", harga: 1700000, lokasi: "Bandung" },
  { nama: "Hoodie Supreme", harga: 20000000, lokasi: "Lampung" },
];

// MENGAKSES ELEMENT DALAM ARRAY
// perhatikan bahwa index dimulai dari 0, bukan dari 1.
const elementPertama = contohArray3[0]; // "kucing"
const elementKedua = contohArray3[1]; // "kambing"

// CONTOH MEMANFAATKAN DATA DI DALAM ARRAY:
// untuk di print ke console
for (let i = 0; i <= contohArray.length; i++) {
  const element = contohArray3[i];
  console.log(element);
}

// untuk di tampilkan ke DOM
for (let i = 0; i <= contohArray4.length; i++) {
  const element = contohArray4[i]; // { nama, harga, lokasi }

  // get parent element
  const parentNode = document.getElementById("container");

  // create 3 elements
  const nameText = document.createElement("p").innerHTML(element.nama);
  const priceText = document.createElement("p").innerHTML(element.harga);
  const locationText = document.createElement("p").innerHTML(element.lokasi);

  // append the elements to parent element:
  parentNode.appendChild(nameText);
  parentNode.appendChild(priceText);
  parentNode.appendChild(locationText);
}

// Contoh mengubah konten di dalam array
contohArray4[2].name = "Hoodie Supreme Commander";
console.log(contohArray4);
