const btns = document.querySelectorAll('.btn-modale');
const modaleEquip = document.querySelector('.bloc-modale');
const ImgIndex = document.querySelector('.bloc-modale img');

if(window.matchMedia("(min-width: 850px)").matches){
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        ImgIndex.src = `ressources/img${e.target.getAttribute('data-index')}-equip.jpg`;
        modaleEquip.classList.add('active-modale');
    })
})
 modaleEquip.addEventListener('click', () => {
    modaleEquip.classList.remove('active-modale');
 })
}

//anime navbar
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
        nav.classList.add('anim-nav');
    }else {
        nav.classList.remove('anime-nav');
    }
})