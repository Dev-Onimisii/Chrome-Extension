const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulElement = document.querySelector("#ul-el");

let myLeads = [];

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputElement = inputEl.value;
  myLeads.push(inputElement);

  myLeads.forEach((ele) => {
    ulElement.textContent = ele;
  });
  console.log(myLeads);
});
