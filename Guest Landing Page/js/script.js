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

document.addEventListener("DOMContentLoaded", function () {
  const headerSection2 = document.querySelector(".header-section2");
  const toggleArrow = document.querySelector(".toggle-arrow");

  function hideHeaderSection() {
    headerSection2.classList.add("hidden");
    toggleArrow.classList.add("show-arrow");
  }

  function resetAutoHide() {
    clearTimeout(window.headerHideTimeout);
    window.headerHideTimeout = setTimeout(hideHeaderSection, 5000);
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    window.headerHideTimeout = setTimeout(hideHeaderSection, 5000);
  }

  toggleArrow.addEventListener("click", function () {
    headerSection2.classList.toggle("hidden");

    if (headerSection2.classList.contains("hidden")) {
      toggleArrow.classList.add("show-arrow");
    } else {
      toggleArrow.classList.remove("show-arrow");
      resetAutoHide();
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownItems = document.querySelectorAll(".dropdown-item");
  const selectedOption = document.getElementById("selected-option");
  const courseTable = document.querySelector(".course-table");
  const entranceExamTable = document.querySelector(".entrance-exam-table");
  const filters = document.querySelector(".filters");

  courseTable.classList.add("hidden");
  entranceExamTable.classList.add("hidden");
  filters.classList.add("hidden");

  dropdownItems.forEach((item) => {
    item.addEventListener("click", function () {
      selectedOption.textContent = this.textContent;
      courseTable.classList.add("hidden");
      entranceExamTable.classList.add("hidden");
      filters.classList.add("hidden");

      if (this.textContent === "Courses") {
        courseTable.classList.remove("hidden");
        filters.classList.remove("hidden");
      } else if (this.textContent === "Entrance Exams") {
        entranceExamTable.classList.remove("hidden");
        filters.classList.remove("hidden");
      }
    });
  });
});
