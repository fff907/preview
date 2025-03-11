document.addEventListener("DOMContentLoaded", function () {
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
  }, "-=0.5") // ローディングバーが終わる直前にテキストをフェードアウト
  .to(".loading", {
    opacity: 0,
    duration: 0.8, // 少し長めにフェードアウト
    ease: "power2.inOut"
  })
  .add(() => {
    // **アニメーションが完全に終わるまで display: none にしない**
    setTimeout(() => {
      loadingScreen.style.display = "none";
    }, 300); // 少し遅延を入れる（0.3秒）
  });
});