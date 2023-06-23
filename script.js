const main = document.querySelector("main");
const body = document.querySelector("body");
const footer = document.querySelector("footer");
const bottom = document.querySelector(".bottom");
const open = document.querySelector("#menu");
const logo = document.querySelector("#logo");
const close = document.querySelector("#menuClose");
const img = document.querySelector("#imgMobile");
const nav = document.querySelector(".nav");

const none = (display) => {
  display.style.display = "none";
};
const block = (display) => {
  display.style.display = "flex";
};
const style = (display) => {
  display.style.gap = "25px";
  display.style.opacity = "1";
  display.style.alignItems = "start";
  display.style.margin = "30px 0 0 95px";
  display.style.flexDirection = "column";
  display.style.fontSize = "15px";
  display.style.background = "#fff";
  display.style.zIndex = "2";
  display.style.height = "1830px";
  display.style.width = "220px";
  display.style.paddingLeft = "20px";
};
const opacityLow = (display) => {
  display.style.opacity = "0.3";
};
const opacityHigh = (display) => {
  display.style.opacity = "1";
};
const styleClose = (display) => {
  display.style.background = "#fff";
  display.style.zIndex = "2";
  display.style.padding = "40px 75px 40px 135px";
};

open.addEventListener("click", () => {
  block(close);
  block(nav);
  none(open);
  style(nav);
  styleClose(close);
  opacityLow(bottom);
  opacityLow(main);
  opacityLow(footer);
  opacityLow(logo);
  main.style.marginTop = "-1812px";
  body.style.background = "hsl(236, 13%, 42%,0.8)";
});
close.addEventListener("click", () => {
  none(nav);
  none(close);
  block(open);
  opacityHigh(bottom);
  opacityHigh(main);
  opacityHigh(footer);
  opacityHigh(logo);
  main.style.marginTop = "40px";
  body.style.background = "#fff";
});
