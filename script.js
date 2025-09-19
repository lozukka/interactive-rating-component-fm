let form = document.querySelector("form");
let test = document.getElementById("test");
let ratingDisplay = document.getElementById("chosen-rating");
let ratingState = document.getElementById("rating-state");
let thankYouState = document.getElementById("thank-you-state");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);

  for (const entry of data) {
    ratingDisplay.textContent = `${entry[1]}`;
  }

  event.preventDefault();
  changeState();
});

function changeState() {
  ratingState.classList.remove("show-state");
  ratingState.classList.add("hidden-state");
  thankYouState.classList.remove("hidden-state");
  thankYouState.classList.add("show-state");
}
