// ----------------------
// Navbar toggle (hamburger menu)
// ----------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ----------------------
// Back-to-top button
// ----------------------
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.classList.add("active");
  } else {
    backToTop.classList.remove("active");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ----------------------
// Animate skill bars on scroll
// ----------------------
const skillBars = document.querySelectorAll(".skill-progress");
const skillsSection = document.querySelector("#skills");

window.addEventListener("scroll", () => {
  if (window.scrollY >= skillsSection.offsetTop - 200) {
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width + "%";
    });
  }
});
