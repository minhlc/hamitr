import React, { useState, useEffect } from 'react'
// background-image
import bg1 from '../img/bg.jpg'
import bg2 from '../img/bg2.jpg'
import bg3 from '../img/bg3.jpg'

const styleBg1 = {
  backgroundImage: `url(${bg1})`,
}
const styleBg2 = {
  backgroundImage: `url(${bg2})`,
}
const styleBg3 = {
  backgroundImage: `url(${bg3})`,
}

function LogoText(props) {
  useEffect(() => {
    const d = new Date()
    let thisHour = d.getHours()
    if (thisHour >= 0 && thisHour < 8) {
      setStylebg(styleBg1)
    } else if (thisHour >= 8 && thisHour < 16) {
      setStylebg(styleBg2)
    } else {
      setStylebg(styleBg3)
    }
  }, [])

  const [stylebg, setStylebg] = useState(styleBg1)

  return (
    <div className='logo-container' style={stylebg}>
      <div className='text'>hamitr</div>
    </div>
  )
}

export default LogoText
