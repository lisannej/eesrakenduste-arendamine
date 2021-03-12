function updateClock(){
  var today = new Date();
  var hr = date.getHours(); 
  var min = date.getMinutes(); 
  var sec = date.getSeconds(); 

  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("Clock").innerHTML = hr + " : " + min + " : " + sec;
  var time = setTimeout(function(){ startTime() }, 500);
}
function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
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