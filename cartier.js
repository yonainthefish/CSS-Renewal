AOS.init();

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







//  <----제품 탭 기능

const menulist=document.querySelectorAll(".menu li");
const collect_list=document.querySelectorAll(".wrap1 .swiper");
// const collect_list=document.querySelectorAll(".content1 .swiper-wrapper");
console.log(menulist, collect_list);

for(let i=0;i<menulist.length;i++){
    menulist[i].addEventListener("click",e=>{
       e.preventDefault();
       console.log(i);
       for(let j=0;j<menulist.length;j++){
        collect_list[j].style.display="none"
        menulist[j].classList.remove('is_on');
       }
       collect_list[i].style.display="block";
       menulist[i].classList.add('is_on');

      // // 버튼 클릭시 컨텐츠 전환
      // activeCont = this.getAttribute('href');
      // document.querySelector(activeCont).style.display = 'block';
    })
}

const jmenulist=document.querySelectorAll(".j_menu li");
const jcollect_list=document.querySelectorAll(".wrap2 .swiper");
console.log(jmenulist, jcollect_list);

for(let i=0;i<jmenulist.length;i++){
  jmenulist[i].addEventListener("click",e=>{
       e.preventDefault();
       console.log(i);
       for(let j=0;j<jmenulist.length;j++){
        jcollect_list[j].style.display="none"
        jmenulist[j].classList.remove('is_on');
       }
       jcollect_list[i].style.display="block";
       jmenulist[i].classList.add('is_on');
    })
}



// <--- 제품 부분 슬라이드 부분
var swiper = new Swiper(".content1", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });
var swiper = new Swiper(".content2", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".content3", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".content4", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".content5", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
var swiper = new Swiper(".content6", {
    slidesPerView: 6,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },


  });

 


  
// <---- 마지막 서비스 부분 슬라이드
// $(function(){
//   var swiper1=undefined;
//   var swiperOption = {
//       slidesPerView: "auto",
//       centeredSlides: true,
//       spaceBetween: 30,
//       pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//       },
//     };
 
//     function slideMake() {
                     
//       var winWidth = $(window).width();
//       console.log(winWidth);

//       if (winWidth >= 768 && swiper1 !== undefined) {
//           swiper1.destroy();
//           swiper1 = undefined;
//       }
//       else if (winWidth < 768 && swiper1 == undefined) {
//           swiper1 = new Swiper(".mySwiper5", swiperOption);
//       }
//   }
// 화면너비가 768이상일때만 호출
  slideMake();

  $(window).resize(function () {
      slideMake();
  });

})



