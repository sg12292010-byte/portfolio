document.addEventListener("DOMContentLoaded", () => {
  // 1. Dynamic Year
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 2. PRELOADER ANIMATION (2 second baad gayab)
  const preloader = document.getElementById("preloader");
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add("hidden");
    }, 1000);
  }

  // 3. SCROLL REVEAL ANIMATION
  const revealElements = document.querySelectorAll(".reveal");
  const revealOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => {
    revealOnScroll.observe(el);
  });
});
// === CONTACT FORM LOGIC (WHATSAPP) ===
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const feedback = document.getElementById("form-feedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value;

      // WhatsApp message taiyar karo
      const waText = `Hello Shaurya!%0A%0AMy name is ${name}.%0AI am interested in: ${service}.%0A%0AMessage: ${message}`;
      
      // Tumhara WhatsApp number
      const waNumber = "919058112905";
      
      // WhatsApp link
      const waLink = `https://wa.me/${waNumber}?text=${waText}`;

      // Feedback dikhao
      if (feedback) {
        feedback.textContent = "Opening WhatsApp... Please send the message.";
        feedback.style.color = "var(--accent)";
      }

      // WhatsApp kholo
      window.open(waLink, "_blank");

      // 3 second baad form reset karo
      setTimeout(() => {
        contactForm.reset();
        if (feedback) feedback.textContent = "";
      }, 3000);
    });
  }
});
// === THEME TOGGLE LOGIC (Dark/Light Mode) ===
document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("theme-toggle");
  const htmlElement = document.documentElement;
  const themeIcon = themeToggle ? themeToggle.querySelector("i") : null;

  // Check local storage for saved theme (default: dark)
  const savedTheme = localStorage.getItem("theme") || "dark";
  htmlElement.setAttribute("data-theme", savedTheme);

  // Update icon based on current theme
  if (themeIcon) {
    if (savedTheme === "dark") {
      themeIcon.classList.remove("ri-sun-line");
      themeIcon.classList.add("ri-moon-line");
    } else {
      themeIcon.classList.remove("ri-moon-line");
      themeIcon.classList.add("ri-sun-line");
    }
  }

  // Toggle button click event
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = htmlElement.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      htmlElement.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);

      // Change Icon
      if (themeIcon) {
        if (newTheme === "dark") {
          themeIcon.classList.remove("ri-sun-line");
          themeIcon.classList.add("ri-moon-line");
        } else {
          themeIcon.classList.remove("ri-moon-line");
          themeIcon.classList.add("ri-sun-line");
        }
      }
    });
  }
});