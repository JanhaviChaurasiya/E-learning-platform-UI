// Default progress for each course (0% if not in localStorage)
const coursesProgress = {
  fullstack: parseInt(localStorage.getItem("fullstackProgress")) || 0,
  datascience: parseInt(localStorage.getItem("datascienceProgress")) || 0,
  cybersecurity: parseInt(localStorage.getItem("cyberProgress")) || 0,
  uiux: parseInt(localStorage.getItem("uiuxProgress")) || 0,
  java: parseInt(localStorage.getItem("javaProgress")) || 0,
  marketing: parseInt(localStorage.getItem("marketingProgress")) || 0,
  aiml: parseInt(localStorage.getItem("aimlProgress")) || 0,
};

// Function to update all progress bars
function updateDashboard() {
  for (let course in coursesProgress) {
    const progressEl = document.getElementById(course + "Progress");
    const textEl = document.getElementById(course + "Text");

    if (progressEl && textEl) {
      progressEl.style.width = coursesProgress[course] + "%";
      textEl.innerText = coursesProgress[course] + "% Completed";
    }
  }
}

// Call on page load
document.addEventListener("DOMContentLoaded", updateDashboard);

// Example function to increase progress
function increaseProgress(course, amount) {
  coursesProgress[course] = Math.min(coursesProgress[course] + amount, 100);
  localStorage.setItem(course + "Progress", coursesProgress[course]);
  updateDashboard();
}
