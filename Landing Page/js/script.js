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

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("filter-modal");
  const modalOverlay = document.getElementById("modal-overlay");
  const modalTitle = document.getElementById("filter-title");
  const closeModal = document.getElementById("close-modal");
  const filterOptionsDiv = document.getElementById("filter-options");
  const searchBox = document.getElementById("search-box");
  const selectedFiltersDiv = document.getElementById("selected-filters");
  const applyFiltersBtn = document.getElementById("apply-filters");
  const sidebarItems = document.querySelectorAll(".sidebar li");
  const filterButtons = document.querySelectorAll(".filter-btn");

  const filterData = {
    type: [
      "Advanced Diploma",
      "Certificate",
      "Degree",
      "Diploma",
      "Honors Degree",
      "Integrated Program",
      "Masters",
      "PhD",
      "Postgraduate Diploma",
    ],
    duration: [
      "3 month",
      "6 month",
      "1 year",
      "1.5 year",
      "2 year",
      "3 year",
      "4 year",
      "5 year",
      "5.5 year",
    ],
    domain: [
      "Engineering & Technology",
      "Medical & Allied Health Sciences",
      "Management & Business",
      "Commerce, Finance & Accounting",
      "Arts & Humanities",
      "Social Sciences",
      "Science (Pure & Applied)",
      "Law, Judiciary & Public Administration",
      "Education & Teaching",
      "Architecture & Planning",
      "Agriculture & Allied Sciences",
      "Veterinary Sciences & Animal Husbandry",
      "Pharmacy & Paramedical",
      "Mass Communication, Journalism & Media Studies",
      "Hospitality, Hotel Management & Tourism",
      "Creative Arts, Design & Performing Arts",
      "Computer Applications, IT & Data Science",
      "Aviation & Aeronautical Sciences",
      "Defense, Maritime & Merchant Navy",
      "AYUSH (Alternative Medicine)",
      "Language & Literature",
      "Library & Information Sciences",
      "Environmental Science & Sustainability",
      "Vocational & Skill Development",
      "Government & Public Administration",
    ],
    subjects: [
      "Accountancy",
      "Art Education",
      "Biology",
      "Biotechnology",
      "Business Studies",
      "Chemistry",
      "Computer Applications",
      "Economics",
      "Engineering Graphics",
      "English",
      "Entrepreneurship",
      "Environmental Studies",
      "Fine Arts",
      "French",
      "Geography",
      "German",
      "Hindi",
      "History",
      "Home Science",
      "Information Technology",
      "Journalism and Mass Communication",
      "Legal Studies",
      "Marketing",
      "Mathematics",
      "Music",
      "Philosophy",
      "Physical and Health Education",
      "Physics",
      "Political Science",
      "Psychology",
      "Public Administration",
      "Sanskrit",
      "Science",
      "Social Science",
      "Sociology",
      "Statistics",
    ],
    qualifications: [
      "10th Pass",
      "10th Pursuing",
      "12th Pursuing",
      "12th Pass",
      "Bachelors Degree",
      "Masters Degree",
      "10 + 3 Year Diploma",
      "10 + 4 Year Diploma",
    ],
  };

  let selectedFilters = {};
  let currentCategory = "type"; // Track which filter is open

  // Open modal with the selected category
  filterButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const category = this.getAttribute("data-category");
      openModal(category);
    });
  });

  // Open Modal & Set Sidebar
  function openModal(category) {
    modal.style.display = "block";
    modalOverlay.style.display = "block";
    currentCategory = category; // Track current category
    loadFilterOptions(category);
    sidebarItems.forEach((item) => {
      item.classList.remove("active");
      if (item.getAttribute("data-filter") === category) {
        item.classList.add("active");
      }
    });
  }

  // Close modal
  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
  });

  // Sidebar navigation
  sidebarItems.forEach((item) => {
    item.addEventListener("click", function () {
      sidebarItems.forEach((i) => i.classList.remove("active"));
      this.classList.add("active");
      currentCategory = this.getAttribute("data-filter");
      loadFilterOptions(currentCategory);
    });
  });

  // Load filter options dynamically
  function loadFilterOptions(category) {
    modalTitle.textContent =
      category.charAt(0).toUpperCase() + category.slice(1);
    searchBox.value = ""; // Clear search when switching filters
    filterOptionsDiv.innerHTML = "";

    filterData[category].forEach((option) => {
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = option;
      checkbox.checked = selectedFilters[category]?.includes(option) || false;

      const label = document.createElement("label");
      label.textContent = option;

      const div = document.createElement("div");
      div.classList.add("filter-item"); // For search filtering
      div.appendChild(checkbox);
      div.appendChild(label);
      filterOptionsDiv.appendChild(div);

      checkbox.addEventListener("change", function () {
        if (!selectedFilters[category]) {
          selectedFilters[category] = [];
        }
        if (this.checked) {
          selectedFilters[category].push(this.value);
        } else {
          selectedFilters[category] = selectedFilters[category].filter(
            (item) => item !== this.value
          );
        }
      });
    });
  }

  // 🔍 Real-time search functionality
  searchBox.addEventListener("input", function () {
    const searchValue = this.value.toLowerCase();
    const options = document.querySelectorAll(".filter-item");

    options.forEach((option) => {
      const text = option.textContent.toLowerCase();
      if (text.includes(searchValue)) {
        option.style.display = "flex"; // Show matching items
      } else {
        option.style.display = "none"; // Hide non-matching items
      }
    });
  });

  // Apply filters
  applyFiltersBtn.addEventListener("click", function () {
    modal.style.display = "none";
    modalOverlay.style.display = "none";
    updateSelectedFilters();
  });

  // Update UI with selected filters and remove feature
  function updateSelectedFilters() {
    selectedFiltersDiv.innerHTML = "";
    Object.keys(selectedFilters).forEach((category) => {
      selectedFilters[category].forEach((value) => {
        const tag = document.createElement("span");
        tag.classList.add("filter-tag");
        tag.innerHTML = `${value} <span class="remove-filter">&#10006;</span>`;

        tag
          .querySelector(".remove-filter")
          .addEventListener("click", function () {
            selectedFilters[category] = selectedFilters[category].filter(
              (item) => item !== value
            );
            updateSelectedFilters();
          });

        selectedFiltersDiv.appendChild(tag);
      });
    });
  }
});
