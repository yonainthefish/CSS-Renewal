
// 메뉴 드롭
const openbtn=document.querySelector(".icon");
const closebtn=document.querySelector(".close");
const sidemenu=document.querySelector(".side_menu");
console.log(openbtn,closebtn,side_menu);


openbtn.addEventListener("click",e=>{
    sidemenu.style.width="500px";
})

closebtn.addEventListener("click",e=>{
    sidemenu.style.width="0px";
})

// 메뉴 드롭 아코디언
var acc = document.getElementsByClassName("accordion");
    var i;
 
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });  
    }

//메인비주얼 메뉴 슬라이드1
// var swiper = new Swiper(".mySwiper", {
//   pagination: {
//     el: ".swiper-pagination",
//     type: "fraction",
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

//메인비주얼 메뉴 슬라이드2

var swiper = new Swiper(".mySwiper9", {
    slidesPerView: 1,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 1,
      },
      991: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 1,
      },
      1024: {
          slidesPerView: 3,
          spaceBetween: 0,
          slidesPerGroup: 3,
      },
    },
   
  });

const accordionbtn=document.querySelectorAll(".accordiontitle");
const alltext=document.querySelectorAll(".text");
const accicon=document.querySelectorAll(".accicon");
console.log(accordionbtn, alltext, accicon);

accordionbtn.forEach(function (el){
    el.addEventListener("click",toggleaccordion)
})


// <-----페이지 아코디언
let item=document.getElementsByClassName('item');
let btn=document.getElementsByClassName('btn');

for(let i=0;i <btn.length;i++){
    btn[i].addEventListener('click',accordion);
}

function accordion(){
    let itemClass=this.parentNode.className;
    for(let i=0;i<item.length;i++){
        item[i].className='item close';
    }
    if(itemClass == 'item close'){
        this.parentNode.className='item open';
    }
}

// <-----제품 추천 슬라이드----->
var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 0,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
      navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
      breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 0,
            slidesPerGroup: 1,
        },
      },
  });

  