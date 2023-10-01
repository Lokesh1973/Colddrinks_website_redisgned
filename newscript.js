var circle = document.querySelector("#circle");
var nav = document.querySelector("#nav-prt2");
var elem = document.querySelector("#elem2");
window.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.3,
    ease: Expo,
  });
});

nav.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    scale: 4,
  });
});
nav.addEventListener("mouseleave", function (dets) {
  gsap.to(circle, {
    scale: 1,
  });
});

elem2.addEventListener("mousemove", function (dets) {
  gsap.to(circle, {
    scale: 6,
    opacity: 0.5,
  });
});
elem2.addEventListener("mouseleave", function (dets) {
  gsap.to(circle, {
    scale: 1,
    opacity: 1,
  });
});
