document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  // ローディングをフェードアウト
  tl.to(".loading", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    onComplete: function () {
      document.querySelector(".loading").style.display = "none"; // ローディング画面を完全に消す
    }
  })

  // メインビジュアルを最後にフェードイン
  .to(".cover-video", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.inOut"
  }, "-=0.2"); // オーバーレイが消える直前から少し早めに表示開始
});