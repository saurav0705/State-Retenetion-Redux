import React, { useState,useEffect } from 'react';
import './App.css';
import { connect} from 'react-redux'

function App(props) {
  const [message,setMessage] = useState('');
  useEffect(()=>{
    setTimeout(()=>setMessage(''),2000);
  },[message])
  const cards = [0,1,2,3,4,5,6,7,8,9];
  return (
    <div className="App">
      <div className="flex">
      <div className="message">{message}</div>
        <div className="heading">EVEN</div>
        <div className="left">

        {cards.map(card => {
          return(
          <div className={props.data[card*2] ?"tile selected":"tile left-tile"} onClick={()=>props.select(card*2)} key={card*2}>{card*2}</div>
          )
        })}
        </div>
        <div className="heading">ODD</div>
        <div className="right ">
        {cards.map(card => {
          return(
          <div className={props.data[(card*2)+1] ? "tile selected":"tile right-tile"} onClick={()=>props.select((card*2) + 1)} key={(card*2) + 1}>{(card*2) + 1}</div>
          )
        })}
        </div>
        <div className="button-container">
        <div className="button reset" onClick={() => {props.reset();setMessage('reset was successfull')}}>
            RESET
          </div>
          <div className="button submit" onClick={() => {props.submit();setMessage('submit was successfull')}}>
            Submit
          </div>
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
