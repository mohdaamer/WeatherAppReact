import React, { useState } from 'react';
import { IoLocationOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import cloud from '../asset/cloud.png';
import humidity from '../asset/humidity.png';
import wind from '../asset/wind.png';
import clear from '../asset/clear.png';
import drizzle from '../asset/drizzle.png';
import rain from '../asset/rain.png';
import snow from '../asset/snow.png';

const WeatherApp = () => {

  const [icon, Seticon] = useState({cloud});

  const API_KEY = "508ac848f64a9a48fc1b3ee3d901cb8a";

  const search = async ()=>{
    const element = document.getElementsByClassName('cityname');
    if(element[0].value===""){
      return 0;
  }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${API_KEY}`;
    let response = await fetch(url);
    let data = await response.json();

    const humidity = document.getElementsByClassName('humidityper');
    const wind = document.getElementsByClassName('windper');
    const temp = document.getElementsByClassName('temp');
    const location = document.getElementsByClassName('location');
    const weather = document.getElementsByClassName('weather');

    temp[0].innerHTML = data.main.temp + ' °C';
    location[0].innerHTML = data.name;
    wind[0].innerHTML = data.wind.speed + ' km/h';
    humidity[0].innerHTML = data.main.humidity + ' %';
    weather[0].innerHTML = data.weather[0].description;

    if(data.weather[0].icon ==="01d" || data.weather[0].icon ==="01n"){
      Seticon(clear);
    } else if(data.weather[0].icon ==="02d" || data.weather[0].icon ==="02n"){
      Seticon(cloud);
    } else if(data.weather[0].icon ==="03d" || data.weather[0].icon ==="03n"){
      Seticon(drizzle);
    } else if(data.weather[0].icon ==="04d" || data.weather[0].icon ==="04n"){
      Seticon(drizzle);
    } else if(data.weather[0].icon ==="09d" || data.weather[0].icon ==="09n"){
      Seticon(rain);
    } else if(data.weather[0].icon ==="010d" || data.weather[0].icon ==="010n"){
      Seticon(rain);
    } else if(data.weather[0].icon ==="013d" || data.weather[0].icon ==="013n"){
      Seticon(snow);
    } else {
      Seticon(clear);
    }
  }

  return (
    <div className='w-full h-screen bg-gradient-to-b from-[#092756] to-[#0e45ad] p-7'>

      {/* Location Section  */}
      <div className="flex gap-2">
        <IoLocationOutline size={20} className='text-white'/>
        <h4 className='text-white font-semibold location'>Location</h4>
      </div>

      {/* Search Section  */}
      <div className="search py-4 w-full flex gap-4 mt-1">
        <input type="text" className='w-[200px] p-2 rounded-md outline-none border-none cityname' placeholder='Search City, Country, Place here....'/>
        <button className='bg-white rounded-md p-2 border-none outline-none font-semibold text-[#092756]' onClick={()=>{search()}}>SUBMIT</button>
      </div>

      {/* Content Section  */}
      <div className="content flex flex-col gap-4 items-center mt-1">
        <img src={icon} alt="cloud" className='img' />
        <h1 className='text-white font-semibold text-7xl temp'>20 °C</h1>
      </div>

      {/* Bottom Data Section  */}
      <div className="bottomdata mt-12 w-full">

        {/* Humidity  */}
        <div className="element flex gap-4 p-4">
          <img src={humidity} alt="" />
          <div className="data">
            <h4 className='text-white font-semibold humidityper text-lg'>64%</h4>
            <h4 className='text-white font-semibold text-lg'>Humidity</h4>
          </div>
        </div>

        {/* Wind  */}
        <div className="element flex gap-4 p-4">
          <img src={wind} alt="" />
          <div className="data">
            <h4 className='text-white font-semibold windper text-lg'>18 km/h</h4>
            <h4 className='text-white windtext font-semibold text-lg'>Wind Speed</h4>
          </div>
        </div>

        <div className="element flex gap-4 p-4">
          <img src={humidity} alt="" />
          <div className="data">
            <h4 className='text-white font-semibold weather text-lg'>Light Rain</h4>
            <h4 className='text-white font-semibold text-lg'>Weather</h4>
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default WeatherApp
