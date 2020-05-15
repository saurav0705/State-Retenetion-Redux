import React from 'react';
import {useHistory} from 'react-router-dom';

const TabComponent = () => {
    let history = useHistory();
    return (
        <div className="welcome">
                  <div className="heading">Welcome</div>
                  <div className="message" onClick={() => history.push('/data')}>Go to data to view data</div>
        </div>
    );
};

export default TabComponent;