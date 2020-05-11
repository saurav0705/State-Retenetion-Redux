import React, { useState,useEffect } from 'react';
import './App.scss';
import { connect} from 'react-redux'
import ListComponent from './components/ListComponent';
import ButtonContainer from './components/ButtonContainer';

function App(props) {
  
  const [item,setItem] = useState([]);
  const [input,setInput] = useState(0);
  
  const fact = (num) => {
    let result = 1;
    while(num>=1){
      result = result*num;
      num--;
    }
    return result;
  }
  var component = {
    odd:{
      heading:"odd",
      display:(val)=>2*val +1
    },
    even:{
      heading:"even",
      display:val => val*2
    },
    fobonaci:{
      heading:"fobonaci",
      display:fibo
    },
    factorial:{
      heading:"factorial",
      display:fact
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
      <div className="input-card">
        <div>Enter No. of Cards</div>
        <input type="number" value={input} onChange={(event)=>setInput(event.target.value)}/><button onClick={() => setCards()}>ok</button>
      </div>
      <ButtonContainer
        submit={()=> props.submit()}
        reset={()=>props.reset()}
        />
      <div className="grid-container">
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
      </div>
        
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
