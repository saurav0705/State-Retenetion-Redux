import React,{useEffect,useState} from 'react';

const ButtonContainer = (props) => {
  const [message,setMessage] = useState('');
  useEffect(()=>{
    setTimeout(()=>setMessage(''),2000);
  },[message])
    return (
        <div className="button-container">
        <div className="button reset" onClick={() => {props.reset();setMessage('reset was successfull')}}>
            RESET
          </div>
          <div className="message">{message}</div>
          <div className="button submit" onClick={() => {props.submit();setMessage('submit was successfull')}}>
            Submit
          </div>
        </div>
    );
};

export default ButtonContainer;