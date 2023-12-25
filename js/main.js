// Accordion 

document.addEventListener('DOMContentLoaded', function () {
    var accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            var accordionItem = this.parentNode;

            if (accordionItem.classList.contains('active')) {
                accordionItem.classList.remove('active');
            } else {
                var activeItem = document.querySelector('.accordion-item.active');

                if (activeItem) {
                    activeItem.classList.remove('active');
                }

                accordionItem.classList.add('active');
            }
        });
    });
});

// Smoothly Scroll


// document.addEventListener('DOMContentLoaded', function () {
//     var scrollLink = document.getElementById('learn');

//     scrollLink.addEventListener('click', function (e) {
//         e.preventDefault();

//         var targetId = this.getAttribute('href');
//         var targetElement = document.querySelector(targetId);

//         targetElement.scrollIntoView({
//             behavior: 'smooth'
//         });

//         targetElement.classList.add('scroll-transition');
//         setTimeout(function () {
//             targetElement.classList.remove('scroll-transition');
//         }, 2000);
//     });
// });

// Modal
let modal = document.getElementById('modal');

function openPopup() {
    modal.classList.add('open-popup');
}

function closePopup() {
    modal.classList.remove('open-popup');
}

window.onclick = (event) => {
    if (!event.target.matches('.btn-modal')) {
        if (modal.classList.contains('open-popup')) {
            closePopup();
        }
    }
}


modal.addEventListener('click', event => event.stopPropagation())


// Hamburger menu

var menu = document.querySelector('.navbar');
var hamburger = document.querySelector('.hamburger');
var menuItems = document.querySelectorAll('.navbar ul li');

hamburger.addEventListener('click', function () {
    menu.classList.toggle('show');
    hamburger.classList.toggle('show');
});