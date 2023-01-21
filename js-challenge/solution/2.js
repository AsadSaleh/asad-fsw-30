// 1. Buat fungsi "plusOne" yang menghasilkan 1 + input yang diberikan.
function plusOne(input) {
  return 1 + input;
}
console.log(plusOne(1));
console.log(plusOne(2));
console.log(plusOne(5));

// 2. buat fungsi "minusOne" yang menghasilkan input - 1.
function minusOne(input) {
  return input - 1;
}
console.log(minusOne(1));
console.log(minusOne(2));
console.log(minusOne(5));

// 3. Buat fungsi "double" yang menghasilkan 2 x input yang diberikan.
function double(input) {
  return input * 2;
}
console.log(double(1));
console.log(double(3));
console.log(double(10));

// 4. Buat fungsi "isBiggerThanFive" yang menghasilkan true apabila input besar dari 5.
function isBiggerThanFive(input) {
  return input > 5;
}
console.log(isBiggerThanFive(1));
console.log(isBiggerThanFive(3));
console.log(isBiggerThanFive(10));

// 5. Buat fungsi getName yang menerima inputObject:
// { name: string, power: number }
// lalu mengemballikan property "name"-nya.
// Tips: gunakan "."
function getName(inputObject) {
  return inputObject.name;
}
function getPower(inputObject) {
  return inputObject.power;
}
console.log(getName({ name: "asad", power: 60 }));
console.log(getName({ name: "mike tyson", power: 100 }));
console.log(getName({ name: "batman", power: 99 }));

// 6. Buat fungsi "isStrong" yang menerima inputObject:
// { name: string, power: number }
// menghasilkan true apabila memiliki power lebih besar dari 80 (dan false kalau <= 80).
function isStrong(inputObject) {
  if (inputObject.power > 80) {
    return true;
  } else {
    return false;
  }
}
console.log(isStrong({ name: "mike tyson", power: 100 }));
console.log(isStrong({ name: "manusia biasa", power: 50 }));
console.log(isStrong({ name: "tentara", power: 85 }));

// 7> Mas Irsyad
function printPowerfulPerson(inputObject) {
  if (inputObject.power > 80) {
    console.log(inputObject.name);
  }
}

console.log("==========================================");
printPowerfulPerson({ name: "mike tyson", power: 100 });
printPowerfulPerson({ name: "manusia biasa", power: 50 });
printPowerfulPerson({ name: "tentara", power: 85 });
