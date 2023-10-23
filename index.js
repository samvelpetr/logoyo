const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween:40,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints:{
        980:{
            slidesPerView: 2,
            spaceBetween:40,
        }
    }
})

const burger__menu = document.querySelector('.burger__menu');
const burger__left = document.querySelector('.burger__item-left');
const burger__right = document.querySelector('.burger__item-right');
const invise = document.querySelectorAll('.go-invise');
const main  = document.querySelector('.main-one-To-add')
const burger = document.querySelector('.burger');
burger__menu.onclick = () =>{
    burger__right.classList.toggle('burgerActive-right')
    burger__menu.classList.toggle('burger__menu-add')
    burger.classList.toggle('burgerAdd')
    main.classList.toggle('main-one')
    invise.forEach(e =>{
        e.classList.toggle('goInvise')
    })
}