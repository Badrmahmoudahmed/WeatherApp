var collapse_btn = document.getElementById("collapse-btn");
var collapse_nav = document.getElementById("collapse-nav");
var nav = document.querySelector("nav");
var nav_ul = document.querySelector("collapse-ul");
var test = document.getElementById('test');
var searchBtn = document.getElementById('search-btn');
var searchInput = document.getElementById('searchinput')
collapse_btn.addEventListener('click', function () {
  collapse_nav.classList.toggle('no-height')
  // collapse_ul.classList.toggle('list-translate')

})


// var latitude = 0;
// var longitude = 0;
// if ("geolocation" in navigator) {
//   // الحصول على الموقع الجغرافي للمستخدم
//   navigator.geolocation.getCurrentPosition(function (p) {
//     latitude = p.coords.latitude;
//     longitude = p.coords.longitude;
//     current_location_Weather(`${latitude},${longitude}`)
//     // يمكنك استخدام الإحداثيات للقيام بالإجراءات التي تريدها هنا
//   }, function () {
//     current_location_Weather(`التجمع`)
//   });
// } else {
//   console.log("المتصفح لا يدعم واجهة geolocation");
// }










let current_location = [];
let forecastA = [];

async function current_location_Weather(ele) {
  var x = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=390f2919780a4f95ba8172704230808&q=` + ele + `&days=3&aqi=no&alerts=no`);
  // var x = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=390f2919780a4f95ba8172704230808&q=30.0960074&days=3&aqi=no&alerts=no`);
  var res = await x.json();
  console.log(res);
  forecastA = res.forecast.forecastday;
  current_location = res.location;
  displayAll()
}





















async function getWethar(ele) {
  var x = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=390f2919780a4f95ba8172704230808&q=${ele}&days=3&aqi=no&alerts=no`);
  // var x = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=390f2919780a4f95ba8172704230808&q=30.0960074&days=3&aqi=no&alerts=no`);
  var res = await x.json();
  // console.log(res);
  forecastA = res.forecast.forecastday;
  current_location = res.location;
  displayAll()
}
searchBtn.addEventListener('click', function () {
  getWethar(searchInput.value)
})

function displayAll() {
  cartona = '';
  cartona += `<div class="col-lg-4 weather-data col-md-12 mx-auto fs_day" ><div class="day d-flex justify-content-between">
    <p>${getdayname(new Date(forecastA[0].date).getDay())}</p>
    <p>${new Date(forecastA[0].date).getDate()} ${getmonthname(new Date(forecastA[0].date).getMonth())}</p>
</div>
<div class="weather">
    <h4 class="mt-3">${current_location.name}</h4>
    <div class="d-flex align-items-center justify-content-between">
        <h2 class="text-white" style="font-size: 70px;">${forecastA[0].day.maxtemp_c}</h2>
        <img src=${'https:' + forecastA[0].day.condition.icon} class="sun-img" alt="sun" />
    </div>
  <p class="mt-4 text-primary">${forecastA[0].day.condition.text}</p>
    <div class="icn mt-5">
        <span class="me-3"><img class="me-2" src="./img/icon-umberella.png"
                alt="umberella">20%</span>
        <span class="me-3"><img class="me-2" src="./img/icon-wind.png"
                alt="umberella">${forecastA[0].day.maxwind_mph}</span>
        <span class="me-3"><img class="me-2" src="./img/icon-compass.png"
                alt="umberella">20%</span>
    </div>
</div></div>



<div class="col-lg-4 text-center weather-data col-md-12 mx-auto sec_day">

<div class="day">
    <p>${getdayname(new Date(forecastA[1].date).getDay())}</p>
</div>
<div class="weather">
    <img src=${'https:' + forecastA[1].day.condition.icon} class="sun-img" alt="sun" />
    <p class="mt-4 fs-2 fw-bold text-white">${forecastA[1].day.maxtemp_c}</p>
    <p class="fs-6">${forecastA[1].day.mintemp_c}</p>
    <p class="mt-2 text-primary">${forecastA[1].day.condition.text}</p>
</div>

</div>
<div class="col-lg-4 text-center weather-data col-md-12 mx-auto th_day">

<div class="day">
    <p>${getdayname(new Date(forecastA[2].date).getDay())}</p>
</div>
<div class="weather">
    <img src=${'https:' + forecastA[2].day.condition.icon} class="sun-img" alt="sun" />
    <p class="mt-4 fs-2 fw-bold text-white">${forecastA[2].day.maxtemp_c}</p>
    <p class="fs-6">${forecastA[2].day.mintemp_c}</p>
    <p class="mt-2 text-primary">${forecastA[2].day.condition.text}</p>
</div>
</div>`
  test.innerHTML = cartona;

}

let day = '';
function getdayname(key) {
  switch (key) {
    case 0:
      day = 'sunday';
      break;
    case 1:
      day = 'Monday';
      break;
    case 2:
      day = 'Tuesday';
      break;
    case 3:
      day = 'wednsday';
      break;
    case 4:
      day = 'Thurthday';
      break;
    case 5:
      day = 'Friday';
      break;
    case 6:
      day = 'Saturday';
      break;
  }
  return day
}

let month = '';
function getmonthname(key) {
  switch (key) {
    case 0:
      month = 'January';
      break;
    case 1:
      month = 'Febreuary';
      break;
    case 2:
      month = 'March';
      break;
    case 3:
      month = 'April';
      break;
    case 4:
      month = 'May';
      break;
    case 5:
      month = 'June';
      break;
    case 6:
      month = 'July';
      break;
    case 7:
      month = 'August';
      break;
    case 8:
      month = 'Septamper';
      break;
    case 9:
      month = 'Octobar';
      break;
    case 10:
      month = 'Novamber';
      break;
    case 11:
      month = 'Decembar';
      break;
  }
  return month
}

// x = new Geolocation().getCurrentPosition();

