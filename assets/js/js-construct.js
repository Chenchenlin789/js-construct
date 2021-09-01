//lev1_2
let monate = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

let wochenTag = [
  "Sonntag",
  "Montag",
  "Dienstag",
  "Mittwoch",
  "Donnerstag",
  "Freitag",
  "Samstag",
];

const datum = new Date();
document.getElementById("lev1_2").innerHTML = `<p>${datum}</p>`;
document.getElementById(
  "lev1_2"
).innerHTML += `<p>${datum.getFullYear()} Year</p>`;
document.getElementById(
  "lev1_2"
).innerHTML += `<p>${datum.getMonth()} Monat</p>`;
document.getElementById("lev1_2").innerHTML += `<p>${datum.getDate()} Tag</p>`;
document.getElementById(
  "lev1_2"
).innerHTML += `<p>${datum.getHours()} Stunde</p>`;
document.getElementById(
  "lev1_2"
).innerHTML += `<p>${datum.getMinutes()} Minute</p>`;
document.getElementById(
  "lev1_2"
).innerHTML += `<p>${datum.getSeconds()} Sekunde</p>`;
document.getElementById(
  "lev1_2"
).innerHTML += `<p>${datum.getDay()} Millisekunde</p>`;
//Ausgabe von Monat& Tag
document.getElementById("lev1_2").innerHTML += `<p>${
  monate[datum.getMonth()]
} </p>`;
document.getElementById("lev1_2").innerHTML += `<p>${
  wochenTag[datum.getDay()]
}</p>`;

//Lev1_3 SET Date Methods
function myFunction() {
  let a = new Date();
  a.setDate(23);
  a.setMonth(9);
  a.setFullYear(2222);
  let b = new Date();
  b.setDate(24);
  b.setMonth(1);
  b.setFullYear(2123);
  let c = new Date();
  c.setDate(24);
  c.setMonth(2);
  c.setFullYear(2123);
  let d = new Date();
  d.setDate(24);
  d.setMonth(2);
  d.setFullYear(2123);

  let e = new Date();
  e.setDate(e.getDate() + 30);

  document.getElementById("lev1_3").innerHTML += a + "<br>";
  document.getElementById("lev1_3").innerHTML += b + "<br>";
  document.getElementById("lev1_3").innerHTML += c + "<br>";
  document.getElementById("lev1_3").innerHTML += d + "<br>";
  document.getElementById("lev1_3").innerHTML += e + "<br>";
  console.log(e);
}
myFunction();

//Lev1_4 SET Tage In Monat
// let today= new Date();
// let past =

function monthDiff(d1, d2) {
  var months;
  months = (d2.getFullYear() - d1.getFullYear()) * 12;
  months -= d1.getMonth() + 1;
  months += d2.getMonth();
  return months <= 0 ? 0 : months;
}

console.log(2021, 9);
