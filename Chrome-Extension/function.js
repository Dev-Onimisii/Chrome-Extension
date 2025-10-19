const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulElement = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

let myLeads = [];
let leadsFromLocalStorge = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorge) {
  myLeads = leadsFromLocalStorge;
  renderLeads();
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render();
});
function render(leads) {
  let listItems = "";
  for (let i = 0; i < leads.length; i++) {
    listItems += `
         <li>
           <a target='_blank' href='${leads[i]}'>
             ${leads[i]}
           <a>
           </li>`;
  }
  ulElement.innerHTML = listItems;
}
