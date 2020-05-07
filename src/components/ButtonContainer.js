import React from 'react';

const ButtonContainer = (props) => {
    return (
        <div className="button-container">
        <div className="button reset" onClick={() => {props.reset();props.setMessage('reset was successfull')}}>
            RESET
          </div>
          <div className="button submit" onClick={() => {props.submit();props.setMessage('submit was successfull')}}>
            Submit
          </div>
        </div>
    );
};

export default ButtonContainer;