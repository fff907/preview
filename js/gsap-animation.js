document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  // ローディングバーを伸ばす
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