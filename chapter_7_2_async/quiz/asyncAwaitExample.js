// Contoh manggil API dengan promise
const fs = require("node:fs");

// https://app-todolist.xyz/

async function getDataAndSaveToFile() {
  try {
    const response = await fetch("https://app-todolist.xyz/users");

    if (!response.ok) throw response;

    const data = await response.json();

    // Save data to file:
    data.data.forEach((item) => {
      const data = `${item.user_name},${item.email},${item.password}\n`;
      fs.appendFile("hasilQuery.csv", data, () => {});
    });
  } catch (error) {
    console.log("error gan!:", error);
  }
}

getDataAndSaveToFile();
