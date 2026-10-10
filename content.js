
const imageUrl = chrome.runtime.getURL("scroll-ends.png");

const style = document.createElement("style");
style.textContent = `
  .x9f619.x1hx0egp.x1yrsyyn.xodvfiu.xct3hqd.xwib8y2::before,
  .x9f619.x1hx0egp.x1yrsyyn.xodvfiu.xct3hqd.xwib8y2::after {
    background-image: url("${imageUrl}") !important;
  }
`;
document.documentElement.appendChild(style);