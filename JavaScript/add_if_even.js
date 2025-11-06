 function isEven(n) {
      return n % 2 === 0;
    }

    function calculate() {
      let a = parseInt(document.getElementById("num1").value);
      let b = parseInt(document.getElementById("num2").value);

      if (isEven(a) && isEven(b)) {
        document.getElementById("output").innerText = "Sum = " + (a + b);
      } else {
        document.getElementById("output").innerText = "Difference = " + Math.abs(a - b);
      }
    }