
let student = {
  name: "Sita",
  age: 21,
  address: {
    city: "Pokhara",
    country: "Nepal"
  }
};


for (let key in student) {
  if (typeof student[key] === "object") {
    // If value is another object
    console.log("Nested object:", key);
    for (let innerKey in student[key]) {
      console.log("   " + innerKey + ":", student[key][innerKey]);
    }
  } else {
    console.log(key + ":", student[key]);
  }
}
