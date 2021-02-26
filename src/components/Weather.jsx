import React, { useState, useEffect } from "react"
import axios from "axios"

// icon
import SunIcon from "../img/sun.svg"
import CloudyIcon from "../img/cloudy.svg"
import RainIcon from "../img/rain.svg"
import SnowIcon from "../img/snow.svg"
import StormIcon from "../img/storm.svg"
import WindIcon from "../img/wind.svg"
import LightRainIcon from "../img/light-rain.svg"
import LightSunIcon from "../img/light-sun.svg"

function Weather(props) {
  const [lat, setLat] = useState(21.0285)
  const [long, setLong] = useState(105.8048)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCoors)
    } else {
      alert("Geolocation is not supported by this browser")
    }

    getWeatherNow()
  }, [])

  const roundNumber = (num) => {
    return Math.round(num * 10000) / 10000
  }

  const setCoors = (position) => {
    setLat(roundNumber(position.coords.latitude))
    setLong(roundNumber(position.coords.longitude))
  }

  const getWeatherNow = () => {
    axios
      .get(
        `${process.env.REACT_APP_HEROKU}${process.env.REACT_APP_DARKSKY_URL}${process.env.REACT_APP_DARKSKY_KEY}/${lat},${long}`,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          },
        }
      )
      .then((res) => {
        let data = res.data
        setWeather(data.currently)
      })
      .catch((error) => console.log(error))
  }

  const fToC = (fValue) => {
    return Math.round(((fValue - 32) * 5) / 9)
  }

  const weatherIcon = (icon) => {
    if (icon.includes("cloudy")) {
      return CloudyIcon
    } else if (icon.includes("sun")) {
      return SunIcon
    } else if (icon.includes("rain")) {
      return RainIcon
    }
  }

  return (
    <div className="weather">
      {weather ? (
        <div className="weather__value d-flex align-items-center">
          <img src={weatherIcon(weather.icon)} alt={weather.icon} />
          <b className="weather__temp">
            {fToC(weather.temperature)}
            <sup>°C</sup>
          </b>
          <div className="_other">
            <p className="_other__item">Summary: {weather.summary}</p>
            <p className="_other__item">Humidity: {weather.humidity * 100} %</p>
            <p className="_other__item">Wind: {weather.windSpeed} km/h</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  )
}

export default Weather
