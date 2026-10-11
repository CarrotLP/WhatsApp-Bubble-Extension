// Dynamically inject extension resource URLs as CSS variables
(function () {
  const setScrollVars = () => {
    const root = document.documentElement;
    if (root) {
      root.style.setProperty(
        "--whatsapp-scroll-outgoing",
        `url("${chrome.runtime.getURL("scroll-ends.png")}")`
      );
      root.style.setProperty(
        "--whatsapp-scroll-incoming",
        `url("${chrome.runtime.getURL("incoming-scroll.png")}")`
      );
    }
  };

  if (document.documentElement) {
    setScrollVars();
  } else {
    document.addEventListener("DOMContentLoaded", setScrollVars, { once: true });
  }
})();