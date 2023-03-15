const fs = require("node:fs");

fs.readFile("my_file.txt", (err, data) => {
  console.log("hasil: ", data);
});

console.log("halo!");

function addOne(x) {
  return x + 1;
}

addOne(10);

function sendMoneyCallback(err, data) {
  if (err) {
    console.log(err);
    sendNotification({
      destination: "asad",
      message: "transfer money failed!",
    });
  } else {
    sendNotification({ destination: "akmal", message: "money received" });
  }
}

// Contoh real life:
sendMoney(
  { amount: 1_000_000, destination: "akmal", sender: "asad" },
  sendMoneyCallback
);

// adafsdfasdfasdf
