const toggleButton = document.getElementsByClassName("hamburger")[0];
const navbarLinks = document.getElementsByClassName("expanded-hamburger")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
