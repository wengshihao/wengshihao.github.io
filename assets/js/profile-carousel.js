(function () {
  "use strict";

  var carousels = document.querySelectorAll("[data-profile-carousel]");

  Array.prototype.forEach.call(carousels, function (carousel) {
    if (carousel.getAttribute("data-profile-ready") === "true") return;

    var slides = carousel.querySelectorAll("[data-profile-slide]");
    var dots = carousel.querySelectorAll("[data-profile-dot]");
    var previous = carousel.querySelector("[data-profile-prev]");
    var next = carousel.querySelector("[data-profile-next]");
    var toggle = carousel.querySelector("[data-profile-toggle]");
    var status = carousel.querySelector("[data-profile-status]");
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    var activeIndex = 0;
    var timer = null;
    var paused = true;
    var pointerStartX = null;

    if (slides.length < 2) return;
    carousel.setAttribute("data-profile-ready", "true");

    function showPhoto(index, announce) {
      activeIndex = (index + slides.length) % slides.length;

      Array.prototype.forEach.call(slides, function (slide, slideIndex) {
        var isActive = slideIndex === activeIndex;
        slide.classList.toggle("is-active", isActive);
        slide.setAttribute("aria-hidden", isActive ? "false" : "true");
      });

      Array.prototype.forEach.call(dots, function (dot, dotIndex) {
        dot.setAttribute("aria-current", dotIndex === activeIndex ? "true" : "false");
      });

      if (announce && status) {
        status.textContent = "Photo " + (activeIndex + 1) + " of " + slides.length;
      }
    }

    function stopRotation() {
      window.clearInterval(timer);
      timer = null;
    }

    function startRotation() {
      stopRotation();
      if (paused || reducedMotion.matches || document.hidden) return;
      timer = window.setInterval(function () {
        showPhoto(activeIndex + 1, false);
      }, 6500);
    }

    function move(step) {
      showPhoto(activeIndex + step, true);
      startRotation();
    }

    previous.addEventListener("click", function () { move(-1); });
    next.addEventListener("click", function () { move(1); });

    Array.prototype.forEach.call(dots, function (dot, dotIndex) {
      dot.addEventListener("click", function () {
        showPhoto(dotIndex, true);
        startRotation();
      });
    });

    toggle.addEventListener("click", function () {
      paused = !paused;
      toggle.setAttribute("aria-pressed", paused ? "true" : "false");
      toggle.setAttribute("aria-label", paused ? "Start photo rotation" : "Pause photo rotation");
      if (paused) stopRotation();
      else startRotation();
    });

    carousel.addEventListener("mouseenter", stopRotation);
    carousel.addEventListener("mouseleave", startRotation);
    carousel.addEventListener("focusin", stopRotation);
    carousel.addEventListener("focusout", function (event) {
      if (!carousel.contains(event.relatedTarget)) startRotation();
    });

    carousel.addEventListener("keydown", function (event) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
    });

    carousel.addEventListener("pointerdown", function (event) {
      if (event.pointerType === "mouse" || event.target.closest("button")) return;
      pointerStartX = event.clientX;
    });

    carousel.addEventListener("pointerup", function (event) {
      if (pointerStartX === null) return;
      var distance = event.clientX - pointerStartX;
      pointerStartX = null;
      if (Math.abs(distance) > 35) move(distance > 0 ? -1 : 1);
    });

    carousel.addEventListener("pointercancel", function () { pointerStartX = null; });
    document.addEventListener("visibilitychange", startRotation);

    if (paused) {
      toggle.setAttribute("aria-pressed", "true");
      toggle.setAttribute("aria-label", "Start photo rotation");
    }

    startRotation();
  });
})();
