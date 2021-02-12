const first = document.getElementById('first');

let massiiv = ['esimene', 'teine', 'kolmas'];
let numbers = [1, 2, 3, 4, 5, 6];

numbers.sort(function(a,b) {return a-b});

massiiv.sort();
massiiv.reverse();

//window.alert(massiiv[0]);

for(let i =0; i< massiiv.length, i++){
    console.log(massiiv[i]); 
}

massiiv.forEach(function(item){
    console.log(item);
    let text = '<li>'+ item + '</li>';
    first.innerHTML = first.innerHTML + text;
});