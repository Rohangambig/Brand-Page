import React from 'react';
// import Header from './Components/Header';
import Logo from './Images/brand_logo.png'
import shoes from './Images/shoe_image.png';
import amazon from  './Images/amazon.png'
import flipkart from  './Images/flipkart.png'
import './App.css';

function App() {
  return (
    <div className="App">
        <nav className='nav'>
            <div className='logo'>
              <img src ={Logo} alt='Logo'></img> 
            </div>
            <ul className='All-li'>
              <li href='#' >Menu</li> 
              <li href='#'>Location</li> 
              <li href='#'>About</li> 
              <li href='#'>Contact</li> 
            </ul>
            <button>Login</button>
       </nav>

      <div className='Container'>
        <div className='container1'>
          <h1>YOUR FEET DESERVE THE BEST</h1>
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
          <div className='ButtonContainer'>
            <button>Shop Now</button>
            <button>Category</button>
          </div>
          <div className='Available'>
            <p>Also Available On</p>
            <div>
              <img src={flipkart} alt= 'flipkart'></img>
              <img src={amazon} alt= 'Amazon'></img>
            </div>
          </div>
          </div>
        <div className='container2'>
          <img src={shoes} alt='Shoeimage'></img>
        </div>
      </div>
    </div>
  );
}

export default App;
