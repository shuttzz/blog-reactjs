const bx = document.querySelector('.bx');
const menuMobile = document.querySelector('.menu-mobile');
const linkMobile = document.querySelectorAll('.link-menu-mobile');

console.log(bx);

bx.addEventListener('click', () => {
    bx.classList.toggle('active');
    menuMobile.classList.toggle('showmenu');
})

linkMobile.forEach(linkMenu => {
    linkMenu.addEventListener('click', () => {
        menuMobile.classList.remove('showmenu');
        bx.classList.remove('active');
    })
})