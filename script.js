let show = true;
const menuContent = document.querySelector('.content');
const menuToggle = menuContent.querySelector('.menu-toggle');
const menuLinks = menuContent.querySelectorAll('.list-menu li a'); // Seleciona todos os links do menu

// Função para abrir/fechar o menu
menuToggle.addEventListener('click', () => {
    document.body.style.overflow = show ? 'hidden' : 'initial';
    menuContent.classList.toggle('on', show);
    show = !show;
});

// Função para fechar o menu ao clicar em um link
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fecha o menu
        document.body.style.overflow = 'initial'; // Restaura o scroll da página
        menuContent.classList.remove('on'); // Remove a classe 'on' para fechar o menu
        show = true; // Reseta o estado do menu
    });
});