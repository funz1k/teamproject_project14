(() => {
    const refs = {
        openMenuBtn: document.querySelector('.button-menu-open'),
        closeMenuBtn: document.querySelector('.mob-close-btn'),
        menu: document.querySelector('.mob-menu'),
        buyButton: document.querySelector('.header-button'),
    };

    refs.openMenuBtn.addEventListener('click', toggleMenu);
    refs.closeMenuBtn.addEventListener('click', toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle('is-hidden');
        refs.openMenuBtn.classList.toggle('is-hidden');
        refs.buyButton.classList.toggle('is-hidden');
    }
})();