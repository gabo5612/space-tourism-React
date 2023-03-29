import React, { useState } from 'react';
import MediaQuery from "react-responsive";
import '../style/Container.css';
import { Home } from './Home';
import { Destination } from './Destination';
import { Crew } from './Crew';
import { Technology } from './Technology';
import logo from '../assets/shared/logo.svg'
import hamburger from '../assets/shared/icon-hamburger.svg';
import darkBackground from '../assets/shared/darkBackground.JPG'
import closeHamburger from '../assets/shared/icon-close.svg';
function Container() {
  const [content, setContent] = useState(1);
  const [imgSrc, setImgSrc]=useState(hamburger)
  const [imgSrc2, setImgSrc2]=useState(closeHamburger)
  const [menu, setMenu]=useState('mobileMenu')

  const handleClick=() =>{
    if(imgSrc===hamburger){
                setImgSrc(darkBackground)
                setMenu('responsiveMenu')
                
            } else{
               setImgSrc(hamburger)
               setMenu('mobileMenu')
              
            }
    }

  function handleNavClick(option) {
    setContent(option);
  }
  const mediaQueryChange = (matches) => {};
  
  return (
    <div className='Container'>
 <MediaQuery maxWidth={768} onChange={mediaQueryChange}>
    <div className='navBarMobile'>
        <div className='leftSideNavBarMobile'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='middleBarMobile'></div>
        <div className='rightSideNavBarMobile'>
            <img src={imgSrc} alt='menu' className='imgMenu' onClick={handleClick}/>
            
      <nav className={menu}>
      <img src={imgSrc2} alt='menu' onClick={handleClick}/>
        <ul>
          <li><button onClick={() => handleNavClick(1)}>00 home</button></li>
          <li><button onClick={() => handleNavClick(2)}>01 Destination</button></li>
          <li><button onClick={() => handleNavClick(3)}>02 Crew</button></li>
          <li><button onClick={() => handleNavClick(4)}>03 Technology</button></li>
        </ul>
      </nav>
      </div>
      </div>
      </MediaQuery>
      <MediaQuery minWidth={769} onChange={mediaQueryChange}>
    <div className='navBarTablet'>
        <div className='leftSideNavBarTablet'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='middleBarTablet'></div>
        <div className='rightSideNavBarTablet'>
        <img src={imgSrc} alt='menu' onClick={handleClick}/>
      <nav className={menu}>
        <ul>
        <li><button onClick={() => handleNavClick(1)}>00 home</button></li>
          <li><button onClick={() => handleNavClick(2)}>01 Destination</button></li>
          <li><button onClick={() => handleNavClick(3)}>02 Crew</button></li>
          <li><button onClick={() => handleNavClick(4)}>03 Technology</button></li>
        </ul>
      </nav>
      </div>
      </div>
      </MediaQuery>
      <MediaQuery minWidth={1025} onChange={mediaQueryChange}>
    <div className='navBarDesktop'>
        <div className='leftSideNavBarDesktop'>
            <img src={logo} alt='logo'/>
        </div>
        <div className='middleBarDesktop'></div>
        <div className='rightSideNavBarDesktop'>
      <nav className='desktopMenu'>
        <ul>
        <li><button onClick={() => handleNavClick(1)}>00 home</button></li>
          <li><button onClick={() => handleNavClick(2)}>01 Destination</button></li>
          <li><button onClick={() => handleNavClick(3)}>02 Crew</button></li>
          <li><button onClick={() => handleNavClick(4)}>03 Technology</button></li>
        </ul>
      </nav>
      </div>
      </div>
      </MediaQuery>
      {content === 1 && <Home />}
      {content === 2 && <Destination />}
      {content === 3 && <Crew />}
      {content === 4 && <Technology />}
    </div>
  );
}

export { Container };
