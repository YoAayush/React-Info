import React from 'react';
import './main.css'

function Main(props) {
  
  return (
    <main className={props.darkMode ? "dark":""}>
      <div className='line'></div>
      <div className='main-head'>
        <h1>Fun facts About React</h1>
      </div>
      <div className='listed-items'>
        <ul className='u-l'>
          <li className='items'>Was Released in 2013</li>
          <li className='items'>Was Originally created by Jordan walke</li>
          <li className='items'>Is maintained by Facebook</li>
          <li className='items'>Has well over 100k stars on Github</li>
          <li className="items">Build thousands of Enterprise apps, including Mobile Apps</li>
        </ul>
      </div>
    </main>
  )
}

export default Main;