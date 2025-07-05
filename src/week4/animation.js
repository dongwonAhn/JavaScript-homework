gsap
  .timeline()
  .from(".caption", {
    opacity: 0,
    y: -20,
    duration: 1,
  })
  .from(
    ".headline",
    {
      opacity: 0,
      y: 40,
      duration: 1,
    },
    "-=0.6"
  )
  .from(
    ".description",
    {
      opacity: 0,
      y: 30,
      duration: 1,
    },
    "-=0.6"
  )
  .from(
    ".buttons .btn",
    {
      opacity: 0,
      y: 20,
      duration: 1,
      stagger: 0.2,
    },
    "-=0.6"
  );

gsap.from(".shape", {
  opacity: 0,
  scale: 0.5,
  duration: 1,
  delay: 1.2,
  ease: "back.out(1.7)",
  stagger: 0.05,
});

gsap.from(".photo", {
  opacity: 0,
  scale: 0.8,
  rotation: -5,
  duration: 1,
  delay: 2,
  ease: "back.out(1.7)",
});

document.querySelectorAll(".line").forEach((line, index) => {
  gsap.from(line, {
    opacity: 0,
    y: -30,
    rotation: 15,
    duration: 1,
    delay: 1.4 + index * 0.1,
    ease: "power2.out",
  });
});

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("mouseenter", () => {
    gsap.to(btn, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out",
    });
  });

  btn.addEventListener("mouseleave", () => {
    gsap.to(btn, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  });
});
