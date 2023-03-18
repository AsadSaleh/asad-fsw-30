// Contoh manggil API dengan promise
const fs = require("node:fs");

// https://app-todolist.xyz/

fetch("https://app-todolist.xyz/oj9sfdj9jfs9dpfjsipdjfkjsdf")
  .then((response) => {
    if (!response.ok) throw response;
    return response.json();
  })
  .then((data) => {
    data.data.forEach((item) => {
      const data = `${item.user_name},${item.email},${item.password}\n`;
      fs.appendFile("hasilQuery.csv", data, () => {});
    });
  })
  .catch((error) => console.log("error gan!: ", error));
