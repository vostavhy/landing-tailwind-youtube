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

const toggleMobileSearch = () => {
  const openSearchButton = document.querySelector("#open-search");
  const mobileSearchContainer = document.querySelector("#mobile-search");
  const closeSearchButton = document.querySelector("#close-search");

  openSearchButton.addEventListener("click", () => {
    mobileSearchContainer.classList.toggle("hidden");
    openSearchButton.classList.toggle("sm:hidden");
  });

  closeSearchButton.addEventListener("click", () => {
    mobileSearchContainer.classList.toggle("hidden");
    openSearchButton.classList.toggle("sm:hidden");
  });
};

const changeActiveCategoryBtn = () => {
  const categoryButtons = document.querySelectorAll(".category-btn");

  categoryButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      categoryButtons.forEach((btn) => btn.classList.remove("active"));
      btn.classList.add("active");
    });
  });
};

toggleNav();
toggleMobileSearch();
changeActiveCategoryBtn();
