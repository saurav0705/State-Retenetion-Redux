import React, { useRef, useEffect } from 'react';
import {TimelineLite,Power2} from 'gsap'
import './animation-tutorial.scss';
const Tutorial = () => {
    let timeline = new TimelineLite();
    let cards = Array(10).fill("something");
    let cardRef = useRef({heading1:[],heading2:[]});
    useEffect(()=>{
        timeline.staggerFrom(cardRef.current.heading1,0.3,{y:-10,opacity:0,ease:Power2.easeInOut},0.3)
                .staggerFrom(cardRef.current.heading2,0.3,{y:-10,opacity:0,ease:Power2.easeInOut},0.3)

    },[])
    return (
        <div className="flex">
            <div className="container">
                <div className="heading">
                    heading 1
                </div>
                <div className="content">
                    {cards.map((card,index) =>{return (<div className="card" ref={el => {cardRef.current.heading1[index] = el}}>{card}</div>)})}
                </div>

            </div>

            <div className="container">
                <div className="heading">
                    heading 2
                </div>
                <div className="content">
                    {cards.map((card,index) =>{return (<div className="card" ref={el => {cardRef.current.heading2[index] = el}}>{card}</div>)})}
                </div>

            </div>
        </div>
    );
};

export default Tutorial;