// 1. Buat fungsi "calculateDiscountedPrice" yang menerima number, lalu mengembalikan number
// dengan value yang sudah dipotong 20% dari harga aslinya.
function calculateDiscountedPrice(inputNumber) {
  // return inputNumber - inputNumber * 0.2;
  return;
}

console.log(calculateDiscountedPrice(1_000_000));
console.log(calculateDiscountedPrice(100_000));
console.log(calculateDiscountedPrice(500_000));

// 2. Buat fungsi "convertIntoDiscountedItem" yang menerima input berbentuk { name:string, price:number }
// lalu menghasilkan output { name:string, price:number } (sama) dengan property price-nya dipotong 20%
function convertIntoDiscountedItem(inputObj) {
  return;
}

console.log(convertIntoDiscountedItem({ name: "Laptop", price: 10_000_000 }));
console.log(convertIntoDiscountedItem({ name: "Macbook", price: 20_000_000 }));
console.log(convertIntoDiscountedItem({ name: "Buku", price: 500_000 }));

// 3. Nah, sekarang ubah "arrayOfItems" dibawah ini menjadi "discountedArrayOfItems" baru dengan
// harga yang sudah di diskon 20%.
// Tips: Gunakan Array.map.
const arrayOfItems = [
  {
    name: "MG Gundam Barbatos",
    price: 1_000_000,
  },
  {
    name: "MG Gundam Wing Ver.Ka",
    price: 1_200_000,
  },
  {
    name: "MG Gundam Dynames",
    price: 700_000,
  },
];

const discountedArrayOfItems = []; // todo

console.log(discountedArrayOfItems);
