(() => {
  const menuBtnsRef = document.querySelectorAll('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const mobileListRef = document.querySelector('.menu-mobil__list');

  mobileListRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
    
  });

  // document.body.addEventListener('click', () => {
  //   mobileMenuRef.classList.('is-open');
  // })

  menuBtnsRef.forEach(btn => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('is-open');

      mobileMenuRef.classList.toggle('is-open');
    });
  });

 

})();
