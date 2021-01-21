//Loader
window.addEventListener('load', ()=> {
    const loader = document.querySelector('.loader');
    let heroText = document.querySelectorAll('.hero--animation');

    loader.style.transform = 'translateX(100%)';

    for(let i = 0; i < heroText.length; i++) {
        setTimeout(() => {
           heroText[i].style.opacity = '1';
           heroText[i].style.transform = 'translateY(0%)'; 
        }, i * 1000);
    }
})

//Open-Close Navigation
const menu = document.querySelector('.menu');
const menuLineTop = document.querySelector('.menu__line--top');
const menuLineMid = document.querySelector('.menu__line--mid');
const menuLineBottom = document.querySelector('.menu__line--bottom');
const nav = document.querySelector('.nav');
const social = document.querySelector('.social');
let navWidth = nav.getBoundingClientRect();
const overlay = document.querySelector('.overlay');

menu.addEventListener('click', ()=> {
    nav.classList.toggle('nav--open');

    if(nav.classList.contains('nav--open')){
        overlay.style.visibility = 'visible';

        menu.style.left = Math.round(navWidth.width) + 'px';
        social.style.marginLeft = Math.round(navWidth.width) + 'px';

        menuLineTop.classList.add('menu__line--top--open');
        menuLineMid.classList.add('menu__line--mid--open');
        menuLineBottom.classList.add('menu__line--bottom--open');
    } else {
        overlay.style.visibility = 'hidden';

        menu.style.left = '0px';
        social.style.marginLeft = '0px';

        menuLineTop.classList.remove('menu__line--top--open');
        menuLineMid.classList.remove('menu__line--mid--open');
        menuLineBottom.classList.remove('menu__line--bottom--open');
    }
})

//Open-Close Termin
const bookTermin = document.querySelector('#termin');
const termin = document.querySelector('.termin');
const closeTermin = document.querySelector('#closeTermin');

bookTermin.addEventListener('click', ()=> {
    termin.classList.add('termin--open');
})

closeTermin.addEventListener('click', ()=> {
    termin.classList.remove('termin--open');
})

if(termin.classList.contains('termin--open')) {
    window.addEventListener('click', ()=> {
        termin.classList.remove('termin--open');
    });
}

//Animations 
window.addEventListener('scroll', ()=> {
    let wScroll = pageYOffset;

    //Header animation
    let header = document.querySelector('.header');

    if(wScroll > 200) {
        header.classList.add('header--fixed');
    } else {
        header.classList.remove('header--fixed');
    }

    //About section animations
    const about = document.querySelector('.about');
    let aboutText = document.querySelectorAll('.about__content--text');
    let aboutImg = document.querySelector('.about--img');

    if(wScroll > (about.offsetTop / 1.35)) {
        for(let i = 0; i < aboutText.length; i++) {
            setTimeout(() => {
                aboutText[i].style.opacity = '1';
                aboutText[i].style.transform = 'translateY(0%)'; 
            }, i * 500);
        }

        aboutImg.style.opacity = '1';
    } else {
        for(let i = 0; i < aboutText.length; i++) {
            setTimeout(() => {
                aboutText[i].style.opacity = '0';
                aboutText[i].style.transform = 'translateY(50px)'; 
            }, i * 500);
        }

        aboutImg.style.opacity = '0';
    }

    //Map section animations
    const map = document.querySelector('.map');
    let mapText = document.querySelectorAll('.map--text');

    if(wScroll > (map.offsetTop / 1.05)) {
        for(let i = 0; i < mapText.length; i++) {
            setTimeout(() => {
               mapText[i].style.opacity = '1';
               mapText[i].style.transform = 'translateY(0%)'; 
            }, i * 500);
        }
    } else {
        for(let i = 0; i < mapText.length; i++) {
            setTimeout(() => {
               mapText[i].style.opacity = '0';
               mapText[i].style.transform = 'translateY(50px)'; 
            }, i * 500);
        }
    }

    //Info section animations
    const info = document.querySelector('.info');
    let infoListItem = document.querySelectorAll('.info--list--item');

    if(wScroll > (info.offsetTop / 1.12)) {
        for(let i = 0; i < infoListItem.length; i++) {
            setTimeout(() => {
                infoListItem[i].style.opacity = '1';
                infoListItem[i].style.transform = 'translateY(0%)';
            }, i * 500);
        }
    } else {
        for(let i = 0; i < infoListItem.length; i++) {
            setTimeout(() => {
                infoListItem[i].style.opacity = '0';
                infoListItem[i].style.transform = 'translateY(-25px)';
            }, i * 300);
        }
    }

    //Newsletter section animations
    const newsletter = document.querySelector('.newsletter');
    let newsletterText = document.querySelectorAll('.newsletter--animated--text');

    if(wScroll > (newsletter.offsetTop / 1.03)) {
        for(let i = 0; i < newsletterText.length; i++) {
            setTimeout(() => {
               newsletterText[i].style.opacity = '1';
               newsletterText[i].style.transform = 'translateY(0%)'; 
            }, i * 500);
        }
    } else {
        for(let i = 0; i < newsletterText.length; i++) {
            setTimeout(() => {
               newsletterText[i].style.opacity = '0';
               newsletterText[i].style.transform = 'translateY(35px)'; 
            }, i * 500);
        }
    }
})

//Info slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('info__slider');
    var dots = document.getElementsByClassName('info--dot');

    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for(i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" info--dot--active", "");
    }

    slides[slideIndex - 1].style.display = 'flex';
    dots[slideIndex-1].className += " info--dot--active";
}

let btnInfoLeft = document.querySelector('#infoBtnLeft');
let btnInfoRight = document.querySelector('#infoBtnRight');

btnInfoLeft.addEventListener('click', ()=> {
    plusSlides(-1);
})

btnInfoRight.addEventListener('click', ()=> {
    plusSlides(+1);
})
