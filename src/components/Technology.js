import React, { useState } from 'react';
import '../style/Technology.css';
import MediaQuery from "react-responsive";
function Technology(){
    const techInfo= {
        tech:[
            {
                title:'LAUNCH VEHICLE',
                description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
                class: 'tech1'
            },{
                title:'SPACEPORT',  
                description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch." ,
                class: 'tech2'
            },{
                title:'SPACE CAPSULE',
                description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained." ,
                class: 'tech3'
            }
        ]
    }
    const defaultTechDescription= techInfo.tech[0].description
    const [techName, setTechName]=useState('LAUNCH VEHICLE')
    const [techClass, setTechClass]=useState('tech1')
    const [techDescription, setTechDescription]=useState(defaultTechDescription)
    
    function handleButtonClick(techClass){
        setTechClass(techClass)
        switch(techClass){
            case 'tech2':
                setTechName(techInfo.tech[1].title)
                setTechDescription(techInfo.tech[1].description)
                break;
            case 'tech3':
                setTechName(techInfo.tech[2].title)
                setTechDescription(techInfo.tech[2].description)
                break;
            default:
                setTechName(techInfo.tech[0].title)
                setTechDescription(techInfo.tech[0].description)

        }
    
          
    }
    const mediaQueryChange = (matches) => {

    };
    
    return(
        <div className='technology'>
            <MediaQuery maxWidth={1399} onChange={mediaQueryChange}>
            <div className='topContentTech'>
                <div className='titleContent titleContentTech'>
                    <h3>03</h3> <h4>SPACE LAUNCH 101</h4>
                </div>
                <div className={techClass}>

                </div>
            </div>
            
                <div className='middleContentTech'>
                    <button autoFocus onClick={()=> handleButtonClick('tech1')}className='techButton'>1</button>
                    <button onClick={()=> handleButtonClick('tech2')}className='techButton'>2</button>
                    <button onClick={()=> handleButtonClick('tech3')}className='techButton'>3</button>
    
                </div>
                <div className='bottonContentCrew'>
                    <h3>THE TERMINOLOGY...</h3>
                    <h2>{techName}</h2>
                    <p className='description'>{techDescription}</p>

                </div>
                </MediaQuery>  
                <MediaQuery minWidth={1400} onChange={mediaQueryChange}>
                    <div className='leftSideTechDesktop'>
                   
                        <div className='topContentTech'>
                            <div className='titleContent titleContentTech'>
                                <h3>03</h3> <h4>SPACE LAUNCH 101</h4>
                            </div>
                     
                        </div>
                        <div className='infoTechDesktop'>
                            <div className='middleContentTech'>
                                <button autoFocus onClick={()=> handleButtonClick('tech1')}className='techButton'>1</button>
                                <button onClick={()=> handleButtonClick('tech2')}className='techButton'>2</button>
                                <button onClick={()=> handleButtonClick('tech3')}className='techButton'>3</button>
                
                            </div>
                            <div className='bottonContentCrew bottonContentTech'>
                                <h3>THE TERMINOLOGY...</h3>
                                <h2>{techName}</h2>
                                <p className='description descriptionTech'>{techDescription}</p>

                            </div>
                        </div>
                </div>
                <div className='rightSideTechDesktop'> 
                    <div className={techClass}></div>
                </div>
                </MediaQuery>
        </div>
     )
} 

export {Technology}