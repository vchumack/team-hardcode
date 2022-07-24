(() => {
  const menuBtnsRef = document.querySelectorAll("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");

  menuBtnsRef.forEach(btn => {
    btn.addEventListener("click", () => {

    btn.classList.toggle("is-open");

    mobileMenuRef.classList.toggle("is-open");
  });
  })
})();