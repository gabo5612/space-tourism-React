import React, { useState } from 'react';
import '../style/Crew.css';
import imgCrew1 from '../assets/crew/image-douglas-hurley.png'
import imgCrew2 from '../assets/crew/image-mark-shuttleworth.png'
import imgCrew3 from '../assets/crew/image-victor-glover.png'
import imgCrew4 from '../assets/crew/image-anousheh-ansari.png'
function Crew(){
    const crewInfo= {
        crew:[
            {
                name:'Douglas Hurley',
                charge: 'Commander',
                img:imgCrew1,
                description:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.' 
            },{
                name:'MARK SHUTTLEWORTH',
                charge: 'Mission Specialist ',
                img:imgCrew2,
                description:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.' 
            },{
                name:'Victor Glover',
                charge: 'PILOT',
                img:imgCrew3,
                description:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ' 
            },{
                name:'Anousheh Ansari',
                charge: 'Flight Engineer',
                img:imgCrew4,
                description:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ' 
            }
        ]
    }
    const defaultCrewDescription= crewInfo.crew[0].description
    const [crewName, setCrewName]=useState('Douglas Hurley')
    const [imgCrew, setImgCrew]=useState(imgCrew1)
    const [crewCharge, setCrewCharge]=useState('Commander')
    const [crewDescription, setCrewDescription]=useState(defaultCrewDescription)
    
    function handleButtonClick(imgCrew){
        setImgCrew(imgCrew)
        switch(imgCrew){
            case imgCrew2:
                setCrewName(crewInfo.crew[1].name)
                setCrewCharge(crewInfo.crew[1].charge)
                setCrewDescription(crewInfo.crew[1].description)
                break;
            case imgCrew3:
                setCrewName(crewInfo.crew[2].name)
                setCrewCharge(crewInfo.crew[2].charge)
                setCrewDescription(crewInfo.crew[2].description)
                break;
            case imgCrew4:
                setCrewName(crewInfo.crew[3].name)
                setCrewCharge(crewInfo.crew[3].charge)
                setCrewDescription(crewInfo.crew[3].description)
                break;
            default:
                setCrewName(crewInfo.crew[0].name)
                setCrewCharge(crewInfo.crew[0].charge)
                setCrewDescription(crewInfo.crew[0].description)
        }
    
          
    }
    
    return(
        <div className='Crew'>
            <div className='topContentCrew'>
                <div className='titleContent'>
                    <h3>02</h3> <h4>MEET YOUR CREW</h4>
                </div>
                <div className='imgCrew'>
                    <img src={imgCrew} alt={crewName}/>
                </div>
                <div className='imgBottonLine'></div>
            </div>
            <div className='middleContentCrew'>
                <button autoFocus onClick={()=> handleButtonClick(imgCrew1)}>0</button>
                <button onClick={()=> handleButtonClick(imgCrew2)}>0</button>
                <button onClick={()=> handleButtonClick(imgCrew3)}>0</button>
                <button onClick={()=> handleButtonClick(imgCrew4)}>0</button>
            </div>
            <div className='bottonContentCrew'>
                <h3>{crewCharge}</h3>
                <h2>{crewName}</h2>
                <p className='description'>{crewDescription}</p>

            </div>
        </div>
     )
}
export {Crew}