import "../common/reset.css";
import "@/assets/global.less";
import "../common/header";
import "./index.less";
import "../common/footer";
import Swiper from "swiper";

const homeBanner = new Swiper(".home-banner", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});
const peopleSwiper = new Swiper(".people-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
});

$(".project-nav-item").on("click", function () {
  var index = $(this).index();
  $(this).addClass("on").siblings().removeClass("on");
  $(".project-item").eq(index).addClass("on").siblings().removeClass("on");
});
$(".category-item").on("click", function(){
    var index = $(this).index();
    $(this).addClass("on").siblings().removeClass("on");
    $(".news-box-item").eq(index).addClass("on").siblings().removeClass("on");
})