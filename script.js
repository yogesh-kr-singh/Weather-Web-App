const input = document.getElementById('input')
const button = document.getElementById('search')
const country = document.getElementById('country')
const time = document.getElementById('time')
const city = document.getElementById('city')
const state = document.getElementById('state')
const cloud = document.getElementById('cloud')
const text = document.getElementById('text')
const temp= document.getElementById('temp')
const icon =document.getElementById('text-icon')

async function findWeather(city) {
    const response= await fetch (`http://api.weatherapi.com/v1/current.json?key=25d470710b0c40a097a74946242004&q=${city}&aqi=yes`)
    const data = await response.json()
    console.log(data);
    return data

}
input.addEventListener("keypress", async (event)=> {
    if (event.key === "Enter") {
        const cityName=input.value
        const result=await findWeather(cityName)
        const {current, location} = result;
        
    
        console.log(current)
        // location
        country.textContent=location.country 
        time.textContent=location.localtime
        city.textContent=location.name
        state.textContent=location.region
    
        // current
        cloud.textContent=current.cloud
        temp.textContent=current.temp_c
        text.innerHTML=`${current.condition.text} <img src=${current.condition.icon} alt='weather icon'>`
    }
  });

button.addEventListener('click', async (e)=>{

    const cityName=input.value
    const result=await findWeather(cityName)
    const {current, location} = result;
    

    console.log(current)
    // location
    country.textContent=location.country
    time.textContent=location.localtime
    city.textContent=location.name
    state.textContent=location.region

    // current
    cloud.textContent=current.cloud
    temp.textContent=current.temp_c
    text.innerHTML=`${current.condition.text} <img src=${current.condition.icon} alt='weather icon'>`

})