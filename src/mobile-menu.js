(() => {
  const menuBtnsRef = document.querySelectorAll('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileListRef = document.querySelector('.menu-mobil__list');
  // const menuRef = document.querySelector(".menu-mobil");
  // const menuOpenSvgRef = document.querySelector('header__btn-switcher--open');
  // const menuOpenModalBtn = document.querySelector('[data-menu-button]');


  mobileListRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    
  });  

//   document.body.addEventListener("click", (e) => {
//     console.log(e.target);
//   if (e.target === menuRef || e.target === menuOpenSvgRef) {    
//     return;
//   }

//     mobileMenuRef.classList.toggle('is-open');    
//   menuOpenModalBtn.classList.toggle('is-open');
  
// });

  menuBtnsRef.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-open');

      mobileMenuRef.classList.toggle('is-open');
    });
  });

 

})();
