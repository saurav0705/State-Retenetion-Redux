import React, { useState,useEffect } from 'react';
import './App.css';
import { connect} from 'react-redux'
import ListComponent from './components/ListComponent';
import ButtonContainer from './components/ButtonContainer';

function App(props) {
  const [message,setMessage] = useState('');
  const [item,setItem] = useState([]);
  const [input,setInput] = useState(0);
  useEffect(()=>{
    setTimeout(()=>setMessage(''),2000);
  },[message])
  function fibo(num){
    var a = 1, b = 0, temp;
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp;
      num--;
    }
  
    return b;
  }
  
  const setCards = () => {
    let cards = Array(parseInt(input)).fill("something");  
    setItem(() => cards)
  }
  return (
    <div className="App">
      <div className="flex">
      <div className="message">{message}</div>
      <div className="input-card">
        <div>Enter No. of Cards</div>
        <input type="number" value={input} onChange={(event)=>setInput(event.target.value)}/><button onClick={() => setCards()}>ok</button>
      </div>
      <ListComponent
        heading="even"
        cards={item}
        display={(val) => val*2}
        select={(val) => props.select(val)}
        data={props.data}

      />
      <ListComponent
        heading="odd"
        cards={item}
        display={(val) => 2*val +1}
        select={(val) => props.select(val)}
        data={props.data}

      />
      <ListComponent
      heading="fibonaci"
      cards={item}
      display={(val) => fibo(val)}
      select={(val) => props.select(val)}
      data={props.data}

      />
        <ButtonContainer
        submit={()=> props.submit()}
        reset={()=>props.reset()}
        setMessage={(msg)=>setMessage(msg)}
        />
      </div>

      
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state
  };
}

const mapDispatchToProps = (dispatch) => {
  return{
    select:(num) => dispatch({type:'SELECT',payload:num}),
    submit:() => dispatch({type:'SUBMIT'}),
    reset:() => dispatch({type:'RESET'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
