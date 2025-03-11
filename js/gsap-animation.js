window.addEventListener("load", function () {
  const loading = document.querySelector(".loading");
  const loadingBar = document.querySelector(".loading-bar");
  const loadingText = document.querySelector(".loading-text");
  const cover = document.querySelector(".cover");
  const coverVideo = document.querySelector(".cover-video");

  // Loadingバーを「Loading...」のテキスト幅に合わせる
  const textWidth = loadingText.offsetWidth + "px";

  const tl = gsap.timeline();

  // PC版の場合、ローディング開始時点で背景画像を消す
  if (window.innerWidth >= 1100) {
    cover.style.backgroundImage = "none";
  }

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

  // PC版のみ動画をフェードイン（SPでは何もしない）
  .to(coverVideo, {
    opacity: 1,
    duration: 1,
    ease: "power2.inOut",
    onComplete: function () {
      if (window.innerWidth >= 1100) {
        cover.style.backgroundImage = "none"; // PC版のみに適用
      }
    }
  }, "-=0.5");

  // ** SP → PC → SP で背景画像が消える問題の修正**
  window.addEventListener("resize", function () {
    if (window.innerWidth < 1100) {
      cover.style.backgroundImage = "url('../images/cover_bg.png')"; // SPで静止画を再適用
    } else {
      cover.style.backgroundImage = "none"; // PCは背景なし
    }
  });
});