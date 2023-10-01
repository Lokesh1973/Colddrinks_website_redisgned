var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "70% 50%",
    scrub: true,
    // markers: true,
  },
});

tl.to(
  "#fanta",
  {
    top: "120%",
    left: "0%",
  },
  "orange"
);
tl.to(
  "#orange-cut",
  {
    top: "160%",
    left: "23%",
  },
  "orange"
);
tl.to(
  "#orange",
  {
    width: "15%",
    top: "160%",
    right: "10%",
  },
  "orange"
);
tl.to(
  "#leaf",
  {
    top: "110%",
    rotate: "130deg",
    left: "70%",
  },
  "orange"
);
tl.to(
  "#leaf2",
  {
    top: "110%",
    rotate: "130deg",
    left: "0%",
  },
  "orange"
);

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "20% 50%",
    scrub: true,
    // markers: true,
  },
});

tl2.from(
  ".lemon1",
  {
    rotate: "-90deg",
    left: "-100%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  "#cocacola",
  {
    rotate: "-90deg",
    top: "110%",
    left: "-100%",
  },
  "ca"
);

tl2.from(
  ".lemon2",
  {
    rotate: "90deg",
    left: "100%",
    top: "110%",
  },
  "ca"
);
tl2.from(
  "#pepsi",
  {
    rotate: "90deg",
    top: "110%",
    left: "100%",
  },
  "ca"
);

tl2.to(
  "#orange-cut",
  {
    width: "18%",
    left: "42%",
    top: "204%",
  },
  "ca"
);
tl2.to(
  "#fanta",
  {
    width: "35%",
    top: "210%",
    left: "33%",
  },
  "ca"
);

var circle = document.querySelector("#circle");
var nav = document.querySelector(".cntr-nav");

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

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#main",
    start: "50% 50%",
    end: "100% 50%",
    scrub: 2,
    pin: true,
  },
});

tl.to(
  "#top",
  {
    top: "-50%",
  },
  "a"
)
  .to(
    "#bottom",
    {
      bottom: "-50%",
    },
    "a"
  )
  .to(
    "#top-h",
    {
      top: "60%",
    },
    "a"
  )
  .to(
    "#bottom-h1",
    {
      bottom: "-30%",
    },
    "a"
  )
  .to(
    ".content",
    {
      marginTop: "0%",
    },
    "a"
  );

var newtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 99%",
    end: "100% 60%",
    scrub: 1,
    duration: 1,
    // markers: true,
  },
});

newtl.to(".two", {
  backgroundColor: "#251310",
});
var newnewtl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "100% 60%",
    end: "5% 60%",
    scrub: 1,
    duration: 1,
    markers: true,
  },
});
newnewtl.to(".three", {
  backgroundColor: "#FF5E00",
});
