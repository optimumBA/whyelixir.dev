if (window.location.protocol === "https:" && window.location.hostname === "whyelixir.dev") {
  window.plausible = window.plausible || function () {
    (window.plausible.q = window.plausible.q || []).push(arguments);
  };
  window.plausible.init = window.plausible.init || function (options) {
    window.plausible.o = options || {};
  };
  window.plausible.init();

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://plausible.io/js/pa-S9p2WWRv2jUSBZXdVAHrR.js";
  document.head.appendChild(script);
}
