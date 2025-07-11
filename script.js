const shareIcons = document.querySelectorAll("button.share-icon-container");
const shareOptions = document.querySelector(".sharing-modal");

function toggleShareOptions() {
  shareOptions.classList.toggle("hide");
}

shareIcons.forEach((element) => {
  element.addEventListener("click", toggleShareOptions);
});
