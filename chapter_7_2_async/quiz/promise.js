// Nih ada suatu object yang namanya Promise. (Future)

// Promise, saat ini, belum punya value.

// Di saat yang akan datang, dia akan punya value.

// Valuenya, bisa "resolved" atau "rejected".

1 + 10; // 11

Math.sin(100); // xxx

"Hello World".toUpperCase(); // HELLO WORLD

// Di luar scope JS

// 1. Read & Write file to OS
// 2. Read & Write to DB
// 3. Call external REST API

const promise = new Promise(() => {});

const promise2 = new Promise((res, rej) => res(1));

// const promise3 = new Promise((res, rej) => rej());

const promise4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello!"), 3000);
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => reject("Error sesuatu!"), 2000);
});

// .then() akan dipanggil ketika promise RESOLVED
console.log("4:", promise4);

promise4
  .then((data) => console.log("4 sukses!", data))
  .catch((error) => console.log("4 error!", error));

// .catch() akan dipanggil ketike promise REJECTED
console.log("5: ", promise5);

promise5
  .then((data) => console.log("5 sukses!", data))
  .catch((error) => console.log("5 error!", error));
