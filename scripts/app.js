const weaponButtons = document.querySelectorAll(".choose-weapon");
const weaponButtonContainer = document.querySelector(
  "#weapon-button-container"
);

const rulesButton = document.querySelector("#rules-button");
const rulesPage = document.querySelector(".mobile-rules");
const closeRulesButton = document.querySelector("#close-rules-button");

rulesButton.addEventListener("click", () => {
  rulesPage.style.display = "block";
  closeRulesButton.style.display = "block";
});
closeRulesButton.addEventListener("click", () => {
  rulesPage.style.display = "none";
  closeRulesButton.style.display = "none";
});

const buttonsArray = Array.from(weaponButtons);

for (let i = 0; i < buttonsArray.length; i++) {
  buttonsArray[i].addEventListener("click", () => {
    weaponButtonContainer.style.display = "none";
    console.log("button clicked");
  });
}
