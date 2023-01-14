// OOP lecuture notes

// ada yang namanya Class

class Person {
  static numberOfEyes = 2;

  static destroy() {
    console.log(`Human is destroying ${thing}`);
  }

  personName = null;
  address = null;

  constructor(personName, address) {
    this.personName = personName;
    this.address = address;
  }

  // method
  introduce() {
    console.log(`Hi, my name is ${this.personName}`);
  }
}

const person = new Person("Auda", "Jakarta selatan");
//      ^instance/object

console.log(person);

// Static vs Instance property

// akses data static
console.log(Person.numberOfEyes);

// akses data instance
console.log(new Person().personName);
