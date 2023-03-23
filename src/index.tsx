import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './core/components/app/App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { StarsBackground } from './core/components/background/stars.background';
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <StarsBackground>
            <App />
        </StarsBackground>
    </React.StrictMode>
);

reportWebVitals();
