import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [selected,setSelected] = useState([]);
  const cards = [1,2,3,4,5,6,7,8,9,10];
  useEffect(()=>{
    let obj = [];
    if(localStorage.getItem('selected')){
      obj= JSON.parse(localStorage.getItem('selected'));

    }else{
   for(let i=0;i<21;i++){ 
      obj.push(false);
    }}

    setSelected([...obj]);
  },[])

  const select = (num) => {
      let obj = selected;
      obj[num] = !obj[num];
      setSelected([...obj])
      localStorage.setItem('selected',JSON.stringify(selected));

  }

 
  return (
    <div className="App">
      <div className="flex">
        <div className="left">

        {cards.map(card => {
          return(
          <div className={selected[card*2] ?"tile selected":"tile left-tile"} onClick={()=>select(card*2)} key={card*2}>{card*2}</div>
          )
        })}
        </div>
        <div className="right ">
        {cards.map(card => {
          return(
          <div className={selected[(card*2)+1] ? "tile selected":"tile right-tile"} onClick={()=>select((card*2) + 1)} key={(card*2) + 1}>{(card*2) + 1}</div>
          )
        })}
        </div>
      </div>

      
    </div>
  );
}

export default App;
