// Step 1: Create a new element
let newItem = document.createElement("li");

// Step 2: Add text to the new element
newItem.textContent = "Item 3";

// Step 3: Select the parent element
let list = document.getElementById("myList");

// Step 4: Append the new element to the parent
list.appendChild(newItem);
g