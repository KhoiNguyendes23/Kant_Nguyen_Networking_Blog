(() => {
  const els = document.querySelectorAll(
    ".post-entry,.archive-entry,article,.k-card,.hero"
  );
  const io = new IntersectionObserver(
    (es) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          e.target.style.opacity = 1;
          e.target.style.transform = "translateY(0)";
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  els.forEach((el) => {
    el.style.opacity = 0;
    el.style.transform = "translateY(10px)";
    el.style.transition = "all .45s ease";
    io.observe(el);
  });
})();
