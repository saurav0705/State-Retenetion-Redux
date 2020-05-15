import React,{useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const Header = () => {
    let history = useHistory();
    const [selected,setSelected] = useState('/');
    const viewComponent = (value) => {
        history.push('/'+value);
    }
    useEffect(()=>{
        setSelected(history.location.pathname);
        return history.listen(location =>{
            setSelected(location.pathname);
            
        })
    },[history])
    return (
        <div>
            <div className="tab">
            <div className={selected === "/" ? "tab-flex selected":"tab-flex"} onClick={() =>viewComponent("")}>Welcome</div>
            <div className={selected === "/data" ? "tab-flex selected":"tab-flex"} onClick={() =>viewComponent("data")}>Data</div>    
            </div>      
        </div>
    );
};

export default Header;