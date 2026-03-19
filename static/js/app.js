document.addEventListener("DOMContentLoaded", function () {
  // Scroll blur for header
  const header = document.getElementById("whyelixir-header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        header.classList.add("blur-header");
      } else {
        header.classList.remove("blur-header");
      }
    });
  }

  // Horizontal scroll with drag + bullet dots
  const scrollable = document.getElementById("scrollable-cards");
  if (scrollable) {
    const container = scrollable.querySelector("#cards-container");
    const bulletsContainer = scrollable.querySelector("#bullets-container");
    if (container && bulletsContainer) {
      const bullets = bulletsContainer.children;

      let isDown = false;
      let startX;
      let scrollLeft;

      container.addEventListener("mousedown", (e) => {
        isDown = true;
        container.classList.add("cursor-grabbing");
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
      });
      container.addEventListener("mouseleave", () => {
        isDown = false;
        container.classList.remove("cursor-grabbing");
      });
      container.addEventListener("mouseup", () => {
        isDown = false;
        container.classList.remove("cursor-grabbing");
      });
      container.addEventListener("mousemove", (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = (x - startX) * 3;
        container.scrollLeft = scrollLeft - walk;
      });
      container.addEventListener("scroll", () => {
        const cardWidth = container.children[0].offsetWidth;
        const scrollPosition = container.scrollLeft + cardWidth / 2;
        const currentIndex = Math.floor(scrollPosition / cardWidth);
        Array.from(bullets).forEach((bullet, index) => {
          if (index === currentIndex) {
            bullet.classList.add("bg-white");
            bullet.classList.remove("bg-transparent");
          } else {
            bullet.classList.add("bg-transparent");
            bullet.classList.remove("bg-white");
          }
        });
      });
      Array.from(bullets).forEach((bullet, index) => {
        bullet.addEventListener("click", () => {
          const cardWidth = container.children[0].offsetWidth;
          container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
        });
      });
    }
  }
});

document.getElementById("copyright-year").textContent =
  new Date().getFullYear();
