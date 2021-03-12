var textElem = document.getElementById("clocktext");
var targetWidth = 0.9;  // Proportion of full screen width
var curFontSize = 20;  // Do not change

function updateClock() {
  var d = new Date();
  var s = "";
  s += (10 > d.getHours  () ? "0" : "") + d.getHours  () + ":";
  s += (10 > d.getMinutes() ? "0" : "") + d.getMinutes() + ":";
  s += (10 > d.getSeconds() ? "0" : "") + d.getSeconds();
  textElem.textContent = s;
  setTimeout(updateClock, 1000 - d.getTime() % 1000 + 20);
}

function updateTextSize() {
  for (var i = 0; 3 > i; i++) {  // Iterate for better better convergence
    curFontSize *= targetWidth / (textElem.offsetWidth / textElem.parentNode.offsetWidth);
    textElem.style.fontSize = curFontSize + "pt";
  }
}
  updateClock();
	updateTextSize();
	window.addEventListener("resize", updateTextSize);