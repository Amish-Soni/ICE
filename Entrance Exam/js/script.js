document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("display-tab");
    });
  });

function showSection(sectionId) {
  document.querySelectorAll(".content-section").forEach((section) => {
    section.style.display = "none";
  });

  document.getElementById(sectionId).style.display = "flex";

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.remove("active");
  });

  document
    .querySelector(`.tab[onclick="showSection('${sectionId}')"]`)
    .classList.add("active");

  if (window.matchMedia("(max-width: 768px)").matches) {
    document.querySelectorAll(".tab").forEach((tab) => {
      tab.classList.toggle("display-tab");
    });
  }
}

// Show default section
document.addEventListener("DOMContentLoaded", function () {
  showSection("exam-details");
});
