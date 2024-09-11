import React from 'react'
import { assets } from '../../assets/assets'
import './Appdownload.css'

const Appdownload = () => {
  return (
    <div className='download-content' id='download-content'>
        <p>Download our App from play store</p>
      <div className="Mobile-App">
        <img src={assets.app_store} alt="" />
        <img src={assets.play_store} alt="" />

      </div>
    </div>
  )
}

export default Appdownload 
