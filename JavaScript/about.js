document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".about-content, .image img, .skills h2, .card");

  elements.forEach((el, i) => {
    const range = el.tagName === "IMG" ? 40 : 100; // image moves even less now
    const x = (Math.random() * range - range / 2).toFixed(1);
    const y = (Math.random() * range - range / 2).toFixed(1);
    const r = (Math.random() * 15 - 7.5).toFixed(1);

    el.style.setProperty("--x", `${x}px`);
    el.style.setProperty("--y", `${y}px`);
    el.style.setProperty("--r", `${r}deg`);
    el.style.animationDelay = `${i * 0.15}s`;
    el.classList.add("scatter");
  });
});

// page outro transition
document.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", e => {
    const href = link.getAttribute("href");

    // only burst if it's an internal link
    if (href && !href.startsWith("http")) {
      e.preventDefault();
      document.body.classList.add("burst-out");
      setTimeout(() => {
        window.location.href = href;
      }, 800); // matches CSS duration
    }
  });
});

