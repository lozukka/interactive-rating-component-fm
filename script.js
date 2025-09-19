let form = document.querySelector("form");
let test = document.getElementById("test");

form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  let output = "";
  for (const entry of data) {
    output = `${output}${entry[0]}=${entry[1]}\r`;
  }
  test.textContent = output;
  event.preventDefault();
});
