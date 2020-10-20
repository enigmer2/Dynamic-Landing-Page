const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");
const textLinkDataStorage = {
        night:{
          link:"url('img/4.jpg')",
          text: "Доброй ночи",
          textColor: "white",
        },
        monning:{
          link:"url('img/1.jpg')",
          text: "Доброе утро",
          textColor: "white",
        },
        day:{
          link:"url('img/2.jpg')",
          text: "Добрый день",
          textColor: "white",
        },
        evening:{
          link:"url('img/3.jpg')",
          text: "Добрый вечер",
          textColor: "white",
        }
      };

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
  if (hour > 20 || 0 < hour < 8) {
    // ночь
    whatTimeIs(textLinkDataStorage.night);
  } else if (8 < hour < 12) {
    //утро
    whatTimeIs(textLinkDataStorage.monning);
  } else if (12 < hour < 17) {
    // полдень
    whatTimeIs(textLinkDataStorage.day);
  } else if (17 < hour < 20) {
    // вечер
    whatTimeIs(textLinkDataStorage.evening);
  }
}
//принимает обьект и парсит его для функции setBgAndTitle
function whatTimeIs(obj) {
  document.body.style.backgroundImage = obj.link;
  greeting.textContent = obj.text;
  document.body.style.color = obj.textColor;
  document.body.style.textShadow = "0 0 20px #000";
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