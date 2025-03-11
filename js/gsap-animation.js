window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const loadingBar = document.querySelector(".loading-bar");
  const coverVideo = document.querySelector(".cover-video");

  const tl = gsap.timeline();

  // 緑のバーをアニメーション
  tl.to(loadingBar, {
    width: "100%",
    duration: 1,
    ease: "power2.inOut"
  })

  // ローディングを0.5秒間表示
  .to(loading, {
    opacity: 1,
    duration: 0.5
  })

  // ローディングをフェードアウト
  .to(loading, {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    delay: 0.5,
    onComplete: function () {
      loading.style.display = "none"; // ローディングを完全に消す
    }
  })

  // メインビジュアルをフェードイン
  .to(coverVideo, {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  }, "-=0.5"); // ローディングが消える0.5秒前からフェードイン開始
});