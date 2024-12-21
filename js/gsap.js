const text = document.querySelector("h1");

// GSAP animation sequence
gsap
  .timeline()
  .to(text, { duration: 1, opacity: 1, y: -20, ease: "power2.out" }) // Fade-in and move up
  .to(text, { duration: 0.5, scale: 1.2, ease: "bounce.out" }) // Scale up
  .to(text, { duration: 0.5, rotation: 360, ease: "power4.inOut" }); // Spin the text
