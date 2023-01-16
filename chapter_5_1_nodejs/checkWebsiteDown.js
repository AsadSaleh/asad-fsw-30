const websiteYangMauDiCek = [
  "https://www.youtube.com/",
  "https://twitter.com/",
  "https://stackoverflow.com/",
  "https://www.tokopedia.com/",
];

async function testKesehatanSuatuWebsite(url) {
  // untuk ngambil data dari suatu URL:
  const res = await fetch(url, { redirect: "manual" });

  if (!res.ok) {
    return false;
  }

  return true;
}

async function runProgram() {
  const hasilAkhir = await Promise.all(
    websiteYangMauDiCek.map(async (url) => {
      return {
        url: url,
        status: await testKesehatanSuatuWebsite(url),
      };
    })
  );

  console.log({ hasilAkhir });
}

runProgram();
