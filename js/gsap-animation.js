document.addEventListener("DOMContentLoaded", function () {
  gsap.to(".cover-black", {
    y: "-100%",
    duration: 1.2,
    ease: "power2.out",
  })
  .to(".cover-white", {
    y: "-100%",
    duration: 1.2,
    ease: "power2.out",
  }, "-=0.8") 
  .set(".cover-black, .cover-white", { display: "none" })
  .to("body", {
    opacity: 1,
    duration: 1.2,
    ease: "power2.out",
  });

  setTimeout(() => {
    document.body.style.opacity = "1";
    document.querySelector(".cover-black").style.display = "none";
    document.querySelector(".cover-white").style.display = "none";
  }, 5000);
});
