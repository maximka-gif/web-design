document.addEventListener('DOMContentLoaded', () => {
    const showMenuButton = document.getElementById('showMenu');
    const menu = document.getElementById('menu');
    const menuItems = document.getElementsByClassName('item');
    const title = document.querySelector('#title');

    showMenuButton.addEventListener('click', () => {
        menu.style.display = menu.style.display === 'none' || menu.style.display === '' ? 'block' : 'none';
    });

    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener('mouseover', (event) => {
            event.target.classList.add('highlight');
        });
        menuItems[i].addEventListener('mouseout', (event) => {
            event.target.classList.remove('highlight');
        });
    }

    title.addEventListener('click', () => {
        title.textContent = 'Дякуємо за візит до кафе!';
    });
});
