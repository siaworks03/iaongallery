/* Hide the logo cleanly if the image file is missing. */
(function () {
  "use strict";
  var logo = document.querySelector(".brand-logo");
  if (!logo) return;
  function hide() {
    logo.classList.add("is-missing");
  }
  logo.addEventListener("error", hide);
  if (logo.complete && logo.naturalWidth === 0) hide();
})();
