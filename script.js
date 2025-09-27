 window.addEventListener("load", () => {
      const preloader = document.getElementById("firePreloader");
      preloader.classList.add("fire-hidden");
    });
    const scrollBtn = document.getElementById("fireScrollTop");

    window.addEventListener("scroll", () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    });

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

    AOS.init();



let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let carouselDom = document.querySelector('.carousel');
let listitemDom = document.querySelector(".carousel .list");
let thumbnailDom = document.querySelector('.carousel .thumbnail'); // fixed spelling


nextDom.onclick = function(){
    showslider('next');
}
prevDom.onclick = function(){
    showslider('prev');
}

let timerunning = 3000;
let timeautonext = 7000;
let runtimeout;
let runautorun = setTimeout(()=>{
    nextDom.click();
},timeautonext);
function showslider(type){
    let itemslider = document.querySelectorAll('.carousel .list .item')
    let itemthumbnail = document.querySelectorAll('.carousel .thumbnail .item')

    if(type == 'next'){
        listitemDom.appendChild(itemslider[0]);
        thumbnailDom.appendChild(itemthumbnail[0]);
        carouselDom.classList.add('next');
    }
    else
    {
        let positionlastitem = itemslider.length-1;
        listitemDom.prepend(itemslider[positionlastitem]);
        thumbnailDom.prepend(itemthumbnail[positionlastitem]);
        carouselDom.classList.add('prev');
    }

    clearTimeout(runtimeout);
    runtimeout = setTimeout(()=>{
 
        carouselDom.classList.remove('next')
        carouselDom.classList.remove('prev')

    },timerunning)

    clearTimeout(runautorun);
    runautorun =setTimeout(()=>{
        nextDom.click();

    },timeautonext)
}
  document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".counter");

    const options = {
      threshold: 0.5
    };

    const startCounter = (entry) => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute("data-target");
        const duration = 2000; // 2 seconds
        const step = Math.ceil(target / (duration / 20));
        let count = 0;

        const updateCounter = () => {
          count += step;
          if (count < target) {
            counter.textContent = count + "+";
            setTimeout(updateCounter, 20);
          } else {
            counter.textContent = target + "+";
          }
        };

        updateCounter();
        observer.unobserve(counter);
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(startCounter);
    }, options);

    counters.forEach(counter => observer.observe(counter));
  });

 
    let currentIndex = 0;
    const track = document.getElementById('sliderTrack');
    const totalSlides = document.querySelectorAll('.slide').length;

    function moveSlide() {
      currentIndex++;
      if (currentIndex >= totalSlides) currentIndex = 0;
      track.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    setInterval(moveSlide, 2000); // Auto-slide every 2 seconds


  


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1, 
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000, 
      disableOnInteraction: false, 
    },
    loop: true 
  });
 