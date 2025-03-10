const menuItems = document.querySelectorAll('.menu-item');
const menuContents = document.querySelectorAll('.menu-content');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // 1. Desactivar el ítem activo actual
        document.querySelector('.menu-item.active').classList.remove('active');
        // 2. Activar el ítem clickeado
        item.classList.add('active');
        // 3. Ocultar todos los menús
        menuContents.forEach(content => {
            content.style.display = 'none';
        });
        // 4. Mostrar el menú correspondiente
        const menuId = item.getAttribute('data-menu');
        document.getElementById(menuId).style.display = 'block';
    });
});