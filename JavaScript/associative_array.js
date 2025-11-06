// script.js
function showArray() {
  let person = { name: "Prajwal", age: 21, city: "Nepal" };
  let result = "";
  for (let key in person) {
    result += key + " : " + person[key] + "\n";
  }
  document.getElementById("output").innerText = result;
}
