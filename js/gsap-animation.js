document.addEventListener("DOMContentLoaded", function () {
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

  // 読み込みが終わらない場合の対策
  setTimeout(() => {
    document.body.style.opacity = "1";
    document.querySelector(".cover-black").style.display = "none";
    document.querySelector(".cover-white").style.display = "none";
  }, 5000); // 5秒経っても動作しない場合、強制的にフェードイン
});
