

function updateClock(){
  var today = new Date();
  var hr = today.getHours(); 
  var min = today.getMinutes(); 
  var sec = today.getSeconds(); 
  var greetings = "";
    if (hr < 12){
      greetings = "Good Morning! ";
    } else if (12<= hr < 18) {
      greetings = "Good Afternoon! ";
    } else {
      greetings = "Good Evening! ";
    }
    document.getElementById("greeting").innerHTML = greetings ;
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById("Clock").innerHTML = hr + " : " + min + " : " + sec;

  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var curWeekDay = days[today.getDay()];
    var curDay = today.getDate();
    var curMonth = months[today.getMonth()];
    var curYear = today.getFullYear();
    var date = curWeekDay+", "+curDay+" "+curMonth+" "+curYear;
    document.getElementById("date").innerHTML = date;
    
    var time = setTimeout(function(){ updateClock() }, 500);
}

function checkTime(i) {
  if (i < 10) {
      i = "0" + i;
  }
  return i;
}

  updateClock();

  const button = document.querySelector('bgbutton')
  const body = document.querySelector('body')
  const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
  
  body.style.backgroundColor = 'violet'
  button.addEventListener('click', changeBackground)
  
  function changeBackground(){
  const colorIndex= parseInt(Math.random()*colors.length)
  body.style.backgroundColor = colors[colorIndex]
  }