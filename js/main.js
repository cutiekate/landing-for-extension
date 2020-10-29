new WOW().init();



document.addEventListener("scroll", () => {
  var progress = 30; 
  var progressEl = document.querySelector('.progress'); 
  var increaseProgress = function() { 
  progress = progress+ 330; 
  progressEl.style.transform = 'rotate('+progress+'deg)'; 
  progressEl.style.transitionDuration = '2s';
}
increaseProgress ();
});
document.addEventListener("scroll", () => {
  var progress = 160; 
  var progressEl = document.querySelector('.progress2'); 
  var increaseProgress = function() { 
  progress = progress+ 230; 
  progressEl.style.transform = 'rotate('+progress+'deg)'; 
  progressEl.style.transitionDuration = '3s';
}
increaseProgress ();
});
document.addEventListener("scroll", () => {
  var progress = 120; 
  var progressEl = document.querySelector('.progress3'); 
  var increaseProgress = function() { 
  progress = progress+ 240; 
  progressEl.style.transform = 'rotate('+progress+'deg)'; 
  progressEl.style.transitionDuration = '4s';
}
increaseProgress ();
});


$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1000,
    vertical: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    verticalSwiping: true,
    infinite: true,
  });

});