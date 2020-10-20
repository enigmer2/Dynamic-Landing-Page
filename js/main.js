const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//функция показывает время
function showTime() {
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  // вывод времени
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;
  setBgAndTitle(hour);
  // вызываем каждую секунду меняй
  setTimeout(showTime, 1000);
}
//функция добовления нуля во времени
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// изменение background и текста прветствия
function setBgAndTitle(hour) {
  if (hour < 8) {
    // ночь
    document.body.style.backgroundImage = "url('img/4.jpg')";
    greeting.textContent = "Доброй ночи";
    document.body.style.color = "white";
  } else if (hour < 12) {
    //утро
    document.body.style.backgroundImage = "url('img/1.jpg')";
    greeting.textContent = "Доброе утро";
  } else if (hour < 17) {
    // полдень
    document.body.style.backgroundImage = "url('img/2.jpg')";
    greeting.textContent = "Добрый день";
    document.body.style.color = "white";
    document.body.style.textShadow = "0 0 20px #000";
  } else if (hour < 20) {
    // вечер
    document.body.style.backgroundImage = "url('img/3.jpg')";
    greeting.textContent = "Добрый вечер";
    document.body.style.color = "white";
    document.body.style.textShadow = "0 0 20px #000";
  }
}

// изменение локальногог хранилища имени
function setValueFromLocalStorage(localStorageId, element) {
  if (localStorage.getItem(localStorageId) === null) {
    element.textContent = `[Введите ${localStorageId}]`;
  } else {
    element.textContent = localStorage.getItem(localStorageId);
  }
}

//записать имя в локальное хранилище
function setValueToLocalStorage(e, localStorageId) {
  if (e.type === "keypress") {
    if (e.witch == 13 || e.keyCode == 13) {
      localStorage.setItem(localStorageId, e.target.textContent);
      e.target.blur();
    }
  } else {
    localStorage.setItem(localStorageId, e.target.textContent);
  }
}

name.addEventListener("keypress", (e) => setValueToLocalStorage(e, "name"));
name.addEventListener("blur", (e) => setValueToLocalStorage(e, "name"));
focus.addEventListener("keypress", (e) => setValueToLocalStorage(e, "focus"));
focus.addEventListener("blur", (e) => setValueToLocalStorage(e, "focus"));

showTime();
setValueFromLocalStorage("name", name);
setValueFromLocalStorage("focus", focus);