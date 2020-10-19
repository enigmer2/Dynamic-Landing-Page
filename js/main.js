const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

//функция показывает время 
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    // вывод времени 
    time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;
    // вызываем каждую секунду меняй 
    setTimeout(showTime, 1000);
}
//функция добовления нуля во времени
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// изменение background и текста прветствия
function setBgname() {
    let today = new Date();
    let hour = today.getHours();
    
    if (hour < 12) {
        //утро
        document.body.style.backgroundImage = "url('../img/1.jpg')";
        greeting.textContent = "Доброе утро";
    } else if(hour < 17){
        // полдень
        document.body.style.backgroundImage = "url('../img/2.jpg')";
        greeting.textContent = "Добрый день";
        document.body.style.color = 'white'; 
        document.body.style.textShadow = '0 0 20px #000';      
    } else if(hour < 20){
            // вечер
            document.body.style.backgroundImage = "url('../img/3.jpg')";
            greeting.textContent = "Добрый вечер";
            document.body.style.color = 'white';
            document.body.style.textShadow = '0 0 20px #000';
    } else {
        // ночь
        document.body.style.backgroundImage = "url('../img/4.jpg')";
        greeting.textContent = "Доброй ночи";
        document.body.style.color = 'white';
        
    }

}

// изменение локальногог хранилища имени
function getName () {
    if(localStorage.getItem('name') === null){
        name.textContent = '[enter your name]';
    } else {
        name.textContent = localStorage.getItem('name'); 
    }

}
//записать имя в локальное хранилище
function setName(e){
    if (e.type === 'keypress') {
        if(e.witch == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}
//записать задачу в локальное хранилище
function setFocus(e){
    if (e.type === 'keypress') {
        if(e.witch == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText);
    }
}

// изменение локальногог хранилища задачи
function getFocus () {
    if(localStorage.getItem('focus') === null){
        focus.textContent = '[enter your focus]';
    } else {
        focus.textContent = localStorage.getItem('focus'); 
    }

}
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

setBgname();
showTime();
getName();
getFocus();