document.addEventListener("DOMContentLoaded", function () {
  const loading = document.querySelector(".loading");

  // ローディングを確実に表示
  loading.style.display = "block";
  loading.style.opacity = "1";

  const tl = gsap.timeline();

  // ローディングをフェードアウト
  tl.to(".loading", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    onComplete: function () {
      loading.style.display = "none"; // ローディングを完全に消す
    }
  });
});
