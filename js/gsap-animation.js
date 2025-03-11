document.addEventListener("DOMContentLoaded", function () {
  const loading = document.querySelector(".loading");

  loading.style.display = "block";
  loading.style.opacity = "1";

  const tl = gsap.timeline();

  tl.to(".loading", {
    opacity: 0,
    duration: 1,
    ease: "power2.inOut",
    onComplete: function () {
      loading.style.display = "none";
    }
  });
});
