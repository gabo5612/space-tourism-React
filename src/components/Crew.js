import React, { useState } from 'react';
import '../style/Crew.css';
import imgCrew1 from '../assets/crew/image-douglas-hurley.png'
import imgCrew2 from '../assets/crew/image-mark-shuttleworth.png'
import imgCrew3 from '../assets/crew/image-victor-glover.png'
import imgCrew4 from '../assets/crew/image-anousheh-ansari.png'
import MediaQuery from "react-responsive";
function Crew(){

    const mediaQueryChange = (matches) => {

    };
    const crewInfo= {
        crew:[
            {
                name:'Douglas Hurley',
                charge: 'Commander',
                img:imgCrew1,
                description:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
                class: 'crew1'
            },{
                name:'MARK SHUTTLEWORTH',
                charge: 'Mission Specialist ',
                img:imgCrew2,
                description:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.' ,
                class: 'crew2'
            },{
                name:'Victor Glover',
                charge: 'PILOT',
                img:imgCrew3,
                description:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ' ,
                class: 'crew2'
            },{
                name:'Anousheh Ansari',
                charge: 'Flight Engineer',
                img:imgCrew4,
                description:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ' ,
                class: 'crew2'
            }
        ]
    }
    const defaultCrewDescription= crewInfo.crew[0].description
    const [crewName, setCrewName]=useState('Douglas Hurley')
    const [crewClass, setCrewClass]=useState('crew1')
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
                setCrewClass(crewInfo.crew[1].class)
                break;
            case imgCrew3:
                setCrewName(crewInfo.crew[2].name)
                setCrewCharge(crewInfo.crew[2].charge)
                setCrewDescription(crewInfo.crew[2].description)
                setCrewClass(crewInfo.crew[2].class)
                break;
            case imgCrew4:
                setCrewName(crewInfo.crew[3].name)
                setCrewCharge(crewInfo.crew[3].charge)
                setCrewDescription(crewInfo.crew[3].description)
                setCrewClass(crewInfo.crew[3].class)
                break;
            default:
                setCrewName(crewInfo.crew[0].name)
                setCrewCharge(crewInfo.crew[0].charge)
                setCrewDescription(crewInfo.crew[0].description)
                setCrewClass(crewInfo.crew[0].class)
        }
    
          
    }
    
    return(
        <div className='Crew'>
            <MediaQuery maxWidth={1399} onChange={mediaQueryChange}>
            <div className='topContentCrew'>
                <div className='titleContent '>
                    <h3>02</h3> <h4>MEET YOUR CREW</h4>
                </div>
            </div>
            <div className='switchContent'>
                    <div className='imgCrew'>
                        <img src={imgCrew} alt={crewName} className={crewClass}/>
                    </div>
                    <div className='imgBottonLine'></div>
                
                <div className='middleContentCrew'>
                    <button autoFocus onClick={()=> handleButtonClick(imgCrew1)}className='crewButton'></button>
                    <button onClick={()=> handleButtonClick(imgCrew2)}className='crewButton'></button>
                    <button onClick={()=> handleButtonClick(imgCrew3)}className='crewButton'></button>
                    <button onClick={()=> handleButtonClick(imgCrew4)}className='crewButton'></button>
                </div>
                <div className='bottonContentCrew'>
                    <h3>{crewCharge}</h3>
                    <h2>{crewName}</h2>
                    <p className='description'>{crewDescription}</p>

                </div>
            </div>
            </MediaQuery>
            <MediaQuery minWidth={1400} onChange={mediaQueryChange}>
            <div className='topContentCrew'>
                <div className='leftSideCrew'>
                    <div className='titleContent titleContentCrew '>
                            <h3>02</h3> <h4>MEET YOUR CREW</h4>
                        </div>
                    </div>
                        <div className='bottonContentCrew'>
                            <h3>{crewCharge}</h3>
                            <h2>{crewName}</h2>
                            <p className='description descriptionCrew'>{crewDescription}</p>

                        </div>
                    
                    <div className='middleContentCrew'>
                        <button autoFocus onClick={()=> handleButtonClick(imgCrew1)}className='crewButton'></button>
                        <button onClick={()=> handleButtonClick(imgCrew2)}className='crewButton'></button>
                        <button onClick={()=> handleButtonClick(imgCrew3)}className='crewButton'></button>
                        <button onClick={()=> handleButtonClick(imgCrew4)}className='crewButton'></button>
                    </div>
                </div>
            <div className='rightSideCrew'>
                <div className='imgCrew'>
                        <img src={imgCrew} alt={crewName} className={crewClass}/>
                    </div>
            </div>

            </MediaQuery>
        </div>
     )
}
export {Crew}