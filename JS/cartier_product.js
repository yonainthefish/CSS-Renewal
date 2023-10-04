const cheerio = require("cheerio");
const fs = require("fs");

// HTML 코드를 변수에 저장
const html = `
  <section class="product">
    <div class="w_boxs">
        <img class="mainvisual_4" src="./img/mainvisual__img_4.png" alt="메비4">
        <h3 class="title_text">Cartier watch icon</h3>
        <div class="watch_box">
            <ul class="menu">
                <li class="is_on"><a href="#none" class="bttn">모든 컬렉션</a></li>
                <li><a href="#none" class="bttn">그녀를 위한 선물</a></li>
                <li><a href="#none" class="bttn">그를 위한 선물</a></li>
            </ul>
            <div class="wrap1">
                <div class="swiper content1" id="content1">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide" >
                            <a href="cartier_sub.html"><img src="./img/watch_1.png" alt="watch1"></a>
                            <p>블롱 드 까르띠에</p>
                        </li>
                        <li class="swiper-slide" >
                            <a href="#none"><img src="./img/watch_2.png" alt="watch2"></a>
                            <p>산토스 드 까르띠에</p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_3.png" alt="watch3"></a>
                            <p>베누아</p>
                        </li>
                        <li class="swiper-slide" >
                            <a href="#none"><img src="./img/watch_4.png" alt="watch4"></a>
                            <p>탱크</p>
                        </li>
                        <li class="swiper-slide" >
                            <a href="#none"><img src="./img/watch_5.png" alt="watch5"></a>
                            <p>팬더 주얼리 워치</p>
                        </li>
                        <li class="swiper-slide" >
                            <a href="#none"><img src="./img/watch_6.png" alt="watch6"></a>
                            <p>까르띠에 프리베</p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_7.png" alt="watch7"></a>
                            <p>탱크</p>
                        </li>
                    </ul>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper content2"  id="content2">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_her_1.png" alt="watch_her1"></a>
                            <p>팬더 드 까르띠에 워치<br><span> ₩5,250,000</span></p>
                        
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_her_2.png" alt="watch_her2"></a>
                            <p>RONDE MUST DE CARTIER <span>₩3,430,000 </span></p>
                            
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_her_3.png" alt="watch_her3"></a>
                            <p>베누아 <span><br>₩3,430,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_her_4.png" alt="watch_her4"></a>
                            <p>RONDE MUST DE CARTIER <span>₩3,940,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_her_45png.png" alt="watch_her5"></a>
                            <p>산토스-뒤몽 워치<br> <span>₩3,940,000 </span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_her_6png.png" alt="watch_her6"></a>
                            <p>발롱 블루 드 까르띠에<br><span>₩6,500,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_her_7.png.png" alt="watch_her7"></a>
                            <p>발롱 블루 드 까르띠에<span> ₩7,400,000</span></p>
                        </li>
                    </ul>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper content3"  id="content3">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_him_1.png" alt="watch_him1"></a>
                            <p>RDEON MUST DE CARTIER<br><span>₩6,500,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_him_2.png" alt="watch_him2"></a>
                            <p>RONDE MUST DE CARTIER<br><span>₩5,550,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_him_3.png" alt="watch_him3"></a>
                            <p>산토스-뒤몽 워치<br><span>₩7,800,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_him_4.png" alt="watch_him4"></a>
                            <p>산토스-뒤몽 워치<br><span>₩6,500,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_him_5.png" alt="watch_him5"></a>
                            <p>발롱 블루 드 까르띠에 워치<br><span>₩8,500,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_him_6.png" alt="watch_him6"></a>
                            <p>파샤 드 까르띠에 워치<br><span>₩8,750,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/watch_him_7.png" alt="watch_him7"></a>
                            <p>RONDE MUST DE CARTIER<br><span>₩6,500,000</span></p>
                        </li>
                    </ul>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <p class="all_buttun"><a href="#none">모든 컬렉션 보기 +</a></p>
            <div class="btn_group">
                <button type="button" class="prev" style="background: white; border: 0px;"><img src="./img/main-kv-arr-l.png" alt="왼쪽버튼"></button>
                <button type="button" class="next" style="background: white; border: 0px;"><img src="./img/main-kv-arr-r.png" alt="오른쪽"></button>
            </div>
        </div>
    </div>
    <div class="w_boxs">
        <img class="mainvisual_4" src="./img/mainvisual__img_4.png" alt="메비4">
        <h3 class="title_text">Cartier Jewllay icon</h3>
        <div class="watch_box">
            <ul class="j_menu">
                <li class="is_on"><a href="#none" class="bttn">모든 컬렉션</a></li>
                <li><a href="#none" class="bttn">그녀를 위한 선물</a></li>
                <li><a href="#none" class="bttn">그를 위한 선물</a></li>
            </ul>
            <div class="wrap2">
                <div class="swiper content4" id="content4">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="cartier_sub.html"><img src="./img/jewllery_1.png" alt="watch1"></a>
                            <p>블롱 드 까르띠에</p>
                        </li>
                        <li class="swiper-slide" >
                            <a href="cartier_sub.html"><img src="./img/jewllery_2.png" alt="watch1"></a>
                            <p>산토스 드 까르띠에</p>
                        </li>
                        <li class="swiper-slide">
                            <a href="cartier_sub.html"><img src="./img/jewllery_3.png" alt="watch1"></a>
                            <p>베누아</p>
                        </li>
                        <li class="swiper-slide" >
                            <a href="cartier_sub.html"><img src="./img/jewllery_4.png" alt="watch1"></a>
                            <p>탱크</p>
                        </li>
                        <li class="swiper-slide" >
                            <a href="cartier_sub.html"><img src="./img/jewllery_5.png" alt="watch1"></a>
                            <p>팬더 주얼리 워치</p>
                        </li>
                        <li class="swiper-slide" >
                            <a href="cartier_sub.html"><img src="./img/jewllery_6.png" alt="watch1"></a>
                            <p>까르띠에 프리베</p>
                        </li>
                        <li class="swiper-slide">
                            <a href="cartier_sub.html"><img src="./img/jewllery_7.png" alt="watch1"></a>
                            <p>탱크</p>
                        </li>
                    </ul>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper content5"  id="content5">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forher_1.png" alt="watch_her1"></a>
                            <p>팬더 드 까르띠에 워치<br><span> ₩5,250,000</span></p>
                        
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forher_2.png" alt="watch_her2"></a>
                            <p>RONDE MUST DE CARTIER <span>₩3,430,000 </span></p>
                            
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forher_3.png" alt="watch_her3"></a>
                            <p>베누아 <span><br>₩3,430,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forher_4.png" alt="watch_her4"></a>
                            <p>RONDE MUST DE CARTIER <span>₩3,940,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forher_5.png" alt="watch_her5"></a>
                            <p>산토스-뒤몽 워치<br> <span>₩3,940,000 </span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forher_6.png" alt="watch_her6"></a>
                            <p>발롱 블루 드 까르띠에<br><span>₩6,500,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forher_7.png" alt="watch_her7"></a>
                            <p>발롱 블루 드 까르띠에<span> ₩7,400,000</span></p>
                        </li>
                    </ul>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="swiper content6"  id="content6">
                    <ul class="swiper-wrapper">
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forhim_1.png" alt="watch_him1"></a>
                            <p>RONDE MUST DE CARTIER<br><span>₩6,500,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forhim_2.png" alt="watch_him2"></a>
                            <p>RONDE MUST DE CARTIER<br><span>₩5,550,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forhim_3.png" alt="watch_him3"></a>
                            <p>산토스-뒤몽 워치<br><span>₩7,800,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forhim_4.png" alt="watch_him4"></a>
                            <p>산토스-뒤몽 워치<br><span>₩6,500,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forhim_5.png" alt="watch_him5"></a>
                            <p>발롱 블루 드 까르띠에 워치<br><span>₩8,500,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forhim_6.png" alt="watch_him6"></a>
                            <p>파샤 드 까르띠에 워치<br><span>₩8,750,000</span></p>
                        </li>
                        <li class="swiper-slide">
                            <a href="#none"><img src="./img/jewllery_.forhim_7.png" alt="watch_him7"></a>
                            <p>RONDE MUST DE CARTIER<br><span>₩6,500,000</span></p>
                        </li>
                    </ul>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
            <p class="all_buttun"><a href="#none">모든 컬렉션 보기 +</a></p>
            <div class="btn_group">
                <button type="button" class="prev" style="background: white; border: 0px;"><img src="./img/main-kv-arr-l.png" alt="왼쪽버튼"></button>
                <button type="button" class="next" style="background: white; border: 0px;"><img src="./img/main-kv-arr-r.png" alt="오른쪽"></button>
            </div>
        </div>
    </div>    
   </section>
`; // 여기에 HTML 코드를 넣으세요

// Cheerio를 사용하여 HTML 파싱
const $ = cheerio.load(html);

// 추출된 데이터를 저장할 배열 초기화
const jsonData = [];

// 각 swiper 슬라이드에 대해 반복
$(".swiper-slide").each((index, element) => {
  const imgSrc = $(element).find("img").attr("src");
  const pText = $(element).find("p").text();

  // pText에서 이름, 아이템, 가격, 성별 추출
  const [name, item, price, gender] = pText.split("<br>");

  // 데이터 객체 구성
  const data = {
    name: name.trim(),
    item: item.trim(),
    price: price.trim(),
    gender: gender.trim(),
    img: imgSrc,
  };

  // 데이터 객체를 JSON 배열에 추가
  jsonData.push(data);
});

// JSON으로 변환
const jsonString = JSON.stringify(jsonData, null, 2);

// JSON 파일로 저장
fs.writeFileSync("data.json", jsonString);
