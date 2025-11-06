function compareStrings() {
  let s1 = document.getElementById("str1").value;
  let s2 = document.getElementById("str2").value;

  if (s1 === s2) {
    document.getElementById("output").innerText = "✅ Both strings are equal.";
  } else {
    document.getElementById("output").innerText = "❌ The strings are not equal.";
  }
}
