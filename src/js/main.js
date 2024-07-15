const navbar = document.querySelector(".navbar");
const navItems = navbar.querySelectorAll(".nav-item");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    navItems.forEach((i) => i.classList.remove("active"));

    if (item.dataset.target === "inicio") {
      navbar.classList.remove("vertical");
      navbar.classList.add("horizontal");
    } else {
      navbar.classList.remove("horizontal");
      navbar.classList.add("vertical");
    }

    if(item.dataset.target !== "inicio") {
      item.classList.add("active");
    }

    
  });
});
