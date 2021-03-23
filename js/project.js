const $menu = document.querySelector('.js-header-menu');
const $head = document.querySelector('.js-header');
const $foot = document.querySelector('.js-footer-ontop-click');
const sticky = $head.offsetTop;

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin: 35,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:2,
            nav:true
        },
        1440:{
            items:3,
            nav:true,
            loop:false
        }
    }
  });

  window.onscroll = handleStickyScroll

  $menu.addEventListener('click', () => {
    const header = $head.querySelector('.header__container');
    header.classList.toggle('header__active');
  })

  function handleStickyScroll () {
    if (window.pageYOffset > sticky) {
      $head.classList.add('header__sticky');
      return
    }

    $head.classList.remove('header__sticky');
  }
  //arrow that go to top
  $foot.addEventListener('click', () => {
    $('html, body').animate({scrollTop : 0},800);
  });
})
