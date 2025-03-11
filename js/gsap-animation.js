document.addEventListener("DOMContentLoaded", function () {
  gsap.set(".loading", { opacity: 1, display: "block" }); // ローディングの初期状態を強制セット

  const tl = gsap.timeline();

  tl.to(".loading", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    onComplete: function () {
      document.querySelector(".loading").style.display = "none"; // ローディング画面を消す
    }
  });
});
