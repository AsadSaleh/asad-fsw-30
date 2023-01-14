// Bikin fitur suit manusia vs computer

let isGamePlayable = true;

// 1. Mulai bermain dengan cara nge-klik salah satu dari pilihan manusia
const humanHand = document.querySelector("#human_hand");
const humanRock = document.querySelector("#human_rock");
const humanScissors = document.querySelector("#human_scissors");

// Fungsi untuk mendapatkan nilai random diantara:
// "hand" atau "rock" atau "scissors".
function getRandomComputerSelection() {
  const randomInteger = Math.floor(Math.random() * 3); // 0, 1, 2
  return ["hand", "rock", "scissors"][randomInteger];
}

function calculateGameResult(humanSelection, computerSelection) {
  if (humanSelection === "hand") {
    if (computerSelection === "hand") return "draw";
    if (computerSelection === "rock") return "human";
    if (computerSelection === "scissors") return "computer";
  } else if (humanSelection === "rock") {
    if (computerSelection === "hand") return "computer";
    if (computerSelection === "rock") return "draw";
    if (computerSelection === "scissors") return "human";
  } else if (humanSelection === "scissors") {
    if (computerSelection === "hand") return "human";
    if (computerSelection === "rock") return "computer";
    if (computerSelection === "scissors") return "draw";
  }
}

// hand || rock || scissors
function colorizeComputerSelection(computerSelection) {
  const element = document.querySelector(`#computer_${computerSelection}`);
  element.style.background = "orange";
}

function resetGameState() {
  window.location.reload();
  // isGamePlayable = true;

  // // 1. batalin pilihan human
  // const humanElements = document.querySelectorAll(".human");
  // humanElements.forEach((humanElement) => {
  //   humanElement.style.background = "white";
  // });

  // // 2. batalin pilihan computer
  // const computerElements = document.querySelectorAll(".computer");
  // computerElements.forEach((computerElement) => {
  //   computerElement.style.background = "white";
  // });

  // // 3. hapus winner text
  // document.querySelector("#result").innerHTML = "";
}

function mulaiBermain(humanSelection) {
  // 2. Ketika mulai bermain, pilihkan secara random untuk si komputer
  const computerSelection = getRandomComputerSelection();
  // warnain pilihan komputer:
  colorizeComputerSelection(computerSelection);

  // 3. Setelah manusia & komputer menentukan pilihan, hitung siapa pemenangnya
  const result = calculateGameResult(humanSelection, computerSelection);

  // 4. Setelah ada pemenang, kita tampilkan pemenangnya di UI (beserta tombol reset)
  document.querySelector("#result").innerHTML = result;

  // 5. Ketika tekan reset, semua kembali ke awal.
  document
    .querySelector("#reset")
    .addEventListener("click", () => resetGameState());

  isGamePlayable = false;
}

humanHand.addEventListener("click", () => {
  if (!isGamePlayable) return;
  humanHand.style.background = "lightblue";
  mulaiBermain("hand");
});
humanRock.addEventListener("click", () => {
  if (!isGamePlayable) return;
  humanRock.style.background = "lightblue";
  mulaiBermain("rock");
});
humanScissors.addEventListener("click", () => {
  if (!isGamePlayable) return;
  humanScissors.style.background = "lightblue";
  mulaiBermain("scissors");
});
