  function setCookie() {
      let name = document.getElementById("cname").value;
      let value = document.getElementById("cvalue").value;
      document.cookie = name + "=" + value + "; path=/";
      document.getElementById("output").innerText = "Cookie set: " + name + "=" + value;
    }

    function getCookie() {
      let name = document.getElementById("cname").value + "=";
      let decodedCookie = decodeURIComponent(document.cookie);
      let ca = decodedCookie.split(';');
      for(let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) === 0) {
          document.getElementById("output").innerText = "Cookie value: " + c.substring(name.length);
          return;
        }
      }
      document.getElementById("output").innerText = "Cookie not found";
    }

    function deleteCookie() {
      let name = document.getElementById("cname").value;
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.getElementById("output").innerText = "Cookie deleted: " + name;
    }