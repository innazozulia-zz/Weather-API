

fetch(`http://api.openweathermap.org/data/2.5/weather?id=1850147&appid=8166d7b0e0ed44dce165a1512fc24303`)
.then(function (resp) {return resp.json() })
.then(function (data) {
    console.log(data);
    document.querySelector('.selected_city').textContent = `${data.name}`;  
    document.querySelector('.temp').innerHTML =`<p>Temperature : ${Math.round(data.main.temp - 273)} &deg;</p>`;
    document.querySelector('.feels_like').innerHTML = `<p>Feels like : ${Math.round (data.main.feels_like - 273)} &deg;</p>`;
    document.querySelector('.country').textContent = `Country : ${data.sys.country}`;
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`; 
    document.querySelector('.description').innerHTML = (data.weather[0]['main']); 
    document.querySelector('.humidity').textContent = `Humidity: ${ (data.main.humidity)}%`;
    let myDate = new Date(`${data.sys.sunset}`*1000);
    document.querySelector('.time').innerHTML = `Date: ${ myDate.toGMTString() + '<br>'} Sunset: ${ myDate.toLocaleString()}`;
})
.catch(function(){
    //catch any errors
});

const name = document.querySelector('.name');

function chooseCity(){
    let id = name.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=8166d7b0e0ed44dce165a1512fc24303`)
    .then(function (resp) {return resp.json() })
    .then(function (data) {
        console.log(data);
        document.querySelector('.selected_city').textContent = `${data.name}`;
        document.querySelector('.temp').innerHTML =`<p> Temperature : ${Math.round(data.main.temp - 273)} &deg;</p>`;
        document.querySelector('.feels_like').innerHTML = `<p> Feels like : ${Math.round (data.main.feels_like - 273)} &deg;</p>`;
        document.querySelector('.country').textContent = ` Country : ${data.sys.country}`;
        document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        document.querySelector('.description').innerHTML = (data.weather[0]['main']); 
        document.querySelector('.humidity').textContent = `Humidity: ${ (data.main.humidity)}%`;
        document.querySelector('.max').innerHTML = ` Max: ${Math.round(data.main.temp_max - 273)} &deg; `;
        document.querySelector('.min').innerHTML = ` Min: ${Math.round(data.main.temp_min - 273)} &deg;  `;
        let myDate = new Date(`${data.sys.sunset}` *1000);
        document.querySelector('.time').innerHTML = `Date: ${ myDate.toGMTString() + '<br>'} Sunset: ${ myDate.toLocaleString()}`;
        
        
})
.catch(function(){
    //catch any errors
});

}

name.onchange = chooseCity;

const a  = document.createElement('a');



function morebtn() {
   const id = name.value;
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${id}&appid=8166d7b0e0ed44dce165a1512fc24303`)
    .then (function (resp) {
        return resp.json()
    })
    .then (function (data){
        let out = document.querySelector('.out');
        a.innerHTML += `<p>wind : ${data.wind.speed} m/s</p>`;
        // a.innerHTML = `<p>Max&deg;: ${ Math.round(data.main.temp_max - 273) } &deg;</p>`;
        // a.innerHTML = `<p>Min&deg;: ${ Math.round(data.main.temp_min - 273) } &deg;</p>`;
        out.append(a);   
       
    })
  
     name.addEventListener('change', updateValue);
     function updateValue(b){
     a.textContent = ` id : ${b.target.value} `;  
  }

     }
document.querySelector('.btn').onclick = morebtn;