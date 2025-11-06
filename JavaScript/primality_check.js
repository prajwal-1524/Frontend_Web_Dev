function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function addIfPrime() {
  let a = parseInt(document.getElementById("num1").value);
  let b = parseInt(document.getElementById("num2").value);

  if (isNaN(a) || isNaN(b)) {
    document.getElementById("output").innerText = "Please enter both numbers.";
    return;
  }

  if (isPrime(a) && isPrime(b)) {
    document.getElementById("output").innerText = "Sum = " + (a + b);
  } else {
    document.getElementById("output").innerText = "Addition not performed. Both numbers must be prime.";
  }
}
