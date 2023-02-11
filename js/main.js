$(document).ready(function() {
    $('.header_burger, .header_link').click(function(event){
        $('.header_burger, .header_menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});


// function scrollTo (el) {
//   window.scroll({
//     left: 0,
//     top: el.offsetTop,
//     behavior: 'smooth'
//   })
// }

// var but = document.querySelector('.ab');
// var goal = document.querySelector('.ona');

// but.addEventListener('click', () => {
//   scrollTo(goal)
// })


$(document).ready(function(){
  // Add smooth scrolling to all links
  $(".header_link").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'slide',
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});


$(document).ready(function () {
  var element = document.getElementById('phonen');
  var maskOptions = {
    mask: '+{7}(000)000-00-00'
  };

  var mask = IMask(element, maskOptions);
  $('.sale').on('submit',function(event) {
    event.preventDefault()

    if($("#phonen").val().length < 16){
      console.log($("#phonen").val().length)
      // alert("Пожалуйста, заполните номер правильно!")

      // $("#phonen").css('border','1px solid #fff')
      // $("#phonen").css('box-shadow','0px 3px 12px 2px #fff')
      
      return;
    }

    this.submit()

  });
});




$(document).ready(function () {
  var elementi = document.getElementById('phone');
  var maskOptionsi = {
    mask: '+{7}(000)000-00-00'
  };
  var maski = IMask(elementi, maskOptionsi);

  $('.send').on('submit',function(event) {
    event.preventDefault()

    if($("#phone").val().length < 16){
      console.log($("#phone").val().length)
      $("#phone").css('border','2px solid red')
      return;
    }
    this.submit();
  });
});

const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
// const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
  for (let index = 0; index < popupLinks.length; index++) {
    const popupLink = popupLinks[index];
    popupLink.addEventListener("click", function (e) {
      const popupName = popupLink.getAttribute('href').replace('#', '');
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  }
}


const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
  for (let index = 0; index < popupCloseIcon.length; index++) {
    const el = popupCloseIcon[index];
    el.addEventListener('click', function (e) {
      popupClose(el.closest('.popup'));
      e.preventDefault();
    });
  }
}


function popupOpen (curentPopup) {
  if (curentPopup && unlock) {
    const popupActive = document.querySelector('.popup.open');
    if (popupActive) {
      popupClose(popupActive, false);
    } else {
      bodyLock();
    }
    curentPopup.classList.add('open');
    curentPopup.addEventListener("click", function (e) {
      if (!e.target.closest('.popup_content')) {
        popupClose(e.target.closest('.popup'));
      }
    });
  }
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
    popupActive.classList.remove('open');
    if (doUnlock) {
      bodyUnLock();
    }
  }
}

function bodyLock() {
  // const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
  // if (lockPadding.length > 0) {
    // for (let index = 0; index < lockPadding.length; index++) {
    //   const el = lockPadding[index];
    //   el.style.paddingRight = lockPaddingValue;
    // }
  // }
  
  // body.style.paddingRight = lockPaddingValue;
  // body.classList.add('lock');

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}

function bodyUnLock() {
  // setTimeout(function () {
    // if (lockPadding.length > 0) {
      // for (let index = 0; index < lockPadding.length; index++) {
      //   const el = lockPadding[index];
      //   el.style.paddingRight = '0px';
      // }
    // }
    
  //   body.style.paddingRight = '0px';
  //   body.classList.remove('lock');
  // }, timeout);

  unlock = false;
  setTimeout(function () {
    unlock = true;
  }, timeout);
}
