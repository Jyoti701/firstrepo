import React,{useState} from 'react'
import './App.css'


function Showrule() {

  return (
    <div className='howtoplay_desc_container'>
        <h3 className='howtoplayhd'>How to play dice game</h3>
        <ul className='howtoply_desc'>
          <li>Select any number</li>
          <li>Click on dice image</li>
          <li>
            After clicking on the dice, if the selected number is equal to the
            rolled number, you will get the same points as the dice
          </li>
          <li>If you get the wrong guess, then 2 points will be deducted</li>
        </ul>
      </div>
  )
}

export default Showrule;
