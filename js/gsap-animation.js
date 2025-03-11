document.addEventListener("DOMContentLoaded", function () {
  const loading = document.querySelector(".loading");
  const video = document.querySelector(".cover-video");
  loading.style.display = "flex";

  const tl = gsap.timeline();

  if (video) {
    video.addEventListener("loadeddata", function () {
      tl.to(".loading", {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        onComplete: function () {
          loading.style.display = "none";
        }
      });
    });
  } else {
    tl.to(".loading", {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: function () {
        loading.style.display = "none";
      }
    });
  }
});
