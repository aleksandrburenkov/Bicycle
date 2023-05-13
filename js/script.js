'use strict';

function ibg() {
    let ibg = document.querySelectorAll('.ibg');
    for (let i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage =
                'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

// =======Меню бургер================================================


const iconMenu = document.querySelector('.menu__icon');

const menuBody = document.querySelector('.menu__body');

if (iconMenu) {

    iconMenu.addEventListener('click', function (e) {
       
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
      
        document.body.classList.toggle('_lock');
    });
}

//=---------------------------------------------------------------------- Скрипт для проверки устройства
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    IOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|ipod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.IOS() ||
            isMobile.Opera() ||
            isMobile.Windows() ||
            isMobile.BlackBerry()
        );
    },
};



if (isMobile.any()) {
    
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}


// =====================SLIDER---------------------------------------

if ($('.slider__body').length > 0) {
    $('.slider__body').slick({
        dots: true,
        arrows: false,
        accessibility: false,
        slidersToShow: 1,
        autoplaySpeed: 3000,
        adaptiveHeight: true,
        nextArrow: '<button type="button" class="slick-next"></button>',
        prevArrow: '<button type="button" class="slick-prev"></button>',
        responsive: [
            {
                breckpoint: 786,
                settings: {},
            },
        ],
    });
}

// =====================SLIDER---------------------------------------

// --------------------ПРОВЕРКА ДОСТОВЕРНОСТИ ФОРМЫ-------------------
