// const toggle = document.querySelector('.navbar-toggle');
const links = document.querySelector('.navbar-links');
const openMenu=document.querySelector('.open-menu');
const cLoseMenu=document.querySelector('.close-menu')

openMenu.addEventListener('click', () => {
  links.classList.add('show');
  openMenu.style.display="none";
  cLoseMenu.style.display="block";
});

cLoseMenu.addEventListener('click',()=>{
    links.classList.remove('show');
    openMenu.style.display="block";
    cLoseMenu.style.display="none";
})