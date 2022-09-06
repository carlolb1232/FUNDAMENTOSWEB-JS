console.log("page loaded...");

function playMuted(element) {
  console.log(element)
  element.autoplay = true;
  element.play();
  element.muted = true;
}
function stop(element) {
  element.pause();
  element.muted = false;
}