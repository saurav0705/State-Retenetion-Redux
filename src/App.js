import React, { useState,useEffect } from 'react';
import './App.css';
import { connect} from 'react-redux'
import ListComponent from './components/ListComponent';
import ButtonContainer from './components/ButtonContainer';

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
      <ListComponent
        heading="even"
        cards={cards}
        display={(val) => val*2}
        select={(val) => props.select(val)}
        data={props.data}

      />
      <ListComponent
        heading="odd"
        cards={cards}
        display={(val) => 2*val +1}
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
