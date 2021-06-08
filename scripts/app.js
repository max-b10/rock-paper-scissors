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

// Results page
const resultsDiv = document.querySelector(".results");

//  Rules buttons:
const rulesButton = document.querySelector("#rules-button");
const rulesPage = document.querySelector(".mobile-rules");
const closeRulesButton = document.querySelector("#close-rules-button");

const playerWeapons = ["rock", "paper", "scissors", "lizard", "spock"];
const computerWeapons = ["rock", "paper", "scissors", "lizard", "spock"];

resultsDiv.style.display = "none";
//  Switch to result screen after player weapon choice:
const weaponButtonsArray = Array.from(weaponButtons);
for (let i = 0; i < weaponButtonsArray.length; i++) {
  weaponButtonsArray[i].addEventListener("click", () => {
    weaponButtonContainer.style.display = "none";
    resultsDiv.style.display = "flex";
  });
}
// let playerChoice = "";
let computerChoice = "comp";

// Player choice:
scissorsButton.addEventListener("click", (e) => {
  let playerChoice = "scissors";
  console.log(playerChoice);
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
  // setTimeout(computerWeapon, 1500);
});
spockButton.addEventListener("click", (e) => {
  let playerChoice = "spock";
  console.log(playerChoice);
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
});
paperButton.addEventListener("click", (e) => {
  let playerChoice = "paper";
  console.log(playerChoice);
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
});
lizardButton.addEventListener("click", (e) => {
  let playerChoice = "lizard";
  console.log(playerChoice);
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
});
rockButton.addEventListener("click", (e) => {
  let playerChoice = "rock";
  console.log(playerChoice);
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
});
// Computer random weapon selection:
computerWeapon = () => {
  const weaponNumber = Math.floor(Math.random() * 5);
  computerChoice = computerWeapons[weaponNumber];
  console.log(`Comp choice: ${computerChoice}`);
};

// Generate and display outcome DOM:
const generateResultsDOM = (playerChoice, computerChoice) => {
  // Player Results DOM:
  let playerResultDiv = document.createElement("div");
  playerResultDiv.classList.add("playerResultDiv");

  let playerResultPara = document.createElement("p");
  playerResultPara.classList.add("playerResultPara");
  playerResultPara.innerHTML = "YOU PICKED";

  let playerResultImage = document.createElement("img");
  playerResultImage.classList.add("playerResultImage", "choose-weapon");
  playerResultImage.id = `${playerChoice}`;
  playerResultImage.setAttribute("src", `/images/icon-${playerChoice}.svg`);

  resultsDiv.appendChild(playerResultDiv);
  playerResultDiv.appendChild(playerResultPara);
  playerResultDiv.appendChild(playerResultImage);

  // Computer Results DOM:
  let compResultDiv = document.createElement("div");
  compResultDiv.classList.add("compResultDiv");

  let compResultPara = document.createElement("p");
  compResultPara.classList.add("compResultPara");
  compResultPara.innerHTML = "HOUSE PICKED";

  let compResultImage = document.createElement("img");
  compResultImage.classList.add("compResultImage", "choose-weapon");
  compResultImage.id = `${computerChoice}`;
  compResultImage.setAttribute("src", `/images/icon-${computerChoice}.svg`);

  resultsDiv.appendChild(compResultDiv);
  compResultDiv.appendChild(compResultPara);
  compResultDiv.appendChild(compResultImage);
};

// Need a check winner function:

// if (playerChoice === computerChoice) {
//   console.log("Draw!");
// }

// Rules button action:
rulesButton.addEventListener("click", () => {
  rulesPage.style.display = "block";
  closeRulesButton.style.display = "block";
});
closeRulesButton.addEventListener("click", () => {
  rulesPage.style.display = "none";
  closeRulesButton.style.display = "none";
});
