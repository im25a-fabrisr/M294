document.getElementById("external-alert-button").addEventListener("click", function () {
  alert("Hallo Welt! (externes JavaScript)");
});

document.getElementById("hello-button").addEventListener("click", function () {
  document.getElementById("hello-message").textContent = "Hallo Welt!";
});
