import React from 'react';


const ListComponent = (props) => {
    return (
        <div>
            <div className="heading">{props.heading}</div>
        <div className="left">

        {props.cards.map(card => {
          return(
          <div className={props.data[props.display(card)] ?"tile selected":"tile left-tile"} onClick={()=>props.select(props.display(card))} key={props.display(card)}>{props.display(card)}</div>
          )
        })}
        </div>
        </div>
    );
};

export default ListComponent;