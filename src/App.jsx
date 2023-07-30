import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from './Navbar';
import './Index.css'
import './App.css'

const App = () => {

  const API_KEY = "https://api.adviceslip.com/advice";

  const getAdvice = async () => {
    const response = await fetch(`${API_KEY}`);
    const data = await response.json();
    console.log(data.slip.advice);
    setAdvice(data.slip.advice);
  }

  const [advice, setAdvice] = useState('');

  useEffect(()=>{
      getAdvice();
  },[])

  return (

    <>  
      {/* <div className="main">
      <div className="centered-container">
        <div className="rounded-div">
          <p className='adviceTxt'>{advice}</p>
          <button>
              P L A Y
              <div id="clip">
                  <div id="leftTop" class="corner"></div>
                  <div id="rightBottom" class="corner"></div>
                  <div id="rightTop" class="corner"></div>
                  <div id="leftBottom" class="corner"></div>
              </div>
              <span id="rightArrow" class="arrow"></span>
              <span id="leftArrow" class="arrow"></span>
          </button>
        </div>
      </div>
      </div> */}
      
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={getAdvice}>
            <span>GIVE ME ADVICE!</span>
          </button>
        </div>
      </div>
    </>
    
  
  )
}

export default App