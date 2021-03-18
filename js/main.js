// slider
var swiper = new Swiper('.swiper-container', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: '.swiper-pagination',
  },
});

// more
function dropFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");
  if (dots.style.display === "none") {
    dots.style.display = "flex";
    btnText.innerHTML = "Смотреть больше";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Смотреть меньше";
    moreText.style.display = "flex";
  }
};

// modal
document.addEventListener('DOMContentLoaded', function() {
  var modalButtons = document.querySelectorAll('.js-open-modal'),
      overlay      = document.querySelector('.js-overlay-modal'),
      closeButtons = document.querySelectorAll('.js-modal-close');
  modalButtons.forEach(function(item){
     item.addEventListener('click', function(e) {
        e.preventDefault();
        var modalId = this.getAttribute('data-modal'),
            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
        modalElem.classList.add('active');
        overlay.classList.add('active');
     }); 
  }); 

  closeButtons.forEach(function(item){
     item.addEventListener('click', function(e) {
        var parentModal = this.closest('.modal');
        parentModal.classList.remove('active');
        overlay.classList.remove('active');
     });

  }); 

   document.body.addEventListener('keyup', function (e) {
       var key = e.keyCode;
       if (key == 27) {
           document.querySelector('.modal.active').classList.remove('active');
           document.querySelector('.overlay').classList.remove('active');
       };
   }, false);
   overlay.addEventListener('click', function() {
       document.querySelector('.modal.active').classList.remove('active');
       this.classList.remove('active');
   });

});

// dropdown
function myDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
if (!event.target.matches('.dropbtn')) {

  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}
}