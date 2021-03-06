let fname, lname, email, saveLocal, loadLocal, deleteLocal, dataContainer;

window.onload = function(){
    console.log("Leht on laetud")
    init();
}

function init(){
    fname = document.querySelector('#fname');
    lname = document.querySelector('#lname');
    email = document.querySelector('#email');
    saveLocal = document.querySelector('#saveLocal');
    loadLocal = document.querySelector('#loadLocal');
    deleteLocal = document.querySelector('#deleteLocal');
    dataContainer = document.querySelector('#dataContainer');

    saveLocal.addEventListener('click', localSave);
    loadLocal.addEventListener('click', localLoad);
    deleteLocal.addEventListener('click',localDelete);
}

function localSave(){
    console.log('save');
    let error = false;
    if(fname.value.length < 2){
        error = true;
        fname.style.borderColor = 'red';
    }else{
        fname.style.borderColor = 'grey';
    }
    if(lname.value.length < 2){
        error = true;
        lname.style.borderColor = 'red';
    }else{
        lname.style.borderColor = 'grey';
    }

    if(email.value.length < 2){
        error = true;
        email.style.borderColor = 'red';
    }else{
        email.style.borderColor = 'grey';
    }
        if(!error){
        let data = {
            firstname: fname.value,
            lastname: lname.value,
            email: email.value
        }
    }
        console.log(data);
    
    localStorage.setItem('personData', JSON.stringify( data));
    }


function localLoad(){
    console.log('load');
    const localData = JSON.parse(localStorage.getItem('personData'));
    dataContainer.innerHTML = 'Eesnimi: ' + localData.firstname + '<br> Perekonnanimi:' + localData.lastname + '<br> E-mail:' + localData.email;
}

function localDelete(){
    console.log('delete');
    localStorage.removeItem('personData');
}