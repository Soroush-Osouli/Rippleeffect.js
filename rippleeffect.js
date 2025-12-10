// rippleeffect.js
// Simple ripple effect library. Usage:
// <script src="rippleeffect.js"></script>
// Add class="ripple-white" or class="ripple-black" to any element.

(function () {
  function createRipple(event, color) {
    const target = event.currentTarget;

    // Create ripple element
    const ripple = document.createElement("span");
    ripple.classList.add("ripple-effect");
    ripple.style.background = color;

    const rect = target.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    target.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  }

  function initRipple(selector, color) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.style.position = "relative";
      el.style.overflow = "hidden";
      el.addEventListener("click", (e) => createRipple(e, color));
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initRipple(".ripple-white", "rgba(255,255,255,0.4)");
    initRipple(".ripple-black", "rgba(0,0,0,0.3)");
  });
})();

// Ripple effect CSS injection
(function () {
  const style = document.createElement("style");
  style.textContent = `
    .ripple-effect {
      position: absolute;
      border-radius: 50%;
      transform: scale(0);
      animation: ripple-animation 600ms ease-out;
      pointer-events: none;
      opacity: 0.75;
    }

    @keyframes ripple-animation {
      to {
        transform: scale(3);
        opacity: 0;
      }
    }
  `;
  document.head.appendChild(style);
})();
