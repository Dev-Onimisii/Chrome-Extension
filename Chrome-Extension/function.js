const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulElement = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");
const tabBtn = document.querySelector("#tab-btn");

let myLeads = [];
let leadsFromLocalStorge = JSON.parse(localStorage.getItem("myLeads"));

const tabs = [{ url: "https://www.linkedIn.com" }];
tabBtn.addEventListener("click", (e) => {
  e.preventDefault();

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {});

  myLeads.push(tabs[0].url);
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

if (leadsFromLocalStorge) {
  myLeads = leadsFromLocalStorge;
  render(myLeads);
}

deleteBtn.addEventListener("dblclick", () => {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
});

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  render(myLeads);
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
