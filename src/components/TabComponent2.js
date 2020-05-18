import React,{useState,useEffect} from 'react';
import {connect} from 'react-redux';
import Loading from './Loading';
import ListComponent from './ListComponent';
import ButtonContainer from './ButtonContainer';
import {getData} from '../service';

const TabComponent2 = (props) => {
    const [item,setItem] = useState([]);
  const [input,setInput] = useState(10);

  useEffect(()=>{
      // if(props.data.odd === undefined){getData((data)=> props.add(data));}
    setCards(input);

  },[])
  
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
      heading:"fibbonaci",
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
    props.add({});
    getData((data)=> props.add(data));
    setItem(() => cards)
  }
    return (
        <div>
           {props.data.odd === undefined ? <Loading/>:
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
          <div key={comp}>
          <ListComponent
        heading={component[comp].heading}
        cards={item}
        display={component[comp].display}
        select={(val) => props.select(val)}
        data={props.data}
        

      />
      </div>
      
        )
      })}
      </div>
        
      </div>}    
        </div>
    );
};
const mapStateToProps = (state) => {
    return {
      data: state
    };
  }
  
  const mapDispatchToProps = (dispatch) => {
    return{
      select:(num) => dispatch({type:'SELECT',payload:num}),
      submit:() => dispatch({type:'SUBMIT'}),
      reset:() => dispatch({type:'RESET'}),
      add:(data) => dispatch({type:'ADD',payload:data})
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(TabComponent2);