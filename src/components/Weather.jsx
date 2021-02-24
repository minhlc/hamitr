import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Weather(props) {
  const [lat, setLat] = useState(21.0285)
  const [long, setLong] = useState(105.8048)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setCoors)
    } else {
      alert('Geolocation is not supported by this browser')
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

  const fToC = (fValue) => {
    return Math.round(((fValue - 32) * 5) / 9)
  }

  const getWeatherNow = () => {
    axios
      .get(
        `${process.env.REACT_APP_HEROKU}${process.env.REACT_APP_DARKSKY_URL}${process.env.REACT_APP_DARKSKY_KEY}/${lat},${long}`
      )
      .then((res) => {
        let data = res.data
        setWeather(data)
        console.log(data)
      })
      .catch((error) => console.log(error))
  }
  // TODO: Fix error not null data weather
  return (
    <div className='weather'>
      <div className='weather__value'>
        {/* {weather.currently.temperature ? (
          fToC(weather.currently.temperature)
        ) : (
          <></>
        )} */}
      </div>
    </div>
  )
}

export default Weather
