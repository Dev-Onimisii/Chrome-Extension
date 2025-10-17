const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulElement = document.querySelector("#ul-el");

let myLeads = ["www.google.com", "www.youtube.com", "www.whatsapp.com"];

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputElement = inputEl.value;
  myLeads.push(inputElement);
});

for (let i = 0; i < myLeads.length; i++) {
  ulElement.innerHTML += `<li>${myLeads[i]}</li>`;
}
