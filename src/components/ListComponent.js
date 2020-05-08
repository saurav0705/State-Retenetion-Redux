import React from 'react';


const ListComponent = (props) => {

    const selected = (index) => {
        if(props.data[props.heading] !== undefined){
                if(props.data[props.heading].includes(index)) return true;
        }

        return false;
    }
    return (
        <div>
            <div className="heading">{props.heading}</div>
            {props.cards.length === 0 ? <div className="heading middle">NO DATA</div>:null }
        <div className="left">

        {props.cards.map((card,index) => {
          return(
          <div className={ selected(index) ?"tile selected":"tile left-tile"} onClick={()=>props.select({[props.heading]:index})} key={props.heading+index}>{props.display(index)}</div>
          )
        })}
        </div>
        </div>
    );
};

export default ListComponent;