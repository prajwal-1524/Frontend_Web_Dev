function reverseNumber(num) {
  let reversed = 0;
  let original = num;

  while (num > 0) {
    let digit = num % 10;
    reversed = reversed * 10 + digit;
    num = Math.floor(num / 10);
  }

  return reversed;
}

function isPalindrome(num) {
  return num === reverseNumber(num);
}

function isArmstrong(num) {
  let sum = 0;
  let temp = num;
  let digits = num.toString().length;

  while (temp > 0) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
  }

  return sum === num;
}

function checkNumber() {
  let num = parseInt(document.getElementById("num").value);
  let output = "";

  if (isNaN(num)) {
    document.getElementById("output").innerText = "⚠ Please enter a valid number.";
    return;
  }

  output += "Number: " + num + "\n";
  output += "Reversed: " + reverseNumber(num) + "\n";

  if (isPalindrome(num)) {
    output += num + " is a Palindrome.\n";
  } else {
    output += num + " is NOT a Palindrome.\n";
  }

  if (isArmstrong(num)) {
    output += num + " is an Armstrong number.\n";
  } else {
    output += num + " is NOT an Armstrong number.\n";
  }

  document.getElementById("output").innerText = output;
}
