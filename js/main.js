// Tabs component
$(".tab").click(function () {
  $(".tabs-bar").find(".tab-active").removeClass("tab-active");
  $(".content-container").children().hide();
  $(this).addClass("tab-active");
  $(".content-" + this.id).show();
})

// Video Lightbox
// Function to reveal lightbox and adding YouTube autoplay
function revealVideo(div, video_id) {
  let video = document.getElementById(video_id).src;
  document.getElementById(video_id).src = video + '&autoplay=1'; // adding autoplay to the URL
  document.getElementById(div).style.display = 'block';
};

// Hiding the lightbox and removing YouTube autoplay
function hideVideo(div, video_id) {
  let video = document.getElementById(video_id).src;
  var cleaned = video.replace('&autoplay=1', ''); // removing autoplay form url
  document.getElementById(video_id).src = cleaned;
  document.getElementById(div).style.display = 'none';
};


// Animations =======================================================================
// Home hero animations

$('#home-hero').each(function () {
  const circle1 = document.querySelectorAll('#home-hero .circle-1');
  const circle2 = document.querySelectorAll('#home-hero .circle-2');
  const circle3 = document.querySelectorAll('#home-hero .circle-3');
  const heroHome = document.querySelectorAll('.home-hero');
  const heroImage = document.querySelectorAll('.home-hero-image');
  const heroImageM = document.querySelectorAll('.home-hero-image-m');
  const source = document.querySelectorAll('.source ellipse');
  const homeHeroText = document.querySelectorAll('.text-container');

  var abc = new TimelineMax();
  var controller = new ScrollMagic.Controller();

  abc
    .from(heroImage, 2.5, {
      y: 70,
      transformOrigin: "center bottom",
      scale: 1.2,
      autoAlpha: 0,
      ease: Power4.easeOut,
    },"0")
    .from(heroImageM, 2.5, {
      y: 70,
      transformOrigin: "center bottom",
      scale: 1.2,
      autoAlpha: 0,
      ease: Power4.easeOut,
    },"0")
    // .staggerFrom(source, 1, {
    //   stroke: "#dddddd",
    //   ease: Back.easeOut.config(1.7),
    // },)
    // .from(circle1, 1.7, {
    //   scale: 0.75,
    //   autoAlpha: 0,
    //   transformOrigin: "center bottom",
    //   ease: Power1.easeOut,
    // },)
    // .from(circle2, 1.7, {
    //   scale: 0.75,
    //   autoAlpha: 0,
    //   transformOrigin: "center bottom",
    //   ease: Power1.easeOut,
    // },"-=1")
    // .from(circle3, 1.7, {
    //   scale: 0.8,
    //   autoAlpha: 0,
    //   transformOrigin: "center bottom",
    //   ease: Power1.easeOut,
    // },"-=1")
    // .from('#home-hero .hero-text-1', 1.2, {
    //   autoAlpha: 0,
    //   ease: Power2.easeOut,
    //   // drawSVG: 0,
    // },)
    // .from('#home-hero .hero-text-2', 1.2, {
    //   autoAlpha: 0,
    //   ease: Power2.easeOut,
    //   // drawSVG: 0,
    // },"-=.5")
    // .from('#home-hero .hero-text-3', 1.2, {
    //   autoAlpha: 0,
    //   ease: Power2.easeOut,
    //   // drawSVG: 0,
    // },"-=.5")
    // .from('.home-hero', 1, {
    //   backgroundColor: 'white',
    // })

    var scene = new ScrollMagic.Scene({
      triggerElement: '#home-hero',
    })
    .addIndicators()
    .setTween(abc).addTo(controller);

});
// Home hero mobile

// Home 3 col animations =======================================
// var controller =  new ScrollMagic.Controller();

// Icon with circles
const iconCircles1 = document.querySelectorAll('.icon-circles .circle1')
const iconCircles2 = document.querySelectorAll('.icon-circles .circle2')
const iconCircles3 = document.querySelectorAll('.icon-circles .circle3')

// Icon with waves
const iconWave1 = document.querySelectorAll('.icon-waves .wave1')
const iconWave2 = document.querySelectorAll('.icon-waves .wave2')
const iconWave3 = document.querySelectorAll('.icon-waves .wave3')

// icon graph
const iconGraph = document.querySelectorAll('.icon-graph .graph-line')
var controller = new ScrollMagic.Controller();


// Icon number 1
$('#three-pointer').each(function () {

  var animateIn = new TimelineMax();

  animateIn
    .from(iconCircles1, .4, {
      scale: 0,
      autoAlpha: 0,
      transformOrigin: "center",
      ease: Circ.easeOut,
    })
    .from(iconCircles2, .4, {
      scale: 0,
      autoAlpha: 0,
      transformOrigin: "center",
      ease: Circ.easeOut,
    })
    .from(iconCircles3, .4, {
      scale: 0,
      autoAlpha: 0,
      transformOrigin: "center",
      ease: Circ.easeOut,
    })

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});
// Icon number 2
$('#three-pointer').each(function () {

  var animateIn = new TimelineMax();

  animateIn
    .fromTo(iconWave1, .7, {
      y: '100%',
      autoAlpha: 0,
      ease: Power2.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power2.easeOut
    }, "+=.5")
    .fromTo(iconWave2, .7, {
      y: '100%',
      autoAlpha: 0,
      ease: Power2.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power2.easeOut
    }, "-=.5")
    .fromTo(iconWave3, .7, {
      y: '100%',
      autoAlpha: 0,
      ease: Power2.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power2.easeOut
    }, "-=.5")

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});

