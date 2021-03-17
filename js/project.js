const $menu = document.querySelector('.js-header-menu');
const $head = document.querySelector('.js-header');
const sticky = $head.offsetTop;

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
$(document).ready(function (){
  $(footerOntopClick).click(function (){
    $('html, body').animate({scrollTop : 0},800);
  });
});
