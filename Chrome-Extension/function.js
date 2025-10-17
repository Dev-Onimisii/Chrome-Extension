const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulElement = document.querySelector("#ul-el");

let myLeads = [];

inputBtn.addEventListener("click", () => {
  myLeads.push(inputEl.value);
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  ulElement.innerHTML = listItems;
}
