// 1. Print variable-variable ini ke console dan juga tipe datanya.
// Tips: gunakan typeof
const stringNumber = "1285";
const number = 1285;
const object1 = { name: "seseorang" };
const object2 = [1, 2, 3];

console.log(stringNumber, "|", typeof stringNumber);
console.log(number, "|", typeof number);
console.log(object1, "|", typeof object1);
console.log(object2, "|", typeof object2);

console.log(Array.isArray(object1));
console.log(Array.isArray(object2));

// 2. Print angka-angka ini dengan menggunakan for-loop:
const arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//                      0  1  2  3  4  5  6  7  8
for (let i = 0; i < arrayOfNumbers.length; i++) {
  console.log(arrayOfNumbers[i]);
}
console.log(arrayOfNumbers[0]);
console.log(arrayOfNumbers[1]);
console.log(arrayOfNumbers[2]);
console.log(arrayOfNumbers[3]);
console.log(arrayOfNumbers[4]);
console.log(arrayOfNumbers[5]);
console.log(arrayOfNumbers[6]);
console.log(arrayOfNumbers[7]);
console.log(arrayOfNumbers[8]);

// 3. Print element array ini dengan menggunakan forEach:
const arrayOfNames = ["Sabun", "Beras", "Susu", "Gula", "Tepung"];

arrayOfNames.forEach(function (name) {
  console.log(name);
});

arrayOfNames.forEach((b) => console.log(b));
