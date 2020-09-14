import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';


ReactDOM.render(        
    (<BrowserRouter>
            <App />
    </BrowserRouter>),
    document.getElementById('root'));

const images = {
    logos: {
        logo1: require('./logos/1.gif'),
        logo2: require('./logos/2.gif'),
        logo3: require('./logos/3.gif'),
        logo4: require('./logos/4.gif'),
        logo5: require('./logos/5.gif'),
        logo6: require('./logos/6.gif'),
        logo7: require('./logos/7.gif'),
    }
};

export default images;