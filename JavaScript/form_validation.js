    function validateForm() {
      let email = document.getElementById("email").value;
      let phone = document.getElementById("phone").value;
      let password = document.getElementById("password").value;
      let output = "";

      // Email validation
      let emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/;
      if (!emailPattern.test(email)) {
        output += "Invalid email. Must end with @gmail.com or @hotmail.com.\n";
      }

      // Phone validation
      let phonePattern = /^(9841\d{6}|9851\d{6}|980\d{7})$/;
      if (!phonePattern.test(phone)) {
        output += "Invalid phone number. Must be NTC: 9841****** or 9851******, NCELL: 980*******\n";
      }

      // Password validation
      let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{12,}$/;
      if (!passwordPattern.test(password)) {
        output += "Invalid password. Must have at least one uppercase, one lowercase, one number, one special symbol, and minimum 12 characters.\n";
      }

      if (output === "") {
        output = "All inputs are valid!";
      }

      document.getElementById("output").innerText = output;
      return false; // prevent actual form submission
    }