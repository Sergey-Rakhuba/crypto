let openBtn = document.querySelector(".open-burger-btn")
let closeBtn = document.querySelector(".close-burger-btn")
let burgerMenuBody = document.querySelector(".burger-menu__body")
if (openBtn) {
   openBtn.addEventListener('click', function () {
      burgerMenuBody.classList.add('active');
      

   });
};
if (closeBtn) {
   closeBtn.addEventListener('click', function () {
      burgerMenuBody.classList.remove('active');
      
   });
};
let wqq = new Swiper(".swiper-crypto-money-block",{
   loop: true,
   slidesPerView: 1,
   
   breakpoints: {
      240: {
         slidesPerView: 1,
         
         spaceBetween: 20,
      },
      630: {
         slidesPerView: 2,
         
         spaceBetween: 20,
      },

      680: {
         slidesPerView: 3,
         
         spaceBetween: 20,
      },
     
      992: {
         slidesPerView: 1,
         spaceBetween: 20,
      },
      1024: {
         slidesPerView: 1,
         spaceBetween: 20,
      }
     
   },
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
   pagination: {
      el: '.swiper-pagination',
      //type: 'fraction'
      clickable: true,
   },
});
var swiperOs = new Swiper(".swipper-os", {
   loop: true,
   
   slidesPerView: 3,
   spaceBetween: 40,

   centeredSlides: true,
   autoplay: {
      delay: 5000,
      stopOnLastSlide: true,
      disableOnInteraction: true,
   },
   navigation: {
      nextEl: ".swiper-next",
      prevEl: ".swiper-prev",
   },
   pagination: {
      el: '.swiper-pagination',
      //type: 'fraction'
      clickable: true,
   },
   breakpoints: {
      240: {
         slidesPerView: 1,
         centeredSlides: true,
         spaceBetween: 40,
      },

      420: {
         slidesPerView: 1.2,
         centeredSlides: true,
         spaceBetween: 40,
      },
      768: {
         slidesPerView: 1.7,
         centeredSlides: true,
         spaceBetween: 40,
      },
      992: {
         slidesPerView: 2.4,
         spaceBetween: 40,
      },
      1400: {
         slidesPerView: 3,
         spaceBetween: 40,
        
      }
   },
});
//ползунок
function fun1() {
   let rng = document.getElementById('slider1');
   let i1 = document.getElementById('set-sum');
   i1.value = rng.value;
   
   let div = document.getElementById('img-info');
   div.style.marginLeft = (rng.value * 2.3) + 'px';
};
//open-enter-button

let openEnterButton = document.getElementById("open-enter-button");
let modalEnter = document.querySelector(".modal-enter");
let closeEnterButton = document.getElementById("close-enter-button");
let mainBlock = document.getElementById("main")

if (openEnterButton) {
   openEnterButton.addEventListener('click', function () {
      modalEnter.classList.add('active');
      mainBlock.classList.add('active');
     

   });
};
if (closeEnterButton) {
   closeEnterButton.addEventListener('click', function () {
      modalEnter.classList.remove('active');
      mainBlock.classList.remove('active');
      
   });
};

//reg modal

let openRegModal = document.getElementById('reg-btn');
let modalReg = document.querySelector(".modal-reg");
let closeRegButton = document.getElementById('close-reg-button');
let modBackMain = document.getElementById("mod-back-main");
let modalBody = document.querySelector (".modal-body")

if (openRegModal) {
   openRegModal.addEventListener('click', function () {
      modalReg.classList.add('active');
      modalBody.classList.add('active');
      mainBlock.classList.add('active');
      

   });
};
if (closeRegButton) {
   closeRegButton.addEventListener('click', function () {
      modalReg.classList.remove('active');
      modalBody.classList.remove('active');
      modalEnter.classList.remove('active');
      mainBlock.classList.remove('active');
      
   });
};

let openRememberModal = document.getElementById('remember-btn');
let modalRemember = document.querySelector(".modal-remember");
let closeRememberButton = document.getElementById('close-modal-remember-button');


if (openRememberModal) {
   openRememberModal.addEventListener('click', function () {
      modalRemember.classList.add('active');
      modalBody.classList.add('active');
      mainBlock.classList.add('active');
      

   });
};
if (closeRememberButton) {
   closeRememberButton.addEventListener('click', function () {
      modalRemember.classList.remove('active');
      modalBody.classList.remove('active');
      modalEnter.classList.remove('active');
      mainBlock.classList.remove('active');
      
   });
};


let openModalReplenishmentOfFunds = document.querySelector('.replenishment-of-funds-btn');
let modalReplenishmentOfFunds = document.querySelector(".replenishment-of-funds");
let closeButtonModalReplenishmentOfFunds = document.getElementById('close-replenishment-button');


if (openModalReplenishmentOfFunds) {
   openModalReplenishmentOfFunds.addEventListener('click', function () {
      modalReplenishmentOfFunds.classList.add('active');
      modalBody.classList.add('active');
      mainBlock.classList.add('active');
      

   });
};
if (closeButtonModalReplenishmentOfFunds) {
   closeButtonModalReplenishmentOfFunds.addEventListener('click', function () {
      modalReplenishmentOfFunds.classList.remove('active');
      modalBody.classList.remove('active');
      modalEnter.classList.remove('active');
      mainBlock.classList.remove('active');
      
   });
};