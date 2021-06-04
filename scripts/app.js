//  Weapon container and contents:
const weaponButtonContainer = document.querySelector(
  "#weapon-button-container"
);
const weaponButtons = document.querySelectorAll(".choose-weapon");

// Each player weapon button:
const scissorsButton = document.querySelector("#scissors");
const spockButton = document.querySelector("#spock");
const paperButton = document.querySelector("#paper");
const lizardButton = document.querySelector("#lizard");
const rockButton = document.querySelector("#rock");

//  Rules buttons:
const rulesButton = document.querySelector("#rules-button");
const rulesPage = document.querySelector(".mobile-rules");
const closeRulesButton = document.querySelector("#close-rules-button");

const playerWeapons = ["rock", "paper", "scissors", "lizard", "spock"];
const computerWeapons = ["rock", "paper", "scissors", "lizard", "spock"];

//  Switch to result screen after player weapon choice:
const weaponButtonsArray = Array.from(weaponButtons);
for (let i = 0; i < weaponButtonsArray.length; i++) {
  weaponButtonsArray[i].addEventListener("click", () => {
    weaponButtonContainer.style.display = "none";
  });
}
let playerChoice = "";
let computerChoice = "comp";

// const game = () => {
// Player choice:
scissorsButton.addEventListener("click", (e) => {
  playerChoice = "scissors";
  console.log(playerChoice);
  computerWeapon();
  // setTimeout(computerWeapon, 1500);
});
spockButton.addEventListener("click", (e) => {
  playerChoice = "spock";
  console.log(playerChoice);
  computerWeapon();
});
paperButton.addEventListener("click", (e) => {
  playerChoice = "paper";
  console.log(playerChoice);
  computerWeapon();
});
lizardButton.addEventListener("click", (e) => {
  playerChoice = "lizard";
  console.log(playerChoice);
  computerWeapon();
});
rockButton.addEventListener("click", (e) => {
  playerChoice = "rock";
  console.log(playerChoice);
  computerWeapon();
});
// Computer random weapon selection:
computerWeapon = () => {
  const weaponNumber = Math.floor(Math.random() * 5);
  computerChoice = computerWeapons[weaponNumber];
  console.log(computerChoice);
};
if (playerChoice === computerChoice) {
  console.log("Draw!");
}
// };
// game();

// Rules button action:
rulesButton.addEventListener("click", () => {
  rulesPage.style.display = "block";
  closeRulesButton.style.display = "block";
});
closeRulesButton.addEventListener("click", () => {
  rulesPage.style.display = "none";
  closeRulesButton.style.display = "none";
});
