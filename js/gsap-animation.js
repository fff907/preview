window.onload = function () {
  const loadingScreen = document.querySelector(".loading");


  loadingScreen.style.display = "flex";
  loadingScreen.style.opacity = "1";

  const tl = gsap.timeline();

  tl.to(".loading-bar", {
    width: "100%",
    duration: 1.5,
    ease: "power2.inOut"
  })
  .to(".loading-text", {
    opacity: 0,
    y: -20,
    duration: 0.5
  }, "-=0.5")
  .to(".loading", {
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut"
  })
  .add(() => {
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 300);
  });
};