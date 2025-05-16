// Greeting Function
function greetUser() {
  const greeting = document.getElementById("greetingMessage");
  const hour = new Date().getHours();
  let message = "";

  if (hour < 12) {
    message = "Good morning! 🌅";
  } else if (hour < 18) {
    message = "Good afternoon! ☀️";
  } else {
    message = "Good evening! 🌙";
  }

  if (greeting) {
    greeting.textContent = message;
  }
}

// Contact Form Validation
function validateContactForm() {
  const name = document.forms["contactForm"]["name"].value.trim();
  const email = document.forms["contactForm"]["email"].value.trim();
  const phone = document.forms["contactForm"]["phone"].value.trim();

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!name || !email || !phone) {
    alert("Please fill in all required fields.");
    return false;
  }

  if (!email.match(emailPattern)) {
    alert("Invalid email address.");
    return false;
  }

  return true;
}

// Toggle Theme Function
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("light-theme");

  // Save preference to localStorage
  if (body.classList.contains("light-theme")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

// Apply saved theme on load
function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
  }
}

// Initialize functions on DOMContentLoaded
document.addEventListener("DOMContentLoaded", function () {
  greetUser();
  applySavedTheme();

  const toggleButton = document.getElementById("themeToggle");
  if (toggleButton) {
    toggleButton.addEventListener("click", toggleTheme);
  }
});
