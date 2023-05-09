let date = new Date();
let month = date.getMonth();
let day = date.getDate();
if (month < 10) {
  month += 1;
  month = "0" + month;
}
if (day < 10) {
  day = "0" + day;
}

let oy = date.getMonth();

switch (oy) {
  case 0:
    oy = "January";
    break;
  case 1:
    oy = "February";
    break;
  case 2:
    oy = "March";
    break;
  case 3:
    oy = "April";
    break;
  case 4:
    oy = "May";
    break;
  case 5:
    oy = "June";
    break;
  case 6:
    oy = "July";
    break;
  case 7:
    oy = "August";
    break;
  case 8:
    oy = "September";
    break;
  case 9:
    oy = "October";
    break;
  case 10:
    oy = "November";
    break;
  case 11:
    oy = "December";
    break;
}

let oylar = date.getMonth();
switch (oylar) {
  case 0:
    oylar = "Jan";
    break;
  case 1:
    oylar = "Feb";
    break;
  case 2:
    oylar = "Mar";
    break;
  case 3:
    oylar = "Apr";
    break;
  case 4:
    oylar = "May";
    break;
  case 5:
    oylar = "June";
    break;
  case 6:
    oylar = "July";
    break;
  case 7:
    oylar = "Aug";
    break;
  case 8:
    oylar = "Sept";
    break;
  case 9:
    oylar = "Oct";
    break;
  case 10:
    oylar = "Nov";
    break;
  case 11:
    oylar = "Dec";
    break;
}

let hafta = date.getDay();

switch (hafta) {
  case 0:
    hafta = "Sunday";
    break;
  case 1:
    hafta = "Monday";
    break;
  case 2:
    hafta = "Tuesday";
    break;
  case 3:
    hafta = "Wednesday";
    break;
  case 4:
    hafta = "Thursday";
    break;
  case 5:
    hafta = "Friday";
    break;
  case 6:
    hafta = "Saturday";
    break;
}

let haftalar = date.getDay();

switch (haftalar) {
  case 0:
    haftalar = "Sun";
    break;
  case 1:
    haftalar = "Mon";
    break;
  case 2:
    haftalar = "Tue";
    break;
  case 3:
    haftalar = "Wed";
    break;
  case 4:
    haftalar = "Thu";
    break;
  case 5:
    haftalar = "Fri";
    break;
  case 6:
    haftalar = "Sat";
    break;
}

let hr = date.getHours();
let mn = date.getMinutes();
let ap = "";
hr > 12 ? (ap = "PM") : (ap = "AM");
mn < 10 ? (mn = "0" + mn) : (mn = mn);
let ss = `${hr}:${mn} ${ap}`;
let sss = `${hr}:${mn}`;

setInterval(() => {
  let date = new Date();
  LT.innerHTML = `${ss}`;
  LTS.innerHTML = `${sss}:${date.getSeconds()} ${ap}`;
  L.innerHTML = `${month}/${day}/${date.getFullYear()}`;
  l.innerHTML = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  LL.innerHTML = `${oy} ${date.getDate()}, ${date.getFullYear()}`;
  ll.innerHTML = `${oylar} ${date.getDate()}, ${date.getFullYear()}`;
  LLL.innerHTML = `${oy} ${date.getDate()}, ${date.getFullYear()} ${ss}`;
  lll.innerHTML = `${oylar} ${date.getDate()}, ${date.getFullYear()} ${ss}`;
  LLLL.innerHTML = `${hafta}, ${oy} ${date.getDate()}, ${date.getFullYear()} ${ss}`;
  llll.innerHTML = `${haftalar}, ${oylar} ${date.getDate()}, ${date.getFullYear()} ${ss}`;
}, 1000);
