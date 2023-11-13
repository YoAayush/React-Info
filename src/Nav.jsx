import React from "react";
import './nav.css';

function Nav(props){
    return(
            <nav className={props.darkMode ? "dark":""}>
                <div className='left-nav'>
                <a href="#" className='list-item'><img src="/react.svg" alt="react-icon" /></a>
                </div>
                <div className='middle-nav'>
                    <a href="#" className='list-item'>React Facts</a>
                </div>
                <div className='right-nav'>
                    <a href="#" className='list-item'>Home</a>
                    <a href="#" className='list-item'>News</a>
                    <a href='#' className='list-item'>Search</a>
                    <a href='#' className='list-item'>About</a>
                    <a href="#"><img src="/icons8-menu-48.png" alt="menu-icon" className='menu-icon' onClick={props.In}/><img src='/icons8-close-64.png' alt='close-icon' className='close-icon' onClick={props.Out}/></a>
                </div>

                {/* toggle bar */}
                <div className="toggler" >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode} 
                    >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
                 </div>
            
                <div className='menu-list'>
                    <a href="#" className='list-item'>Home</a>
                    <a href="#" className='list-item'>News</a>
                    <a href='#' className='list-item'>Search</a>
                    <a href='#' className='list-item'>About</a>
                </div>
            </nav>
    )
}

export default Nav;