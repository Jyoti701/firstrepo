
import './App.css'
import { useState } from 'react';

function Dice({toggle}) {
  
  return (
    <div className='dice_main_container'>
    <div className='container-dice'>
      <div className='dice-left-container'>
      <img src='./image/dice.png' alt='diceimg' className='dice_img'/>

      </div>
      <div className='rightcontainer'>
<div className="dice_heading">
<h2 className='dice-title'>DICE GAME</h2>
<button className='playbtn' onClick={toggle}>Play Now</button>
</div>

      </div>
    </div>
    
    </div>
  )
    }


export default Dice;
