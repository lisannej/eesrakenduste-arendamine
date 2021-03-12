let guestName = prompt('Palun sisesta nimi.');

function updateClock(){
  var today = new Date();
  var hr = today.getHours(); 
  var min = today.getMinutes(); 
  var sec = today.getSeconds(); 
  var greetings = "";
    if (hr < 12){
      greetings = "Good Morning ";
    } else if (12<= hr < 18) {
      greetings = "Good Afternoon ";
    } else {
      greetings = "Good Evening ";
    }
    document.getElementById("greeting").innerHTML = greetings +", " + guestName + " !";
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
  
  function ChangeColor(){  
    if (document.getElementById('bgbutton').style.backgroundColor == 'Black'){
      document.getElementById('bgbutton').style.backgroundColor = 'White';
    } else {
      document.getElementById('bgbutton').style.backgroundColor = 'Black';

    }
  }