function openMenu() {
    let menuBurgerBtn = document.querySelector('.header__menu')
    menuBurgerBtn.style.display = 'block';
}

function closeMenu() {
    let menuBurgerBtn = document.querySelector('.header__menu')
    menuBurgerBtn.style.display = 'none';
}

const menuBtn = document.querySelector('.menu__burger');
let menuOpen = false;
menuBtn.addEventListener('click',function(){
    if(!menuOpen){
        menuBtn.classList.add('open')
        menuOpen = true
        openMenu()
    }else{
        menuBtn.classList.remove('open')
        menuOpen = false
        closeMenu()
    }   
});



let header = $('.header'); //Смена фона
let next = false;
header.on('click',function() {
    if(!next){
        header.css('backgroundImage', 'url("https://asiamountains.net/upload/slide/slide-1960x857-07.jpg")')
        next = true
    }else{
        header.css('backgroundImage', 'url("https://sputnik.kg/images/102968/79/1029687954.jpg")')
        next = false    
    }
})

let letter = $('h1');
letter.forEach(item => {
    console.log(item)
});
console.log(letter.val())



