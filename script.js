const burger = document.querySelector('.burger');
const containerMain = document.querySelector('.container-main');
const screens = document.querySelectorAll('.screen');

const main = document.querySelector('.main')

burger.addEventListener('click', ()=>{
    containerMain.classList.toggle('active');
})


function replaceBg(id) {
const bg = document.getElementById(id);
screens.forEach((screen) =>{
    screen.style.display = 'none';
})
bg.style.display = 'block';
}

function changeBg() {
const links = document.querySelectorAll('.link');

links.forEach((link, index)=>{
    link.addEventListener('click', e =>{
        e.preventDefault();
        replaceBg(e.target.dataset.link);
    })

    link.addEventListener('click', e =>{
        e.preventDefault();
        containerMain.classList.toggle('.active')
    })
})

screens.forEach((screen)=>{
    screen.style.display = 'none';
    screens[0].style.display = 'block'
})


}

changeBg() 

//link on click
const mains = document.querySelectorAll('.main')
let  a = window.matchMedia("(max-width: 850px)");

function changeBgOnClick(){
  
  mains.forEach((main) =>{
      main.addEventListener('click', ()=>{
        if(a.matches){
          containerMain.classList.remove('active');
        }else {
          containerMain.classList.toggle('active');
        }
          
      })
  })
}
changeBgOnClick()


// slider
$(document).ready(function() {
    $('.customer-logos').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 850,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1
        }

      }]
    });
  });
  
  const slider = $(".customer-logos");
  
  
  slider.on('wheel', (function(e) {
  
    var slideCount = $(this)[0].slick["slideCount"];
    var currentIndex = $(this).slick("slickCurrentSlide");
    var totalSildeToShow =  $(this)[0].slick.options["slidesToShow"];
  
    if (e.originalEvent.deltaY < 0) {
  
      e.preventDefault();
      $(this).slick('slickPrev');
  
    } else {
      if (slideCount - totalSildeToShow == currentIndex)
        return;
      e.preventDefault();
      $(this).slick('slickNext')
    }
  }));


// accordion
const accordionWrappers = document.querySelectorAll('[data-accordions]');

if(accordionWrappers.length > 0) {
  accordionWrappers.forEach((wrapper) =>{
    const accordions = wrapper.querySelectorAll('[data-accordion]');
    const duration = +wrapper.dataset.duration || 300;
    const closeAccordions = wrapper.dataset.closeAccordions;

    accordions.forEach((accordion)=>{
      const trigger = accordion.querySelector('[data-trigger]');
      const content = accordion.querySelector('[data-content]');

      trigger.addEventListener('click', toggleAccordion.bind(accordion, content, duration, closeAccordions, accordions));
    })
  })
};

function toggleAccordion(content, duration, close, accordions) {
  content.style.transitionDuration = duration + 'ms';
  this.classList.add('disable-click');

  if(this.classList.contains('activeAcc')){
    closeAccordion(this, content, duration)
  }else {
    openAccordion(this, content, duration);
    if(close !== undefined) {
      closeActiveAccordion(accordions, this);
    }
  }
}


function openAccordion(accordion, content, duration) {
  content.style.display = 'block';
  const height = content.offsetHeight;
  content.style.height = 0;
  accordion.classList.add("activeAcc");

  setTimeout(() =>{
    content.style.height = height + 'px';
  },20)

  setTimeout(() =>{
   content.style.height = 'auto';
   accordion.classList.remove('disable-click');
  },duration)
}

function closeAccordion(accordion, content, duration) {
  content.style.height = content.offsetHeight + 'px';
  accordion.classList.remove('activeAcc');
  setTimeout(() =>{
    content.style.height = 0;
  },20)

  setTimeout(() =>{
    content.style.display = 'none';
    content.style.height = null;
    accordion.classList.remove('disable-click');
   },duration)
}

function closeActiveAccordion(accordions, current) {
  accordions.forEach((accordion)=>{
    if(accordion !== current && accordion.classList.contains('activeAcc')){
      const content = accordion.querySelector('[data-content]');
      const duration = +accordion.parentElement.dataset.duration || 300;
      closeAccordion(accordion, content, duration);
    }
  })
}
// to the top btn
const toTheTop = document.querySelector("#return-to-top");
let  x = window.matchMedia("(max-width: 500px)");

document.addEventListener("scroll", () => {
  btnVisibility();
});

const btnVisibility = () => {
  if(x.matches){
    toTheTop.style.display = "none";
  }
  else if(window.scrollY > 500) {
    toTheTop.style.display = "block";
  } else {
    toTheTop.style.display = "none";
  }
};

toTheTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


// open another html on click
const button = document.querySelectorAll('.btn');
button.forEach((btn) =>{
  btn.addEventListener('click', ()=>{
    window.location.href =  "underConstruction.html"
  })
})



