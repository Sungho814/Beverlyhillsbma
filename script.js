// Fade-in when scrolling
const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => observer.observe(section));

// Contact Form Simulation
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  const status = document.getElementById("formStatus");
  status.textContent = "Sending...";
  status.style.color = "#666";

  setTimeout(() => {
    status.textContent = "Message sent successfully!";
    status.style.color = "green";
  }, 1200);
});