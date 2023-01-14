// JS Object:
// Penampungan data, berbentuk key-value. bisa ada method-nya juga

const object1 = {};

// const objectJadul = new Object() * not recomended

const object2 = {};
object2.name = "As'ad";
object2.address = "Jakarta";

const object3 = {
  name: "As'ad",
  address: {
    street: "Jalan Kebahagiaan no 1",
    province: "DKI Jakarta",
    postalCode: "121212",
  },
  hobbies: ["soccer", "coding"],
  // method
  sayHello: function () {
    console.log(`Hallo my name is ${this.name}. nice to meet you!`);
  },
  walk() {
    console.log("walking...");
  },
};

object3.sayHello();

console.log(object3.address); // mengakses property di dalam obj

object3.name = "Bram"; // mengubah property di dalam obj

object3.sayHello();

// concept destructuring
const a = { name: "a" };
const b = { ...a };

b.name = "b";

console.log(b);
console.log(a);
