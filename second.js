const first = document.getElementById('first');
const second = document.querySelector('#second');
const listElement = document.querySelectorAll('.list-element');
const button = document.getElementById("button");
let r,g,b;
let massiiv = ['esimene', 'teine', 'kolmas'];
let numbers = [1, 2, 3, 4, 5, 6];
let colors =['green', 'blue', 'pink', 'orange'];
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');


setInterval(updateClock, 1000);


function updateClock(){
    let date = new Date();
    hours.innerHTML = date.getHours();
    minutes.innerHTML = date.getMinutes();
    seconds.innerHTML = date.getSeconds();
}
console.log(date);

button.addEventListener('click', buttonPressed);

first.addEventListener('mousemove', changeColor);

//setInterval(changeColor, 100);
setTimeout(changeColor, 500);

function changeColor(){
    r = Math.round(Math.random()*255);
    g = Math.round(Math.random()*255);
    b = Math.round(Math.random()*255);

    first.style.backgroundColor = 'rgb('+ r + ','+ g + ','+ b +')';
}

let person = {
    firstName: "Lisanne",
    lastName = "Jarv",
    age = 22,
    fullName: function(){
        return this.firstName + " "+ this.lastName;
    }
}

console.log(person.fullName());
//console.log(person['firstName'+ " " + person.lastName])



console.log(listElement);



numbers.sort(function(a,b) {return a-b}); //teistpidi b-a

massiiv.sort();
massiiv.reverse();

//window.alert(massiiv[0]);

for(let i =0; i< massiiv.length; i++){
    console.log(massiiv[i]); 
}

massiiv.forEach(function(item){
    console.log(item);
    let text = '<li>'+ item + '</li>';
    first.innerHTML = first.innerHTML + text;
});

function buttonPressed(){
    for(let i = 0; i < listElement.length; i++){
    listElement[i].style.backgroundcolor = colors[i];
}
}