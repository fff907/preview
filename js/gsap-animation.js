window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const loadingBar = document.querySelector(".loading-bar");

  // ローディングを確実に表示
  loading.style.opacity = "1";

  const tl = gsap.timeline();

  // 緑のバーのアニメーション（最初は100%になる）
  tl.to(".loading-bar", {
    width: "100%", 
    duration: 1,
    ease: "power2.inOut"
  })

  // 少しだけローディングを表示する
  .to(".loading", {
    opacity: 1,
    duration: 0.5, // 0.5秒だけ完全に表示
  })

  // ローディングをフェードアウト
  .to(".loading", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    delay: 0.5, // 0.5秒の待機時間を入れる（合計1秒表示）
    onComplete: function () {
      loading.style.display = "none"; // ローディングを完全に消す
    }
  });
});