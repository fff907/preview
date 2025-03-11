document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  // ローディング要素の取得
  const loadingElement = document.querySelector(".loading");
  const coverVideoElement = document.querySelector(".cover-video");

  if (loadingElement) {
    tl.to(loadingElement, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: function () {
        loadingElement.style.display = "none"; // ローディング画面を完全に消す
      }
    });
  }

  if (coverVideoElement) {
    tl.to(coverVideoElement, {
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut"
    }, "-=0.2"); // ローディングが消える直前から少し早めに表示開始
  }
});