document.querySelector(".dropdown-btn").addEventListener("click", function () {
  document.querySelector(".custom-dropdown").classList.toggle("active");
});

document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("click", function () {
    let selectedText = this.innerText;
    let displayText = document.getElementById("selected-option");

    displayText.innerText = selectedText;
    displayText.classList.remove("default-text");

    document.querySelector(".dropdown-btn").classList.add("selected");

    document.querySelector(".custom-dropdown").classList.remove("active");
  });
});
