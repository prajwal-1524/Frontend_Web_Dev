 function Person(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.changeLastName = function(newLastName) {
        this.lastName = newLastName;
      }
    }

    function showPerson() {
      let p = new Person("Prajwal", "Bashyal");
      let output = "Before changing last name: " + p.firstName + " " + p.lastName + "\n";
      p.changeLastName("Sharma");
      output += "After changing last name: " + p.firstName + " " + p.lastName;
      document.getElementById("output").innerText = output;
    }