// Icon number 3
$('#three-pointer').each(function () {

  var animateIn = new TimelineMax();

  animateIn
    .staggerFromTo(iconGraph, 2, {
      scaleY: '0',
      transformOrigin: "bottom left",
      ease: Power2.easeOut
    }, {
      scaleY: '1',
      ease: Power2.easeOut
    }, "+=1")

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});


// Testimonial section ===================================
// Icon number 3
$('#testimonial-01').each(function () {

  var animateIn = new TimelineMax();
  let testimonial = document.querySelectorAll('#testimonial-01 .testimonial-center')
  animateIn

    .staggerFromTo(testimonial, 1, {
      y: '20%',
      autoAlpha: 0,
      ease: Power4.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power4.easeOut
    }, "+=1")

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});

// Homepage deep dive
var deepDiveImgController = new ScrollMagic.Controller();
var deepDiveTextController = new ScrollMagic.Controller();


$('#deep-dive').each(function () {
  var animateIn = new TimelineMax();

  animateIn.staggerFrom('#deep-dive img', 1.5, {
    xPercent: -70,
    autoAlpha: 0,
    ease: Power4.easeOut
  },0);

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(deepDiveImgController);
});

$('#deep-dive').each(function () {
  var animateIn = new TimelineMax();
  animateIn.staggerFrom('#deep-dive .text-container', 1.5, {
    xPercent: 7,
    autoAlpha: 0,
    ease: Power4.easeOut
  },0);

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(deepDiveTextController);
});

// Eye catching blockquote section ===================================
// Icon number 3
$('#blockquote').each(function () {

  var animateIn = new TimelineMax();
  let blockquote = document.querySelectorAll('#blockquote')
  animateIn

    .staggerFromTo(blockquote, 1, {
      y: '20%',
      autoAlpha: 0,
      ease: Power4.easeOut
    }, {
      y: '0%',
      autoAlpha: 1,
      ease: Power4.easeOut
    }, "+=1")

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});

// 1,2,3 section ===================================
$('#new-tech-section').each(function () {

  var animateIn = new TimelineMax();
  let numberSection1 = document.querySelectorAll('.number-section .col-sm:nth-child(1) p')
  let numberSection2 = document.querySelectorAll('.number-section .col-sm:nth-child(2) p')
  let numberSection3 = document.querySelectorAll('.number-section .col-sm:nth-child(3) p')

  animateIn
    .from(numberSection1, 1, {
      autoAlpha: 0,
      y: -20,
      ease: Power4.easeOut, 
    },0)
    .from(numberSection2, 1, {
      autoAlpha: 0,
      y: -20,
      ease: Power4.easeOut,  
    },"=-.7")
    .from(numberSection3, 1, {
      autoAlpha: 0,
      y: -20,
      ease: Power4.easeOut,
    },"=-.7");

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(controller);
});


// Our Technology page ==========================================================
// OT Hero
$('#hero-split .ot-hero').each(function () {
  var othero = new ScrollMagic.Controller();
  var animateIn = new TimelineMax();
  let circles = document.querySelectorAll('.ot-hero #circles-yellow circle,.ot-hero #circles-blue circle,.ot-hero #circles-green circle')
  let graph = document.querySelectorAll('.ot-hero #blue-line,.ot-hero #yellow-line, .ot-hero #green-line')
  let gradient = document.querySelectorAll('.ot-hero #yellow-gradient, .ot-hero #blue-gradient, .ot-hero #green-gradient')
  
  animateIn
  .from(graph, 2, {drawSVG: 0})
  .from(gradient, 1, {
    autoAlpha:0,
    transformOrigin: "top",
    ease: Back.easeOut.config(1.7),
  },"-=.5")
	
	var scene = new ScrollMagic.Scene({
		triggerElement: '#hero-split',
		})
		.addIndicators()
		.setTween(animateIn).addTo(othero);
  });



// Old Technology section

const oldTechController = new ScrollMagic.Controller();

$('#old-tech').each(function () {
  var animateIn = new TimelineMax();

  animateIn
    .from('#old-tech .img-1', 1.2, {
	  y: 20,
	  scale:0,
    ease: Power4.easeOut, 
    },"=-.8")
    .from('#old-tech .img-2', 1.2, {
	  y: 20,
	  scale:0,
    ease: Power4.easeOut,  
    },"=-1.3")
    .from('#old-tech .img-3', 1.2, {
    y: 20,
    scale:0,
    ease: Power4.easeOut,
    },"=-1.3")

  var scene = new ScrollMagic.Scene({
      triggerElement: this,
    })
    .addIndicators()
    .setTween(animateIn).addTo(oldTechController);
});

// Importance of respiration section
$('#respiration-importance').each(function () {
  var animateIn = new TimelineMax();
  var respController = new ScrollMagic.Controller();

  animateIn
    .from('.box img',4,{y: 70, autoAlpha: 0, ease: Power4.easeOut})
    
  var scene = new ScrollMagic.Scene({
    triggerElement: '#respiration-importance',
  })
  .addIndicators()
  .setTween(animateIn).addTo(respController);
});

// Mobile nav
(function () {
	var header = document.querySelector('.header-mobile');
	var icon = document.querySelector('.icon-container');
	icon.onclick = function () {
		header.classList.toggle('menu-open');
	}
}());
