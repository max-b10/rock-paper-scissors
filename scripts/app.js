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

// Score Display:
const scoreDisplay = document.querySelector("#score");
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

let computerChoice = "comp";

// Player choice:
scissorsButton.addEventListener("click", (e) => {
  let playerChoice = "scissors";
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
  checkOutcome(playerChoice, computerChoice);
  // setTimeout(computerWeapon, 1500);
});
spockButton.addEventListener("click", (e) => {
  let playerChoice = "spock";
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
  checkOutcome(playerChoice, computerChoice);
});
paperButton.addEventListener("click", (e) => {
  let playerChoice = "paper";
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
  checkOutcome(playerChoice, computerChoice);
});
lizardButton.addEventListener("click", (e) => {
  let playerChoice = "lizard";
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
  checkOutcome(playerChoice, computerChoice);
});
rockButton.addEventListener("click", (e) => {
  let playerChoice = "rock";
  computerWeapon();
  generateResultsDOM(playerChoice, computerChoice);
  checkOutcome(playerChoice, computerChoice);
});
// Computer random weapon selection:
computerWeapon = () => {
  const weaponNumber = Math.floor(Math.random() * 5);
  computerChoice = computerWeapons[weaponNumber];
};

// Generate and display result outcome DOM:
const generateResultsDOM = (playerChoice, computerChoice) => {
  // Player Results DOM:
  let playerResultDiv = document.createElement("div");
  playerResultDiv.classList.add("playerResult");

  let playerResultImage = document.createElement("img");
  playerResultImage.classList.add("playerResultImage", "choose-weapon");
  playerResultImage.id = `${playerChoice}`;
  playerResultImage.setAttribute("src", `/images/icon-${playerChoice}.svg`);

  let playerResultPara = document.createElement("p");
  playerResultPara.id = "playerResultPara";
  playerResultPara.innerHTML = "YOU PICKED";

  resultsDiv.appendChild(playerResultDiv);
  playerResultDiv.appendChild(playerResultImage);
  playerResultDiv.appendChild(playerResultPara);

  // Computer Results DOM:
  let compResultDiv = document.createElement("div");
  compResultDiv.classList.add("compResult");

  let compResultPara = document.createElement("p");
  compResultPara.id = "compResultPara";
  compResultPara.innerHTML = "HOUSE PICKED";

  let compResultImage = document.createElement("img");
  compResultImage.classList.add("compResultImage", "choose-weapon");
  compResultImage.id = `${computerChoice}`;
  compResultImage.setAttribute("src", `/images/icon-${computerChoice}.svg`);

  resultsDiv.appendChild(compResultDiv);
  compResultDiv.appendChild(compResultImage);
  compResultDiv.appendChild(compResultPara);
};

// Check winner/loser:
const checkOutcome = (playerChoice, computerChoice) => {
  // Draw
  if (playerChoice === computerChoice) {
    console.log(
      `Draw! Player choice: ${playerChoice}. House choice: ${computerChoice}.`
    );
  }
  // Scissors
  else if (
    playerChoice === "scissors" &&
    (computerChoice === "paper" || computerChoice === "lizard")
  ) {
    console.log("Player wins");
  } else if (
    playerChoice === "scissors" &&
    (computerChoice === "rock" || computerChoice === "spock")
  ) {
    console.log("House wins");
  }
  // Paper
  else if (
    playerChoice === "paper" &&
    (computerChoice === "rock" || computerChoice === "spock")
  ) {
    console.log("Player wins");
  } else if (
    playerChoice === "paper" &&
    (computerChoice === "scissors" || computerChoice === "lizard")
  ) {
    console.log("House wins");
  }
  // Rock
  else if (
    playerChoice === "rock" &&
    (computerChoice === "scissors" || computerChoice === "lizard")
  ) {
    console.log("Player wins");
  } else if (
    playerChoice === "rock" &&
    (computerChoice === "paper" || computerChoice === "spock")
  ) {
    console.log("House wins");
  }
  // Lizard
  else if (
    playerChoice === "lizard" &&
    (computerChoice === "spock" || computerChoice === "paper")
  ) {
    console.log("Player wins");
  } else if (
    playerChoice === "lizard" &&
    (computerChoice === "rock" || computerChoice === "scissors")
  ) {
    console.log("House wins");
  }
  // Spock
  else if (
    playerChoice === "spock" &&
    (computerChoice === "scissors" || computerChoice === "rock")
  ) {
    console.log("Player wins");
  } else if (
    playerChoice === "spock" &&
    (computerChoice === "lizard" || computerChoice === "paper")
  ) {
    console.log("House wins");
  }
};

// Rules button action:
rulesButton.addEventListener("click", () => {
  rulesPage.style.display = "block";
  closeRulesButton.style.display = "block";
});
closeRulesButton.addEventListener("click", () => {
  rulesPage.style.display = "none";
  closeRulesButton.style.display = "none";
});
