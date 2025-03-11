document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  
  // オーバーレイをスライドアップ
  tl.to(".cover-overlay", {
    top: 0,
    duration: 1.5,
    ease: "power2.inOut"
  }, "-=0.5") // ★ ローディングが消える直前から少し早めにスタート
  
  // オーバーレイをフェードアウト
  .to(".cover-overlay", {
    opacity: 0,
    duration: 0.5,
    onComplete: function () {
      document.querySelector(".cover-overlay").style.display = "none"; // オーバーレイを完全に消す
    }
  })

  // メインビジュアルを最後にフェードイン
  .to(".cover-video", {
    opacity: 1,
    duration: 1.5,
    ease: "power2.inOut"
  }, "-=0.2"); // ★ オーバーレイが消える直前から少し早めに表示開始
});
