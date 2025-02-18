document
  .querySelector(".hamburger-menu")
  .addEventListener("click", function () {
    let tabs = document.querySelectorAll(".tab");
    if (tabs[0].style.display === "none" || tabs[0].style.display === "") {
      for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "flex";
      }
    } else {
      for (i = 0; i < tabs.length; i++) {
        tabs[i].style.display = "none";
      }
    }
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
}

// Show default section
document.addEventListener("DOMContentLoaded", function () {
  showSection("course-details");
});
