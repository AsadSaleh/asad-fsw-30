// bentuk => "segitiga", "persegipanjang", "persegi", "lingkaran".
// panjang => number
// lebar => number
function calculateArea(bentuk, panjang, lebar) {
  if (bentuk === "segitiga") {
    return 0.5 * panjang * lebar;
  }
  if (bentuk === "persegipanjang") {
    return panjang * lebar;
  }
  if (bentuk === "persegi") {
    return panjang * panjang;
  }
  if (bentuk === "lingkaran") {
    return Math.PI * (panjang / 2) ** 2;
  }
}

module.exports = calculateArea;
