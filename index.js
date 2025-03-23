const requestButton = document.querySelectorAll(".request-invite-btn");
const navBar = document.getElementById("navBar");
const navContent = document.getElementById("navContent");
const overlay = document.getElementById("overlay");
const closeNav = document.getElementById("closeNav");

if (window.innerWidth < 768) {
  navBar.addEventListener("click", () => {
    navContent.classList.add("show");
    overlay.classList.add("show");
    closeNav.style.display = "block";
    navBar.style.display= 'none';
    // Close the nav menu when clicking the close button or overlay
    closeNav.addEventListener("click", () => {
      navContent.classList.remove("show");
      overlay.classList.remove("show");
      closeNav.style.display = "none";
      navBar.style.display= 'block';
    });
  });

  overlay.addEventListener("click", () => {
    navContent.classList.remove("show");
    overlay.classList.remove("show");
    closeNav.style.display = "none";
    navBar.style.display= 'block';
  });
}
