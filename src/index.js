import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import './index.css';

const Index = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <App /> 
    </BrowserRouter>
);

ReactDOM.render(<Index />, document.getElementById('root'));