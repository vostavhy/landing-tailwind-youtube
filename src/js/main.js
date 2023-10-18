console.log("JS connected");

const toggleNav = () => {
  const burger = document.querySelector("#burger");
  const hiddenNav = document.querySelectorAll(".nav-hidden");

  const sidebar = document.querySelector("aside");

  const navContainer = document.querySelectorAll("nav");
  const navLinks = document.querySelectorAll(".nav-link");

  const content = document.querySelector(".content");

  burger.addEventListener("click", () => {
    hiddenNav.forEach((nav) => nav.classList.toggle("hidden"));
    sidebar.classList.toggle("active");
    navContainer.forEach((nav) => nav.classList.toggle("active"));
    navLinks.forEach((link) => link.classList.toggle("active"));

    content.classList.toggle("active");
  });
};

toggleNav();
