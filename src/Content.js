import React from 'react'
import photo1 from './images/ab.jpg';
import photo2 from './images/pngegg.png';
import photo3 from './images/main.jpg';
import p1 from './images/1.jpg'
import p2 from './images/2.jpg'
import p3 from './images/3.jpg'
import p4 from './images/4.jpg'
import p5 from './images/5.jpg'
import p6 from './images/6.jpg'
import p7 from './images/7.jpg'
import p8 from './images/8.jpg'
import p9 from './images/9.jpg'
import p10 from './images/10.jpg'
import { Link, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import './content.css'
const Content = () => {

  const user = {
    username: "Mandori",
    role: "vendor" 
  };
  
  const gotToNewPage = () => {
    window.location.href = '/checkout';
  };
  return (
    
    <div>
      <nav>
      <ul>
        <li><a href="#">My Profile</a></li>
        <li><a href="#s1">Home</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/orders">My Orders</a></li>
        <li><a href="/contact">Contact Us</a></li>
        {user.role === 'vendor' && <li><a href="/newevent">Sell Tickets</a></li>}
        
      </ul>
      </nav>
      <div>
        <div className='main'>
          <h3 className='heading'>Your One Destination For Entertainment</h3>
        </div>
      </div>
      <div>
          <h3 className='hh'>Popular Events </h3>
        <div className='pop' id='s1'>
          <div>
            <h3 className='head'>Music Concert</h3>
            <img className='photos' src={photo1}></img>
            <h4>Harmonic Nights: A Melody</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
          <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={photo2}></img>
            <h4>Melodic Fusion: A Musical</h4>
            <h4>Sunday, May 5th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>550 Rs</button>
          </div>
          <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p1}></img>
            <h4>Harmonic Horizon</h4>
            <h4>Monday, May 6th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
          <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p2}></img>
            <h4>Melodic Mosaic</h4>
            <h4>Tuesday, May 7th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
        </div>
        <h3 className='hh'>Latest Events </h3>
        <div className='latest'>
          <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p3}></img>
            <h4>Aurora Melodica</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
          <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p4}></img>
            <h4>Vibrant Voices</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
          <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p5}></img>
            <h4>Celestial Harmonies</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
          <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p6}></img>
            <h4>Enchanted Echoes</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
        </div>
        <h3 className='hh'>Upcoming Events </h3>
        <div className='Upcoming'>
         <div>
         <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p7}></img>
            <h4>Fusion Fiesta</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
         </div>
         <div>
         <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p8}></img>
            <h4>Mystic Melodies</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
         </div>
         <div>
         <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p9}></img>
            <h4>Soulful Serenade</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
         </div>
         <div>
          <h3 className='head'>Music Concert</h3>
            <img className='photos' src={p10}></img>
            <h4>Rhythmic Revelry</h4>
            <h4>Saturday, May 4th, 2024</h4>
            <button onClick={gotToNewPage} className='small-button'>500 Rs</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content