document.addEventListener("DOMContentLoaded", function () {
  const loadingScreen = document.querySelector(".loading");
  
  // 読み込みのたびに強制的に表示
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
  }, "-=0.5") // ローディングバーが終わる直前にテキストをフェードアウト
  .to(".loading", {
    opacity: 0,
    duration: 0.5,
    ease: "power2.inOut",
    onComplete: function () {
      document.querySelector(".loading").style.display = "none";
    }
  });
});