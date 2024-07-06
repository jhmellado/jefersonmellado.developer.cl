const navLinks = document.querySelectorAll(".nav-item");
const sections = document.querySelectorAll(".content-section");

navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("data-target");

    sections.forEach((section) => {
      if (section.id === targetId) {
        section.classList.add("active");
        section.classList.remove("hidden");
      } else {
        section.classList.remove("active");
        section.classList.add("hidden");
      }
    });
  });
});
