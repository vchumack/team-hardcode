(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    openModalBtn2: document.querySelector("[data-modal-open-2]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    closeModalBtn2: document.querySelector("[data-modal2-close]"),
    modal: document.querySelector("[data-modal]"),
    mobileMenuRef: document.querySelector('[data-menu]'),
    contactBtn: document.querySelector('.contacts__btn--accent'),
    modal2: document.querySelector('[data-modal-contacts]')
  };

  refs.contactBtn.addEventListener("click", toggleModal2);
  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.openModalBtn2.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn2.addEventListener("click", toggleModal2);

  refs.openModalBtn2.addEventListener('click', () => {
refs.mobileMenuRef.classList.toggle('is-open');
  })

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle('is-open-modal');
  }

  function toggleModal2() {
    refs.modal2.classList.toggle("is-hidden");
    document.body.classList.toggle('is-open-modal');
  }
})();