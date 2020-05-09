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

  var component = {
    "odd":{
      heading:"odd",
      display:(val)=>2*val +1
    },
    "even":{
      heading:"even",
      display:val => val*2
    },
    "fobonaci":{
      heading:"fobonaci",
      display:fibo
    }
  }
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

      {Object.keys(component).map(comp => {
        return(
          <ListComponent
        heading={component[comp].heading}
        cards={item}
        display={component[comp].display}
        select={(val) => props.select(val)}
        data={props.data}

      />
        )
      })}
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
