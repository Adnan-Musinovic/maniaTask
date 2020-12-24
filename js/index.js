//Open-Close Navigation
const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const social = document.querySelector('.social');

menu.addEventListener('click', ()=> {
    nav.classList.toggle('nav--open');

    if(nav.classList.contains('nav--open')){
        menu.style.marginLeft = '560px';
        social.style.marginLeft = '50px';
    } else {
        menu.style.marginLeft = '0px';
        social.style.marginLeft = '0px';
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