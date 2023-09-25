// 초기화 함수
function initialize() {
  // 메뉴 드롭
  const openbtn = document.querySelector(".icon");
  const closebtn = document.querySelector(".close");
  const sidemenu = document.querySelector(".side_menu");

  openbtn.addEventListener("click", () => {
    sidemenu.style.width = "500px";
  });

  closebtn.addEventListener("click", () => {
    sidemenu.style.width = "0px";
  });

  // 메뉴 드롭 아코디언
  const accordionItems = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordionItems.length; i++) {
    accordionItems[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.maxHeight = panel.style.maxHeight ? null : panel.scrollHeight + "px";
    });
  }

  // 제품 탭 기능
  initializeProductTabs();
}

// 제품 탭 초기화 함수
function initializeProductTabs() {
  const menulist = document.querySelectorAll(".menu li");
  const collect_list = document.querySelectorAll(".wrap1 .swiper");

  menulist.forEach((menuItem, i) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      for (let j = 0; j < menulist.length; j++) {
        collect_list[j].style.display = "none";
        menulist[j].classList.remove("is_on");
      }
      collect_list[i].style.display = "block";
      menulist[i].classList.add("is_on");
    });
  });

  const jmenulist = document.querySelectorAll(".j_menu li");
  const jcollect_list = document.querySelectorAll(".wrap2 .swiper");

  jmenulist.forEach((menuItem, i) => {
    menuItem.addEventListener("click", (e) => {
      e.preventDefault();
      for (let j = 0; j < jmenulist.length; j++) {
        jcollect_list[j].style.display = "none";
        jmenulist[j].classList.remove("is_on");
      }
      jcollect_list[i].style.display = "block";
      jmenulist[i].classList.add("is_on");
    });
  });
}

// 슬라이드 초기화 함수
function initializeSlides() {
  const slideContents = document.querySelectorAll(".content1, .content2, .content3, .content4, .content5, .content6");
  slideContents.forEach((slideContent) => {
    const swiper = new Swiper(slideContent, {
      slidesPerView: 6,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  });
}

// 화면 사이즈 변경 시 슬라이드 적용 함수
function applySlidesOnResize() {
  const windowWidth = window.innerWidth;
  if (windowWidth < 768) {
    // Apply slides for smaller screens
    initializeSlides();
  }
}

// 초기화 함수 호출
initialize();
initializeSlides();
applySlidesOnResize();

// 화면 사이즈 변경 이벤트 리스너 등록
window.addEventListener("resize", applySlidesOnResize);
