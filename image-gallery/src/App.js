import React , {useState} from 'react';
import './App.css';
import Images from './Images';

function App() {

  const [chosenImg, setChosenImg] = useState(Images[0]);

  return (
    <div className="App">
      <div className='container'>
        <img src={chosenImg} alt='Chosen' className='chosen'/>
      </div>
      <div className='imageContainer'>
        {Images.map((item,index) => (
          <img key={index} src={item} alt="italy" onClick={()=> setChosenImg(item)}/>
        ))}
      </div>
    </div>
  );
}

export default App;
