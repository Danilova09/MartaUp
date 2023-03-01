let burgerMenu = document.getElementById('burger-menu');


burgerMenu.addEventListener('click', () => {
    console.log('is clicked');
    burgerMenu.classList.add('active');
})