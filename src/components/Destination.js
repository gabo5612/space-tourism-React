import React, { useState } from 'react';
import '../style/Destination.css';
import imgMoon from '../assets/destination/image-moon.png';
import imgMars from '../assets/destination/image-mars.png';
import imgEuropa from '../assets/destination/image-europa.png';
import imgTitan from '../assets/destination/image-titan.png';


function Destination(){
   const planetInfo={
       planets:[
        {
            name: 'MOON',
            img: imgMoon,
            description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
            distance: '384,400 KM',
            travelTime: '3 DAYS'
        },{
            name: 'MARS',
            img: imgMars,
            description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
            distance: ' 225 MIL. KM',
            travelTime: '9 MONTHS'
        },{
            name: 'EUROPA',
            img: imgEuropa,
            description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
            distance: '628 MILL. KM',
            travelTime: '3 YEARS'
        },{
            name: 'TITAN',
            img: imgTitan,
            description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
            distance: '1.6 BILL. KM',
            travelTime: '7 YEARS'
        }
        

    ]
    
   }
   console.log(planetInfo.planets[0].name)
    const defaultPlanetDescription=planetInfo.planets[0].description
    const [planetImg, setPlanetImg]=useState(imgMoon)
    const [planetTitle, setPlanetTitle]=useState('MOON')
    const [planetDescription, setplanetDescription]=useState(defaultPlanetDescription)
    const [planetDistance, setplanetDistance]=useState('384,400 KM')
    const [planetTravelTime, setplanetTravelTime]=useState('3 DAYS')
    

    function handlePlanetClick(planetImg) {
        setPlanetImg(planetImg);
        if(planetImg === imgMoon) {
            setPlanetTitle(planetInfo.planets[0].name);
            setplanetDescription(planetInfo.planets[0].description);
            setplanetDistance(planetInfo.planets[0].distance);
            setplanetTravelTime(planetInfo.planets[0].travelTime);
        } else if(planetImg === imgMars) {
            setPlanetTitle(planetInfo.planets[1].name);
            setplanetDescription(planetInfo.planets[1].description);
            setplanetDistance(planetInfo.planets[1].distance);
            setplanetTravelTime(planetInfo.planets[1].travelTime);
        } else if(planetImg === imgEuropa) {
            setPlanetTitle(planetInfo.planets[2].name);
            setplanetDescription(planetInfo.planets[2].description);
            setplanetDistance(planetInfo.planets[2].distance);
            setplanetTravelTime(planetInfo.planets[2].travelTime);
        } else {
            setPlanetTitle(planetInfo.planets[3].name);
            setplanetDescription(planetInfo.planets[3].description);
            setplanetDistance(planetInfo.planets[3].distance);
            setplanetTravelTime(planetInfo.planets[3].travelTime);
        }
    }
    
    return(
        <div className='destination'>
            <div className='topContent'>
                <div className='titleDestination'>
                    <h3>01</h3> <h4>PICK YOUR DESTINATION</h4>
                </div>
                <div className='planetImg'>
                    <img src={planetImg} alt={planetTitle}/>
                </div>
                
            </div>
            <div className='middleContent'>
                <div className='planetSelector'>
                <h5><button className='planetButton' onClick={() => handlePlanetClick(imgMoon)} >MOON</button></h5>
                <h5><button className='planetButton' onClick={() => handlePlanetClick(imgMars) }>MARS</button></h5>
                <h5><button className='planetButton' onClick={() => handlePlanetClick(imgEuropa)}>EUROPA</button></h5>
                <h5><button className='planetButton' onClick={() => handlePlanetClick(imgTitan) }>TITAN</button></h5>
                
                  </div>
                <div className='planetTitle'>
                    <h2>{planetTitle}</h2>
                </div>
                <div className='planetDescription'>
                    <p>{planetDescription}</p>
                </div>
            </div>
            <div className='bottonContent'>
                <div className='topSection'>
                    <h3 className='bottonContenth3'>AVG. DISTANCE</h3>
                    <h2 className='bottonContenth2'>{planetDistance}</h2>
                </div>
                
                <div className='bottonSection'>
                    <h3 className='bottonContenth3'>EST. TRAVEL TIME</h3>
                    <h2 className='bottonContenth2'>{planetTravelTime}</h2>
                </div>
            </div>
        </div>
     )
}
export {Destination}
