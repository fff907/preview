document.addEventListener("DOMContentLoaded", function () {
    // GSAPを使ってオーバーレイを5秒後にフェードアウト
    gsap.to(".cover-overlay", {
        opacity: 0, // 徐々に透明になる
        duration: 2, // 2秒かけてフェードアウト
        delay: 5, // 5秒後に開始
        ease: "power2.out"
    });
  
  });