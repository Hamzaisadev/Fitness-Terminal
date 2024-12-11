var swiper = new Swiper(".gymSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var swiper2 = new Swiper(".teachSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1.6,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var swiper3 = new Swiper(".testSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1.6,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

let menuOpen = document.getElementById("menuOpen");
let menu = document.getElementById("navbar");
let menuClose = document.getElementById("close");

menuOpen.addEventListener("click", () => {
  menu.style.transform = "translateY(0%)";
});
menuClose.addEventListener("click", () => {
  menu.style.transform = "translateY(100%)";
});

let cards = document.getElementsByClassName("packageRow");
let headings = document.getElementsByClassName("headingCard");

// Loop through each card to add event listeners
for (let i = 0; i < cards.length; i++) {
  let card = cards[i];
  let heading = headings[i];

  card.addEventListener("mouseenter", function () {
    heading.classList.add("headingHover");
  });

  card.addEventListener("mouseleave", function () {
    heading.classList.remove("headingHover");
  });
}

document.querySelector("#contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.elements.name.value = "";
  e.target.elements.email.value = "";
  e.target.elements.phone.value = "";
  e.target.elements.message.value = "";
  document.querySelector(".alert").style.display = "block";
});
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () {
      div.style.display = "none";
    }, 600);
  };
}

function navScroll() {
  const navbar = document.querySelector(".headerInner");
  if (window.scrollTop > 60) {
    // Adjust the scroll position as needed
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
}
window.onscroll = function () {
  navScroll();
};
