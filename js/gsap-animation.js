window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const loadingBar = document.querySelector(".loading-bar");
  const loadingText = document.querySelector(".loading-text");
  const cover = document.querySelector(".cover");
  const coverVideo = document.querySelector(".cover-video");

  // Loadingバーを「Loading...」のテキスト幅に合わせる
  const textWidth = loadingText.offsetWidth + "px"; 

  const tl = gsap.timeline();

  // 緑のバーをLoading...の文字幅に合わせて伸ばす
  tl.to(loadingBar, {
    width: textWidth,
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

  // PC版でローディング時に静止画を非表示にする
  .add(() => {
    if (window.innerWidth >= 1100) {
      cover.style.backgroundImage = "none";
    }
  })

  // メインビジュアル（動画）をフェードイン
  .to(coverVideo, {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut"
  }, "-=0.5");
});