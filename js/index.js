// 92599ddb81ce4a66b9a212450230203
let months=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let date = new Date();
let numeric_day = date.getDate();
let day = date.getDay();
let month = date.getMonth();
let today = days[day];
let todayMonth= months[month];





// for two additional days

const twoAdditionalDays  = new Date();


let otherDays=[];


for(let i =1;i<=2;i++){

  twoAdditionalDays.setDate(twoAdditionalDays.getDate() + i);

otherDays.push(days[twoAdditionalDays.getDay()]);

}
console.log(otherDays);




let weather=[];

// function getWeather(search){
// var req = new XMLHttpRequest();

// req.open("GET",`http://api.weatherapi.com/v1/forecast.json?key=92599ddb81ce4a66b9a212450230203&q=${search}&days=3&aqi=no&alerts=no`)

// req.send();

// req.addEventListener("loadend",function(e){
// if(req.status==200){
// console.log("Success");
// weather=JSON.parse(req.response);
// displayWeather();

// }
// })





























async function getWeather(search){

  var res = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=92599ddb81ce4a66b9a212450230203&q=${search}&days=3&aqi=no&alerts=no
  `)

    
      if(res.ok && res.status!=400){
      weather = await res.json();
      displayWeather();
      }

  }
  


getWeather('cairo');


function displayWeather(){

  let cartona ="";



  cartona+= `<div class="row gy-4">
  <div class="col-md-4 first text-white">
    <div class="heads d-flex justify-content-between">
      <p>${today}</p>
      <p>${numeric_day} ${todayMonth}</p>
    </div>
    <div class="body">
        <h5 class="text-white">${weather.location.name}</h5>
        <span class="d-flex justify-content-between" >
        <h2>${weather.current.temp_c}<span class="sub1">o</span> c</h2>
        <img src="${weather.current.condition.icon}" alt="moon" width="21%" class="mb-5">
      </span>
        <h6 class="text-info">${weather.current.condition.text}</h6>
      </div>
      <div class="icons d-flex">
        <div class="each-icon1 me-4">
          <img src="https://routeweather.netlify.app/images/icon-umberella@2x.png" alt="umbrela" width="21%">
          20%
        </div>
        <div class="each-icon2 me-4">
          <img src="https://routeweather.netlify.app/images/icon-wind@2x.png" alt="umbrela" width="21%">
          18km/h
        </div>
        <div class="each-icon3 me-4">
          <img src="https://routeweather.netlify.app/images/icon-compass@2x.png" alt="umbrela" width="21%">
          East
        </div>
      </div>
    </div>
    <div class="col-md-4 second text-white">
      <div class="header-2 text-center">
        <p>${otherDays[0]}</p>
      </div>
      <div class="content-2 text-center">
        <img src="${weather.forecast.forecastday[0].day.condition.icon}" alt="sun">
        <h2>${weather.forecast.forecastday[0].day.maxtemp_c} <span class="sub1">o</span> c</h2> 
        <p>${weather.forecast.forecastday[0].day.mintemp_c} <span class="sub1">o</span> c</p>
        <p class="text-info">${weather.forecast.forecastday[0].day.condition.text}</p>
      </div>
    </div>
    <div class="col-md-4 third text-white">
      <div class="header-3 text-center">
        <p> ${otherDays[1]} </p>
      </div>
      <div class="content-2 text-center">
        <img src="${weather.forecast.forecastday[1].day.condition.icon}" alt="sun">
        <h2>${weather.forecast.forecastday[1].day.maxtemp_c}</h2>
        <p>${weather.forecast.forecastday[1].day.mintemp_c}<span class="sub1">o</span> c</p>
        <p class="text-info">${weather.forecast.forecastday[1].day.condition.text} </p>
      </div>
    </div>
  </div>
    
    
    
    `
    

  document.getElementById('general-forecast').innerHTML=cartona


  
}
















