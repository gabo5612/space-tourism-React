import React, { useState } from 'react';
import '../style/Home.css';
import { Destination } from './Destination';

function Home() {
  const [caseDefault, setCaseDefault] = useState(0);

  function handleJumpPage(option) {
    setCaseDefault(option);
  }
  if(caseDefault===0){
    return (
        
    <div className='Home'> 
    <div className='Content'>
      <div className='topContent'>
        <div className='subTitle'>
          <h5>SO, YOU WANT TO TRAVEL TO</h5>
        </div>
        <div className='title'>
          <h1>SPACE</h1>
        </div>
        <div className='text'>
          <p>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
      </div>
      <div className='bottonContent'>
       
          <div className='circle'>
            <span onClick={() => handleJumpPage(1)}>EXPLORE</span>
          </div>
       
      </div>
    </div>
  </div>
    )
  } else{
  return (<Destination /> );
}
}

export { Home };
