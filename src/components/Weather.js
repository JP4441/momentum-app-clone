import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {WeatherContainer, Temp, City, Emoji} from './WeatherStyles'

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Montreal&units=imperial&appid=1d0d0bc950b6234c89ae279bac85f737'

const Weather = () => {
  const [icons, setIcons] = useState({
    Clear: '☀',
    Rain: '️🌧',
    Storm: '⛈',
    Snow: '🌨',
    Mist: '🌫',
    Clouds: '☁️',
  }
)

const [data, setData] = useState(null)

useEffect (() => {
  axios.get(url).then((response) => {
    setData(response.data)
  }).catch((error) => {
    console.log(error)
  })
},[])

if(!data) return null;

console.log(data.weather[0].main)
const Mojis = () => {
  if(data.weather[0].main = 'Cloudy') {
    return '☁️';
  } else if (data.weather[0].main = 'Clear') {
    return '☀';
  } else if (data.weather[0].main = 'Rain') {
    return '🌧';
  } else if (data.weather[0].main = 'Storm') {
    return '⛈';
  } else if (data.weather[0].main = 'Snow') {
    return '🌨';
  } else if (data.weather[0].main = 'Mist') {
    return '🌫';
  }
}
  return (
    <WeatherContainer>
      <Emoji>{Mojis()}</Emoji>
      <Temp>{Math.floor(((data.main.temp.toFixed(0))-32)*5/9)}&#176;C</Temp>
      <City>Montreal, QC</City>
    </WeatherContainer>
  )
}


export default Weather

