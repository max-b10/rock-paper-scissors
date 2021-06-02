const weaponButtons = document.querySelectorAll(".choose-weapon");
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
