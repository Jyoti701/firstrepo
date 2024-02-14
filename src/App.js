import './App.css';
import { useState } from 'react';
import Dice from './Dice';
import Dicegamepage from './Dicegamepage';

function App() {
  const [isgamestart, setIsgamestart] = useState(false);

  const togglebutton = () => {
    setIsgamestart((prev)=>!prev);
  };

  return (
    <div className="App">
    {
      isgamestart ? <Dicegamepage/>:<Dice toggle={togglebutton}/>
    }

    </div>
  );
}

export default App;
