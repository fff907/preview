document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("load", function () {
    const tl = gsap.timeline();

    tl.to(".cover-black", {
      y: "-100%",
      duration: 1.2,
      ease: "power2.out",
    })
    .to(".cover-white", {
      y: "-100%",
      duration: 1.2,
      ease: "power2.out",
    }, "-=0.8") // 黒が消えた直後に白も動かす
    .set(".cover-black, .cover-white", { display: "none" }) // 画面外に出たら非表示
    .to("body", {
      opacity: 1,
      duration: 1.2,
      ease: "power2.out",
    });
  });
});
