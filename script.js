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