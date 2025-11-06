// Using try...catch
function handleError() {
  try {
    let a = b + 10; // b is not defined
  } catch (error) {
    document.getElementById("result").innerText = "Caught error: " + error.message;
  }
}

// Using window.onerror
window.onerror = function(msg) {
  document.getElementById("result").innerText = "Global error: " + msg;
  return true; // prevent default browser alert
};

function globalError() {
  c + 5; // c is not defined
}
