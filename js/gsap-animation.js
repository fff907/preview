document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  tl.to(".loading", {
    opacity: 0,
    duration: 1.2,
    ease: "power2.out",
  })
  .set(".loading", { display: "none" }) // ローディングを非表示
  .to(".color-overlay", {
    opacity: 1,
    duration: 0.5, // オーバーレイを素早く表示
    ease: "power2.out",
  })
  .to(".color-overlay", {
    opacity: 0,
    duration: 1.5, // 徐々にフェードアウト
    ease: "power2.out",
  }, "+=0.5") // 0.5秒待ってからオーバーレイを消す
  .to(".cover-video", {
    opacity: 1,
    duration: 2, // メインビジュアルをフェードイン
    ease: "power2.out",
  }, "-=1.2"); // オーバーレイが消え始めたと同時にフェードイン
});
