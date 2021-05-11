var clock = document.getElementById("myClock");
var days = [
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

function askName() {
  var name = prompt("Adınız nedir?");
  document.getElementById("myName").innerText = name;
}

function date() {
  let dateTime = new Date();
  let hour = dateTime.getHours();
  let minute = dateTime.getMinutes();
  let second = dateTime.getSeconds();
  let day = dateTime.getDay();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;
  
  let output = hour + ":" + minute + ":" + second + " " + days[day];
  clock.innerHTML = output;

  setTimeout(date, 1000);
}

date();
askName();
