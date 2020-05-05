import React, { useEffect, useState } from 'react';
import './App.css';
import { connect} from 'react-redux'

function App(props) {
  const cards = [1,2,3,4,5,6,7,8,9,10];
  return (
    <div className="App">
      <div className="flex">
        <div className="left">

        {cards.map(card => {
          return(
          <div className={props.data[card*2] ?"tile selected":"tile left-tile"} onClick={()=>props.select(card*2)} key={card*2}>{card*2}</div>
          )
        })}
        </div>
        <div className="right ">
        {cards.map(card => {
          return(
          <div className={props.data[(card*2)+1] ? "tile selected":"tile right-tile"} onClick={()=>props.select((card*2) + 1)} key={(card*2) + 1}>{(card*2) + 1}</div>
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
    select:(num) => dispatch({type:'SELECT',payload:num})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
