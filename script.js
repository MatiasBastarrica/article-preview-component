const shareIcons = document.querySelectorAll("button.share-icon-container");
const shareOptions = document.querySelector(".sharing-modal");
const btnDesktopContainer = document.querySelector(".btn-desktop");
const btnDesktop = btnDesktopContainer.querySelector("button");
const svgDesktop = btnDesktop.querySelector("svg");
const pathDesktopSvg = svgDesktop.querySelector("path");

function toggleShareOptions() {
  shareOptions.classList.toggle("hide");
}

shareIcons.forEach((element) => {
  element.addEventListener("click", toggleShareOptions);
});

btnDesktop.addEventListener("click", () => {
  btnDesktop.classList.toggle("btn-desktop-pressed-bg");
  pathDesktopSvg.classList.toggle("btn-desktop-pressed-fill");
});
