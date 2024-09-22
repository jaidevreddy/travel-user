import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <h1>Travel Karo.</h1>
            <p>Ready for your next unforgettable stay? Book with confidence and let us handle the rest. Stay connected with us for exclusive offers, updates, and special events. We're here to make every stay extraordinary—your perfect escape is just a click away.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Book Now</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>PROJECT BY</h2>
            <ul>
                <li>Ajay S Prakash</li>
                <li>Prajna Anand</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © travelkaro.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
