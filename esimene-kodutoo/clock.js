function updateClock(){
  var date = new Date();
  var h = date.getHours(); 
  var m = date.getMinutes(); 
  var s = date.getSeconds(); 

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;
  
  var time = h + ":" + m + ":" + s ;
  document.getElementById("Clock").innerText = time;
  document.getElementById("Clock").textContent = time;
  
  setTimeout(updateClock, 1000);
  
}

updateClock();
function updateTextSize() {
  for (var i = 0; 3 > i; i++) {  // Iterate for better better convergence
    curFontSize *= targetWidth / (textElem.offsetWidth / textElem.parentNode.offsetWidth);
    textElem.style.fontSize = curFontSize + "pt";
  }
}
  updateClock();
	updateTextSize();
	window.addEventListener("resize", updateTextSize);