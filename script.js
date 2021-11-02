let hamburgur = document.getElementById('hamburgur');
let navbar = document.querySelector('.navbar');

hamburgur.onclick = function(event) {
    navbar.classList.toggle('active');
}

let search_bar = document.getElementById('search-bar');
let search_box = document.querySelector('.search-box');

search_bar.onclick = function(event) {
    search_box.classList.toggle('active');
}

let search_close = document.querySelector('.search-close');
search_close.onclick = function(event) {
    search_box.classList.remove('active');
}

/////////////////
// scroll behaviour
let section = document.querySelectorAll('section');
window.addEventListener('scroll', function() {
    let size = Math.round(window.pageYOffset);
    for (let sec of section) {
        if (size >= sec.offsetTop - document.querySelector('header').offsetHeight && size <= sec.offsetTop - document.querySelector('header').offsetHeight + sec.offsetHeight) {
            navbar.querySelector('a.active').classList.remove('active');
            let str = '#' + sec.getAttribute('id');
            navbar.querySelector(`a[href="${str}"]`).classList.add('active');
        }
    }
})



var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true
});


let navItem = document.querySelectorAll(".navItem");
function navActive() {
    navItem.forEach(item => {
        item.classList.remove('active');
    })
    this.classList.add('active');
}
navItem.forEach(item => {
    item.addEventListener('mouseover', navActive)
})