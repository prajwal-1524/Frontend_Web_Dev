 function fetchData() {
      // Sample Nepali JSON data
      let data = [
        {name: "Prajwal", email: "prajwal@example.com", city: "Butwal"},
        {name: "Roshan", email: "roshan@example.com", city: "Kathmandu"},
        {name: "Prince", email: "prince@example.com", city: "Pokhara"},
        {name: "Ayush", email: "ayush@example.com", city: "Lalitpur"},
        {name: "Sita", email: "sita@example.com", city: "Biratnagar"}
      ];
      let output = "";
      data.forEach(user => {
        output += `<div class="card"><strong>${user.name}</strong><br>Email: ${user.email}<br>City: ${user.city}</div>`;
      });
      document.getElementById("output").innerHTML = output;
    }