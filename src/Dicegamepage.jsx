import React, { useState } from 'react';
import Showrule from './Showrule';


function Dicegamepage() {
  const num = [1, 2, 3, 4, 5, 6];
  const [selectnumber, setSelectednumber] = useState(null);
  const [rolldice, setRolldice] = useState(1);
  const [score, setScore] = useState(0);
  const [errormsg,seterrormsg]=useState('')
  const[showrule,setShowrule]=useState(false)
  


  const generaterandomnumber = (min, max) => {
    return Math.round(Math.random() * (max - min + 1));
  };

  const generaterandomdigit = () => {
    setRolldice(generaterandomnumber(1, 6));
    if (selectnumber === rolldice) {
      setScore(prevScore => prevScore + 5);
    } else {
      setScore(prevScore => prevScore - 1);
    }
    if(selectnumber===null){
      seterrormsg('please select a number')
    }else if(selectnumber!=null){
      seterrormsg('')
     
    }
    if(!selectnumber){
      return;
    }
  };
  
  const resetScore = () => {
    setScore(prevScore=>0);
    setSelectednumber(null)
    setRolldice(1)
    seterrormsg('')
  };
 const showrulecontainer=((item)=>{
  setShowrule(prev=>!prev)
 })

  return (
    <div className='dice_second_page_container'>
      <div className='topscore_container'>
        <div className='total_score_container'>
          <p className='chosennum'>{score}</p>
          <p className='txtbold'>Total score</p>
        </div>
        <div className='select_number_container'>
        <p className='errormsg'>{errormsg}</p>
          <div className='chosenum'>
          
            {num.map((item) => (
              <p
                key={item}
                onClick={() => setSelectednumber(item) }
                style={{
                  background: item === selectnumber ? 'black' : 'white',
                  color: item === selectnumber ? 'white' : 'black',
                }}
              >
                {item}
              </p>
            ))}
          </div>
          <p className='txtbold'>Select Number</p>
        </div>
      </div>
      <div className='center_dice_img'>
        <div className='img_container'>
          <img
            src={`./image/${rolldice}dice_btn.png`}
            alt="centerdiceimg"
            className='imgdice'
            onClick={generaterandomdigit}
          />
          
        </div>
        <p className='clickon_txt'>Click on dice to roll</p>
        <button className='restbtn' onClick={resetScore}>
          Reset score
        </button>
        <button className='rulebtn' onClick={showrulecontainer}>{showrule ?"hide": "show"} Rules</button>
      </div>
      {showrule &&<Showrule/>}
    </div>
  );
}

export default Dicegamepage;
