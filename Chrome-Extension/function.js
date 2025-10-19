const inputBtn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulElement = document.querySelector("#ul-el");

let myLeads = [];

inputBtn.addEventListener("click", (e) => {
  e.preventDefault();
  myLeads.push(inputEl.value);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
});
localStorage.getItem("myLeads", JSON.parse(myLeads));
function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    // listItems += "<li><a target='_blank' href='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
    listItems += `
         <li>
           <a target='_blank' href='${myLeads[i]}'>
             ${myLeads[i]}
           <a>
           </li>`;
  }
  ulElement.innerHTML = listItems;
}
