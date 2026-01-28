const firstPage = document.querySelector('[data-page="first"]');
const secondPage = document.querySelector('[data-page="second"]');
const form = document.querySelector("form");
const scoreEl = document.querySelector(".score");

function submitRating(e) {
  e.preventDefault();

  const formData = new FormData(form);

  updateScore(formData.get("rating"));
  updatePages();
}

function updateScore(score) {
  scoreEl.textContent = `You selected ${score} out of 5`;
}

function updatePages() {
  firstPage.style.display = "none";
  secondPage.style.display = "flex";
}
